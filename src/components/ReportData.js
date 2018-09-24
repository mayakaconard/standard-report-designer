import React, { Component } from "react";
import Header from "./ui/Header";
import { Link } from "react-router-dom";
import { Card, Button, CardHeader, CardText, CardBody } from "reactstrap";
import Collapsible from "react-collapsible";
import FilteredMultiSelect from "react-filtered-multiselect";
import "bootstrap/dist/css/bootstrap.min.css";

//API FETCH DATA FUNCTIONS

//API FETCH AUTH HEADER
const headers = {
  headers: {
    Authorization: `Basic ${btoa("conard:Conard40.")}`
  }
};
//END OF HEADER
const DATASETS = [
  { value: 1, text: "Dbanga_Artemether/Lumefantrine 100/20mg tablet_MOS" },
  { value: 2, text: "Dbanga_ANC 4th visit coverage by ANC 1 (%)" },
  {
    value: 3,
    text:
      "Dbanga_No. of people living with HIV received IPT evaluation-(Sub-Total-Female-<15 and >=15years)"
  },
  { value: 250, text: "Dbanga_Depo- Provera_MOS" }
];
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
    this.state = {
      isLoading: false,
      filterText: "",
      Indicator: [],
      DataElements: [],
      OrgUnits: [],
      DataSets: [],
      selectedOptions: [],
      SelectedIndicators: [],
      SelectedDataElements: [],
      SelectedOrgUnits: [],
      SelectedDataSets: []
    };
  }

  componentDidMount() {
    //fetch indicators
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

    //end of indicators

    //Fetch dataElements
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

    //end of fetching dataElements

    //fetch DataSets
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
    //End of fetching dataSets

    //fetch organisationUnits
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

  //MULLTISELECT ELEMENT HANDLING
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
  //Indictor Handler
  handleDeselectindicator = deselectedIndicators => {
    var selectedIndicators = this.state.selectedIndicators.slice();
    deselectedIndicators.forEach(option => {
      selectedIndicators.splice(selectedIndicators.indexOf(option), 1);
    });
    this.setState({ selectedIndicators });
  };
  handleSelectIndicator = selectedIndicators => {
    selectedIndicators.sort((a, b) => a.id - b.id);
    this.setState({ selectedIndicators });
  };
  //end of indicators

  //dataElements Handler

  handleDeselectDataElement = deselectedDataElements => {
    var SelectedDataElements = this.state.SelectedDataElements.slice();
    deselectedDataElements.forEach(option => {
      SelectedDataElements.splice(SelectedDataElements.indexOf(option), 1);
    });
    this.setState({ SelectedDataElements });
  };
  handleSelectDataElement = SelectedDataElements => {
    SelectedDataElements.sort((a, b) => a.id - b.id);
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
  };
  handleSelectDataset = SelectedDataSets => {
    SelectedDataSets.sort((a, b) => a.id - b.id);
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
  };
  handleSelectOrgunit = SelectedOrgUnits => {
    SelectedOrgUnits.sort((a, b) => a.id - b.id);
    this.setState({ SelectedOrgUnits });
  };
  // END organisationUnits Handling
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
    var { selectedIndicators } = this.state;
    var { SelectedDataSets } = this.state;
    var { SelectedOrgUnits } = this.state;
    var { selectedOptions } = this.state;

    var { DataElements } = this.state;
    var { Indicator } = this.state;
    //var {DATASETS}=this.state;
    var { DataSets } = this.state;
    var { OrgUnits } = this.state;

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
                        onChange={this.handleSelect}
                        options={Indicator}
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
                  </Collapsible>

                  {/* END OF INDICATOR SELECTOR */}
                </CardBody>
              </Card>
            </div>

            <div className="col-md-8">
              <Card>
                <CardHeader>Selected Report Attributes</CardHeader>
                <CardBody>
                  <Collapsible trigger="Selected Indicators">
                    {selectedOptions.length === 0 && (
                      <p>(nothing selected yet)</p>
                    )}
                    {selectedOptions.length > 0 && (
                      <ol>
                        {selectedOptions.map((Indicator, i) => (
                          <li key={Indicator.value}>
                            {`${Indicator.text} `}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleDeselect(i)}
                            >
                              &times;
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                    {selectedOptions.length > 0 && (
                      <button
                        style={{ marginLeft: 20 }}
                        className="btn btn-default"
                        onClick={this.handleClearSelection}
                      >
                        Clear Selection
                      </button>
                    )}
                  </Collapsible>
                </CardBody>
              </Card>
            </div>
          </div>
          <Link to="/ReportEditor">
            <Button color="primary" className="float-right">
              Create reort
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default ReportData;