import React from "react";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
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
    //const { contentState } = this.state;
    return (
      <Card>
        <CardHeader>Select report attributes</CardHeader>
        <CardBody>
          <Collapsible trigger="Indicators">          
            <IndicatorSelector />
          </Collapsible>
          <Collapsible trigger="Data elements">           
            <DataElementsSelector />
          </Collapsible>
          <Collapsible trigger="Data Sets">
           
            <DatasetsSelector />
          </Collapsible>
          <Collapsible trigger="Organisation Units">
          
       
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
