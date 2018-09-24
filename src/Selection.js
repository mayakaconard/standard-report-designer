import React, { Component } from "react";
import ReactDOM from 'react-dom';
import FilteredMultiSelect from "react-filtered-multiselect";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomInput, Form, FormGroup } from "reactstrap";

import { Card, Button, CardHeader} from "reactstrap";
import Collapsible from "react-collapsible";

//API FETCH DATA FUNCTIONS

//API FETCH AUTH HEADER
const headers = {
  headers: {
    Authorization: `Basic ${btoa("conard:Conard40.")}`
  }
};
//END OF HEADER

//END OF FETCH DATA FUNCTIONS

//data


const DATASETS = [
  { id: 1, name: "Dbanga_Artemether/Lumefantrine 100/20mg tablet_MOS" },
  { id: 2, name: "Dbanga_ANC 4th visit coverage by ANC 1 (%)" },
  {
    id: 249,
    name:
      "Dbanga_No. of people living with HIV received IPT evaluation-(Sub-Total-Female-<15 and >=15years)"
  },
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
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
      Indicator: [],
      filterText: "",
      selectedOptions: []
    };
  }

  // componentWillMount(){
  //   localStorage.getItem("Indicator")&&this.setState({
  //     Indicator:JSON.parse(localStorage.getItem("Indicator")),
  //     isLoading:false
  //   })
  // }
  componentDidMount(){
    //FETCH INDICATORS
    // if(!localStorage.getItem('Indicator')){
      fetch(
        "http://197.136.81.99:8082/test/api/indicators/?fields=:all&format=json&page_size=1",
        headers
      )
        .then(response => response.json())
        .then(findResponse => {
          const indicatorData = findResponse.indicators.map(findResponse => {
            return {
              value: `${findResponse.id}`,
              text: `${findResponse.name}`
            };
          });
          console.log(indicatorData);
          this.setState({
            Indicator: indicatorData
          });
        });
//     }
   
// else{
//   console.log('Using data from localStorage');
// }

 }
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem("Indicator",JSON.stringify(nextState.Indicator));
  }
  //END OF INDICATOR FETCH 

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
    var {Indicator}=this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <FilteredMultiSelect
            buttonText="Add"
            classNames={BOOTSTRAP_CLASSES}
            onChange={this.handleSelect}
            options={Indicator}
            selectedOptions={selectedOptions}
            textProp="text"
            valueProp="value"
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
            textProp="text"
            valueProp="value"
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
      filterText: "",
      selectedOptions: []
    };
  }
  // state = {
  //   selectedOptions: []
  // };

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
  componentDidMount() {
    //fetch data
    fetch(
      `http://197.136.81.99:8082/test/api/dataElements/?fields=:all&format=json&page_size=50`,
      headers
    )
      .then(response => response.json())
      .then(findResponse => {
        const dataSetData = findResponse.dataElements.map(findResponse => {
          return {
            value: `${findResponse.id}`,
            text: `${findResponse.name}`
          };
        });
        console.log(dataSetData);
        this.setState({
          DataElements: dataSetData
        });
      });
  }

  render() {
    var { selectedOptions } = this.state;
   
    //data for rendering
    const { DataElements } = this.state;
    //  const options=[
    //   {id:"", value:""}
    // ]
    return (
      <div className="row">
        <div className="col-md-12">
          <FilteredMultiSelect
            buttonText="Add"
            classNames={BOOTSTRAP_CLASSES}
            onChange={this.handleSelect}
            options={DataElements}
            selectedOptions={selectedOptions}
            textProp="text"
            valueProp="value"
          />
        </div>

        <div className="col-md-12">
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
            textProp="text"
            valueProp="value"
          />
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
