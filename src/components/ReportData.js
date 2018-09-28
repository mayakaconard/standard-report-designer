import React, { Component } from "react";
import Header from "./ui/Header";
import { Link } from "react-router-dom";
import { Card, Button, CardHeader,CardBody } from "reactstrap";
import Collapsible from "react-collapsible";
import FilteredMultiSelect from "react-filtered-multiselect";
import "bootstrap/dist/css/bootstrap.min.css";
//import Counties from '../components/Counties.json';

// const counties = require('../components/Counties.json')
// console.log(counties.results)

//API FETCH DATA FUNCTIONS

//API FETCH AUTH HEADER
const headers = {
  headers: {
    Authorization: `Basic ${btoa("conard:Conard40.")}`
  }
};
//END OF HEADER

//control classes
const BOOTSTRAP_CLASSES = {
  filter: "form-control",
  select: "form-control",
  button: "btn btn btn-block btn-default",
  buttonActive: "btn btn btn-block btn-primary"
};

class ReportData extends Component {
  constructor() {
        super();
        // var counties = require('../components/Counties.json')
        // console.log(counties.results)
    
    var currentIndicator=JSON.parse(localStorage.getItem("someone"));
    var currentDataElements=JSON.parse(localStorage.getItem("element"));
    var currentDataSets=JSON.parse(localStorage.getItem("dataset"));
    var currentOrgUnits=JSON.parse(localStorage.getItem("orgunit"));
    
    var currentCounty=JSON.parse(localStorage.getItem("county"))
    
    console.log('hello world');
    this.state = {
      isLoading: false,
      filterText: "",
      Indicator: [],
      DataElements: [],
      OrgUnits: [],
      DataSets: [],
      County: [],
      selectedOptions:[],
      SelectedIndicators:currentIndicator,
      SelectedDataElements: currentDataElements,
      SelectedOrgUnits: currentDataSets,
      SelectedDataSets: currentOrgUnits,
      SelectedCounty: currentCounty
    };
  }

  //check if data is fetched 

  componentWillMount(){
    localStorage.getItem('Indicator')&&this.setState({
      Indicator:JSON.parse(localStorage.getItem('Indicator')),
      isLoading:false
    })

    localStorage.getItem('DataElements')&&this.setState({
      DataElements:JSON.parse(localStorage.getItem('DataElements')),
      isLoading:false
    })

    localStorage.getItem('DataSets')&&this.setState({
      DataSets:JSON.parse(localStorage.getItem('DataSets')),
      isLoading:false
    })

    localStorage.getItem('OrgUnits')&&this.setState({
      OrgUnits:JSON.parse(localStorage.getItem('OrgUnits')),
      isLoading:false
    })
    localStorage.getItem('County')&&this.setState({
      OrgUnits:JSON.parse(localStorage.getItem('County')),
      isLoading:false
    })
  }
  
   
   //fetch counties
  

