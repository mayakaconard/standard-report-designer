import React, { Component } from "react";
import FilteredMultiSelect from "react-filtered-multiselect";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomInput, Form, FormGroup, Label } from "reactstrap";

//API FETCH DATA FUNCTIONS

//API FETCH AUTH HEADER
// const headers = {
//   headers: {
//     Authorization: `Basic ${btoa("conard:Conard40.")}`
//   }
// };
//END OF HEADER




//END OF FETCH DATA FUNCTIONS

//data
const INDICATORS = [
  { id: 1, name: "Dbanga_Artemether/Lumefantrine 100/20mg tablet_MOS" },
  { id: 2, name: "Dbanga_ANC 4th visit coverage by ANC 1 (%)" },
  { id: 249, name: "Dbanga_No. of people living with HIV received IPT evaluation-(Sub-Total-Female-<15 and >=15years)" },
  { id: 250, name: "Dbanga_Depo- Provera_MOS" }
];
const DATAELEMENTS = [
  { id: 1, name: "Dbanga_Artemether/Lumefantrine 100/20mg tablet_MOS" },
  { id: 2, name: "Dbanga_ANC 4th visit coverage by ANC 1 (%)" },
  { id: 249, name: "Dbanga_No. of people living with HIV received IPT evaluation-(Sub-Total-Female-<15 and >=15years)" },
  { id: 250, name: "Dbanga_Depo- Provera_MOS" }
];
const DATASETS = [
  { id: 1, name: "Dbanga_Artemether/Lumefantrine 100/20mg tablet_MOS" },
  { id: 2, name: "Dbanga_ANC 4th visit coverage by ANC 1 (%)" },
  { id: 249, name: "Dbanga_No. of people living with HIV received IPT evaluation-(Sub-Total-Female-<15 and >=15years)" },
  { id: 250, name: "Dbanga_Depo- Provera_MOS" }
];

//control classes
const BOOTSTRAP_CLASSES = {
  filter: "form-control",
  select: "form-control",
  button: "btn btn btn-block btn-default",
  buttonActive: "btn btn btn-block btn-primary"
};

//class period selector
class PeriodSelector extends Component {
  state = {
    selectedOptions: []
  };
  handleSelect = selectedOptions => {
    selectedOptions.sort((a, b) => a.id - b.id);
    this.setState({ selectedOptions });
  };

  render() {
    var { selectedOptions } = this.state;
    return (
      <div className="row">
        <Form>
          <FormGroup>
            <div className="col-md-12">
              <CustomInput
                type="checkbox"
                id="exampleCustomInline"
                label="Daily"
                inline
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomInline2"
                label="weekly"
                inline
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomInline3"
                label="last year"
                inline
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomInline4"
                label="last week"
                inline
              />
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
//end of class PeriodSelector

//start of dataset selector class
class DatasetsSelector extends Component {
  state = {
    selectedOptions: [],
    indicatorOptions: []
  };

  handleDeselect = deselectedOptions => {
    var selectedOptions = this.state.selectedOptions.slice();
    deselectedOptions.forEach(option => {
      selectedOptions.splice(selectedOptions.indexOf(option), 1);
    });
    this.setState({ selectedOptions });
  };
  handleSelect = selectedOptions => {
    selectedOptions.sort((a, b) => a.id - b.id);
    this.setState({ selectedOptions });
  };

  render() {
    var { selectedOptions } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <FilteredMultiSelect
            buttonText="Add"
            classNames={BOOTSTRAP_CLASSES}
            onChange={this.handleSelect}
            options={DATASETS}
            selectedOptions={selectedOptions}
            textProp="name"
            valueProp="id"
          />
        </div>
        <div className="col-md-6">
          <FilteredMultiSelect
            buttonText="Remove"
            classNames={{
              filter: "form-control",
              select: "form-control",
              button: "btn btn btn-block btn-default",
              buttonActive: "btn btn btn-block btn-danger"
            }}
            onChange={this.handleDeselect}
            options={selectedOptions}
            textProp="name"
            valueProp="id"
          />
        </div>
      </div>
    );
  }
}

// end of dataset selector class

// INDICATOR SELECTOR START
class IndicatorSelector extends Component {
  state = {
    selectedOptions: []
  };

  handleDeselect = deselectedOptions => {
    var selectedOptions = this.state.selectedOptions.slice();
    deselectedOptions.forEach(option => {
      selectedOptions.splice(selectedOptions.indexOf(option), 1);
    });
    this.setState({ selectedOptions });
  };
  handleSelect = selectedOptions => {
    selectedOptions.sort((a, b) => a.id - b.id);
    this.setState({ selectedOptions });
  };

  render() {
    var { selectedOptions } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <FilteredMultiSelect
            buttonText="Add"
            classNames={BOOTSTRAP_CLASSES}
            onChange={this.handleSelect}
            options={INDICATORS}
            selectedOptions={selectedOptions}
            textProp="name"
            valueProp="id"
          />
        </div>
        <div className="col-md-6">
          <FilteredMultiSelect
            buttonText="Remove"
            classNames={{
              filter: "form-control",
              select: "form-control",
              button: "btn btn btn-block btn-default",
              buttonActive: "btn btn btn-block btn-danger"
            }}
            onChange={this.handleDeselect}
            options={selectedOptions}
            textProp="name"
            valueProp="id"
          />
        </div>
      </div>
    );
  }
}

//END OF INDICATORSELECTOR CLASS

//START OF DATA ELEMENTS SELECTOR
class DataElementsSelector extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
      DataElements: [],
      filterText: ""
    };
  }
  state = {
    selectedOptions: []
  };

  //MULLTISELECT ELEMENT HANDLING
  handleDeselect = deselectedOptions => {
    var selectedOptions = this.state.selectedOptions.slice();
    deselectedOptions.forEach(option => {
      selectedOptions.splice(selectedOptions.indexOf(option), 1);
    });
    this.setState({ selectedOptions });
  };
  handleSelect = selectedOptions => {
    selectedOptions.sort((a, b) => a.id - b.id);
    this.setState({ selectedOptions });
  };
