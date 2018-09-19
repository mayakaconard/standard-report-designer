import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  CardTitle,
  CardText,
  ListGroupItem
} from "reactstrap";
import Collapsible from "react-collapsible";

import {
  DataElementsSelector,
  DatasetsSelector,
  IndicatorSelector,
  PeriodSelector
} from "../../Selection";
//import createFilterOptions from "react-select-fast-filter-options";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

const headers = {
  headers: {
    Authorization: `Basic ${btoa("conard:Conard40.")}`
  }
};

class ReportItems extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
      Indicator: [],
      dataElements: [],
      Datasets: [],
      orgUnits: [],
      Period: [],
      filterText: ""
    };
  }

  componentDidMount() {
  //   fetch(
  //     "http://197.136.81.99:8082/test/api/indicators/?fields=:all&format=json&page_size=1",
  //     headers
  //   )
  //     .then(Response => Response.json())
  //     .then(findresponse => {
  //       console.log(findresponse.indicators);
  //       this.setState({
  //         Indicator: findresponse.indicators
  //       });
  //     });

  //   fetch(
  //     "http://197.136.81.99:8082/test/api/dataElements/?fields=:all&format=json&page_size=50",
  //     headers
  //   )
  //     .then(Response => Response.json())
  //     .then(findresponse => {
  //       console.log(findresponse.dataElements);
  //       this.setState({
  //         dataElements: findresponse.dataElements
  //       });
  //     });

  //   fetch(
  //     "http://197.136.81.99:8082/test/api/dataSets/?fields=:all&format=json&page_size=1",
  //     headers
  //   )
  //     .then(Response => Response.json())
  //     .then(findresponse => {
  //       console.log(findresponse.dataSets);
  //       this.setState({
  //         Datasets: findresponse.dataSets
  //       });
  //     });
    fetch(
      "http://197.136.81.99:8082/test/api/organisationUnits/?fields=:all&format=json&page_size=50",
      headers
    )
      .then(Response => Response.json())
      .then(findresponse => {
        console.log(findresponse.organisationUnits);
        this.setState({
          orgUnits: findresponse.organisationUnits
        });
      });
  }
  onChange = editorState => this.setState({ editorState });
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { contentState } = this.state;
    return (
      <Card>
        <CardHeader>Select report attributes</CardHeader>
        <CardBody>
          <Collapsible trigger="Indicators">
            {/* {this.state.Indicator.map((dynamicData, key) => (
              <p>{dynamicData.name}</p>
            ))} */}
            <IndicatorSelector />
          </Collapsible>
          <Collapsible trigger="Data elements">
            {/* {this.state.dataElements.map( (dynamicData,key) =>
                 <p>{dynamicData.name}</p>  )}
            */}
            <DataElementsSelector />
          </Collapsible>
          <Collapsible trigger="Data Sets">
            {/* {this.state.Datasets.map((dynamicData, key) => (
              <p>{dynamicData.name}</p>
            ))} */}
            <DatasetsSelector />
          </Collapsible>
          <Collapsible trigger="Organisation Units">
            {this.state.orgUnits.map((dynamicData, key) => (
              <p>{dynamicData.name}</p>
            ))}
          </Collapsible>
          <Collapsible trigger="Period">
            <PeriodSelector />
          </Collapsible>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
  }
}

export default ReportItems;