  componentDidMount() {
    // this.setState({
    //   County:counties.results
    // });
    // console.log(this.state.County)
    // if(!localStorage.getItem('County')){
    //   fetch(
    //     '../components/Counties.json'
    //   )
    //     .then(response => response.json())
    //     .then(findResponse => {
    //       const countyData = findResponse.results.map(findResponse => {
    //         return {
    //           value: `${findResponse.id}`,
    //           text: `${findResponse.name}`
    //         };
    //       });
    //       console.log(countyData);
    //       this.setState({
    //         County: countyData
    //       });
    //     });
  
    // }
    // else{
    //   console.log('Using locad county data');
    // }
   


    //fetch indicators
    if(!localStorage.getItem('Indicator')){
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
  
    }
    else{
      console.log('Using locad indicator data');
    }
    //end of indicators

    //Fetch dataElements
    if(!localStorage.getItem('DataElements')){
    fetch(
      `http://197.136.81.99:8082/test/api/dataElements/?fields=:all&format=json&page_size=50`,
      headers
    )
      .then(response => response.json())
      .then(findResponse => {
        const dataElementData = findResponse.dataElements.map(findResponse => {
          return {
            value: `${findResponse.id}`,
            text: `${findResponse.name}`
          };
        });
        console.log(dataElementData);
        this.setState({
          DataElements: dataElementData
        });
      });
    }
    else{
      console.log('Using locad DataElement data');
    }
    //end of fetching dataElements

    //fetch DataSets
    if(!localStorage.getItem('DataSets')){
    fetch(
      `http://197.136.81.99:8082/test/api/dataSets/?fields=:all&format=json&page_size=50`,
      headers
    )
      .then(response => response.json())
      .then(findResponse => {
        const dataSetData = findResponse.dataSets.map(findResponse => {
          return {
            value: `${findResponse.id}`,
            text: `${findResponse.name}`
          };
        });
        console.log(dataSetData);
        this.setState({
          DataSets: dataSetData
        });
      });
     }
     else{
       console.log('Using locad DataSet data');
     }
    //End of fetching dataSets

    //fetch organisationUnits

    if(!localStorage.getItem('OrgUnits')){
    fetch(
      `http://197.136.81.99:8082/test/api/organisationUnits/?fields=:all&format=json&page_size=50`,
      headers
    )
      .then(response => response.json())
      .then(findResponse => {
        const orgunitsData = findResponse.organisationUnits.map(
          findResponse => {
            return {
              value: `${findResponse.id}`,
              text: `${findResponse.name}`
            };
          }
        );
        console.log(orgunitsData);
        this.setState({
          OrgUnits: orgunitsData
        });
      });
    //end of fetching organisationUnits
    }
    else{
      console.log('Using locad OrgUnit data');
    }

  }

