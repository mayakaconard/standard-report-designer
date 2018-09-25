import React, { Component } from "react";
import { Card,CardHeader} from "reactstrap";
import Collapsible from "react-collapsible";
import {
    DataElementsSelector,
    DatasetsSelector,
    IndicatorSelector,
    PeriodSelector
  } from "../Selection";

export default class SelectedData extends Component{
constructor(props){
    super(props);

}


    render(){
        return(
            <Card color="">
              <CardHeader>Selected Data Attributes</CardHeader>
              {/* <CardText></CardText> */}
              <Collapsible trigger="Data Elementsw">
              <DataElementsSelector selectedOptions={this.props.handleSelect} />
              </Collapsible>
              <Collapsible trigger="DataSetss">
              
              </Collapsible>
              <Collapsible trigger="Indicatssors">
              
              </Collapsible>
              <Collapsible trigger="Ogranizsation Units">
              
              </Collapsible>
              <Collapsible trigger="Persiods">
              
              </Collapsible>
            </Card>

            
        );
    }
}