// END 

//DATAELEMENTS FETCH 
componentDidMount(){
  fetch(
    "http://197.136.81.99:8082/test/api/dataElements/?fields=:all&format=json&page_size=50",{
  headers: {
    Authorization: `Basic ${btoa("conard:Conard40.")}`
  }
}    
  )

  .then(Response => Response.json())
      .then(findresponse => {
       
                console.log(findresponse.dataElements);
                this.setState({ DataElements: findresponse.dataElements });
        
      
      });
//   .then(response=>response.json())
//   .then((parsedJSON) => {
//     const options = parsedJSON.dataElements.map(response => {
//         return ({
//             id: `${response.id}`,
//             name: `${response.name}`          
//         })
//     });
//     console.log(options);
//     this.setState({ DataElements: options });
// })
//   // .then(parsedJSON=>parsedJSON.dataElements.map(DataElements=>(
//   //   {
//   //    dataId: `${DataElements.id}`,
//   //    dataName: `${DataElements.displayName}`
//   //   }
//   // )))


//   .then(DataElements=>this.setState({DataElements,isLoading:false}))
//   .catch(error=>console.log('Parsing error',error)) 
}

  render() {
    var { selectedOptions } = this.state;
   //data for rendering
   const {DataElements}=this.state;
  //  const options=[
  //   {id:"", value:""}
  // ]
   return( 
       
          <div className="row">
        <div className="col-md-5">

        {/* {this.state.DataElements.map( (dynamicData,key) => {
       
            let options = [this.state.options];   //creating the copy
        
            //adding new data
            options.push({
                id: key,
                value:dynamicData,
                completed: false
            });
        
            //updating the state value
            this.setState({options}); 
            
            */}
          
       
      <select >
          {this.state.DataElements.map( (dynamicData,key) =>          
           
        <option key={key}>{dynamicData.name}</option>
          )}
      </select>
           {/* <FilteredMultiSelect 
         
            buttonText="Add"
            classNames={BOOTSTRAP_CLASSES}
            onChange={this.handleSelect}
            options={options}
            selectedOptions={selectedOptions}
            textProp="name"
            valueProp="id"
          />
     
        </div>
        
        <div className="col-md-5">
          <FilteredMultiSelect
            buttonText="Remove"
            classNames={{
              filter: "form-control",
              select: "form-control",
              button: "btn btn btn-block btn-default",
              buttonActive: "btn btn btn-block btn-danger"
            }}
            onChange={this.handleDeselect}
            options={selectedOptions}
            textProp="name"
            valueProp="id"
          /> */}
        </div>
      </div>
      
      
   
      
    );

  
  
  }
}

// END OF DATAELEMENTS SELECTRO CLASS

//export the classes
export {
  DatasetsSelector,
  IndicatorSelector,
  DataElementsSelector,
  PeriodSelector
};