  //save fetched data to local storage
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem("Indicators",JSON.stringify(nextState.Indicator));
    localStorage.setItem("Datasets",JSON.stringify(nextState.DataSets));
    localStorage.setItem("DataElements",JSON.stringify(nextState.DataElements));
    localStorage.setItem("organisationUnits",JSON.stringify(nextState.OrgUnits));
    localStorage.setItem("Counties",JSON.stringify(nextState.County));
    
  }

  
  handleDeselectIndicator = deselectedIndicators => {
    var SelectedIndicators = this.state.SelectedIndicators.slice();
    deselectedIndicators.forEach(option => {
      SelectedIndicators.splice(SelectedIndicators.indexOf(option), 1);
    });
    console.log(SelectedIndicators);
    localStorage.setItem("someone",JSON.stringify(SelectedIndicators));
    this.setState({ SelectedIndicators });
  };
  handleSelectIndicator = SelectedIndicators => {
    SelectedIndicators.sort((a, b) => a.id - b.id);
    console.log(SelectedIndicators);
    localStorage.setItem("someone",JSON.stringify(SelectedIndicators));
    this.setState({ SelectedIndicators });
  };
  //end of indicators

  //dataElements Handler

  handleDeselectDataElement = deselectedDataElements => {
    var SelectedDataElements = this.state.SelectedDataElements.slice();
    deselectedDataElements.forEach(option => {
      SelectedDataElements.splice(SelectedDataElements.indexOf(option), 1);
    });
    console.log(SelectedDataElements);
    localStorage.setItem("element",JSON.stringify(SelectedDataElements));
    this.setState({ SelectedDataElements });
  };
  handleSelectDataElement = SelectedDataElements => {
    SelectedDataElements.sort((a, b) => a.id - b.id);
    console.log(SelectedDataElements);
    localStorage.setItem("element",JSON.stringify(SelectedDataElements));
    this.setState({ SelectedDataElements });
  };
  //end of dataElements Handling

  //dataSets Handling
  handleDeselectDataset = deselectedDataSets => {
    var SelectedDataSets = this.state.SelectedDataSets.slice();
    deselectedDataSets.forEach(option => {
      SelectedDataSets.splice(SelectedDataSets.indexOf(option), 1);
    });
    this.setState({ SelectedDataSets });
    localStorage.setItem("dataset",JSON.stringify(SelectedDataSets));
    this.setState({ SelectedDataSets });
  };
  handleSelectDataset = SelectedDataSets => {
    SelectedDataSets.sort((a, b) => a.id - b.id);
    console.log(SelectedDataSets);
    localStorage.setItem("dataset",JSON.stringify(SelectedDataSets));
    this.setState({ SelectedDataSets });
  };
  // END DataSets Handling

  //organisationUnits handling
  handleDeselectOrgunit = deselectedOrgUnits => {
    var SelectedOrgUnits = this.state.SelectedOrgUnits.slice();
    deselectedOrgUnits.forEach(option => {
      SelectedOrgUnits.splice(SelectedOrgUnits.indexOf(option), 1);
    });
    this.setState({ SelectedOrgUnits });
    localStorage.setItem("orgunit",JSON.stringify(SelectedOrgUnits));
    console.log(SelectedOrgUnits);
  };
  handleSelectOrgunit = SelectedOrgUnits => {
    SelectedOrgUnits.sort((a, b) => a.id - b.id);
    console.log(SelectedOrgUnits);
    localStorage.setItem("orgunit",JSON.stringify(SelectedOrgUnits));
    this.setState({ SelectedOrgUnits });
  };
  
  handleDeselect(index) {
    var selectedOptions = this.state.selectedOptions.slice();
    selectedOptions.splice(index, 1);
    this.setState({ selectedOptions });
  }
  handleClearSelection = e => {
    this.setState({ selectedOptions: [] });
  };
  handleSelectionChange = selectedOptions => {
    selectedOptions.sort((a, b) => a.id - b.id);
    this.setState({ selectedOptions });
  };
  // END

  render() {
    var { SelectedDataElements } = this.state;
    var { SelectedIndicators } = this.state;
    var { SelectedDataSets } = this.state;
    var { SelectedOrgUnits } = this.state;
    var{SelectedCounty}=this.state;
    var { DataElements } = this.state;
    var { Indicator } = this.state;
   
    var { DataSets } = this.state;
    var { OrgUnits } = this.state;
    var{County}=this.state;

    return (
      <div>
        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <Card>
                <CardHeader>Select report attributes</CardHeader>
                <CardBody>
                  {/* Indicator selector */}
                  <Collapsible trigger="Indicators">
                    <div className="col-md-12">
                      <FilteredMultiSelect
                        buttonText="Add"
                        classNames={BOOTSTRAP_CLASSES}
                        onChange={this.handleSelectIndicator}
                        options={Indicator}
                        selectedOptions={SelectedIndicators}
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
                        onChange={this.handleDeselectIndicator}
                        options={SelectedIndicators}
                        textProp="text"
                        valueProp="value"
                      />
                    </div>
                  </Collapsible>

                  {/* END OF INDICATOR SELECTOR */}


                    {/* Data elements selector */}
                    <Collapsible trigger="Data Elements">
                    <div className="col-md-12">
                    {/* <Counties/> */}
                      <FilteredMultiSelect
                        buttonText="Add"
                        classNames={BOOTSTRAP_CLASSES}
                        onChange={this.handleSelectDataElement}
                        options={DataElements}
                        selectedOptions={SelectedDataElements}
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
                        onChange={this.handleDeselectDataElement}
                        options={SelectedDataElements}
                        textProp="text"
                        valueProp="value"
                      />
                    </div>
                  </Collapsible>

                  {/* END OF DATA ELEMENTS SELECTOR */}

                    {/* datasets selector */}
                    <Collapsible trigger="Datasets">
                    <div className="col-md-12">
                      <FilteredMultiSelect
                        buttonText="Add"
                        classNames={BOOTSTRAP_CLASSES}
                        onChange={this.handleSelectDataset}
                        options={DataSets}
                        selectedOptions={SelectedDataSets}
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
                        onChange={this.handleDeselectDataset}
                        options={SelectedDataSets}
                        textProp="text"
                        valueProp="value"
                      />
                    </div>
                  </Collapsible>

                  {/* END OF datasets SELECTOR */}

                    {/* OrgUnits selector */}
                    <Collapsible trigger="Organization Units">
                    <div className="col-md-12">
                      <FilteredMultiSelect
                        buttonText="Add"
                        classNames={BOOTSTRAP_CLASSES}
                        onChange={this.handleSelectOrgunit}
                        options={OrgUnits}
                        selectedOptions={SelectedOrgUnits}
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
                        onChange={this.handleDeselectOrgunit}
                        options={SelectedOrgUnits}
                        textProp="text"
                        valueProp="value"
                      />
                    </div>
                  </Collapsible>

               {/* County Selector */}
              {/* <Collapsible trigger="Counties">
              <div className="col-md-12">
                      <FilteredMultiSelect
                        buttonText="Add"
                        classNames={BOOTSTRAP_CLASSES}
                        onChange={counties.results}
                        options={this.state.County}
                        selectedOptions={SelectedCounty}
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
                        onChange={this.handleDeselectCounty}
                        options={SelectedCounty}
                        textProp="text"
                        valueProp="value"
                      />
                    </div>
               </Collapsible> */}


               


                  {/* END OF OrgUnits SELECTOR */}
                </CardBody>
              </Card>
            </div>

            <div className="col-md-8">
              <Card>
                <CardHeader>Selected Report Attributes</CardHeader>
                <CardBody>
                  <Collapsible trigger="Selected Indicators">
                    {SelectedIndicators.length === 0 && (
                      <p>(nothing selected yet)</p>
                    )}
                    {SelectedIndicators.length > 0 && (
                      <ol>
                        {SelectedIndicators.map((Indicator, i) => (
                          <li key={Indicator.value}>
                            {`${Indicator.text} `}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleDeselectIndicator(i)}
                            >
                              &times;
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                    
                  </Collapsible>

                  <Collapsible trigger="Selected Data Elements">
                    {SelectedDataElements.length === 0 && (
                      <p>(nothing selected yet)</p>
                    )}
                    {SelectedDataElements.length > 0 && (
                      <ol>
                        {SelectedDataElements.map((DataElements, i) => (
                          <li key={DataElements.value}>
                            {`${DataElements.text} `}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleDeselectDataElement(i)}
                            >
                              &times;
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                    
                  </Collapsible>

              <Collapsible trigger="Selected Data Sets">
                    {SelectedDataSets.length === 0 && (
                      <p>(nothing selected yet)</p>
                    )}
                    {SelectedDataSets.length > 0 && (
                      <ol>
                        {SelectedDataSets.map((DataSets, i) => (
                          <li key={DataSets.value}>
                            {`${DataSets.text} `}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleDeselectDataset(i)}
                            >
                              &times;
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                    
                  </Collapsible>

                  <Collapsible trigger="Selected Org Units">
                    {SelectedOrgUnits.length === 0 && (
                      <p>(nothing selected yet)</p>
                    )}
                    {SelectedOrgUnits.length > 0 && (
                      <ol>
                        {SelectedOrgUnits.map((OrgUnits, i) => (
                          <li key={OrgUnits.value}>
                            {`${OrgUnits.text} `}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleDeselectOrgunit(i)}
                            >
                              &times;
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                   
                  </Collapsible>
                 
                </CardBody>
              </Card>
            </div>
          </div>
          <Link to="/ReportEditor">
            <Button color="primary" className="float-right">
              Create report
            </Button>
          </Link>
        </div>
        
      </div>
    );
  }
}
export default ReportData;
