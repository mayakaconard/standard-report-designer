import React, { Component } from "react";
//import { Editor } from "react-draft-wysiwyg";
//import "react-bootstrap/dist/react-bootstrap";
import Collapsible from "react-collapsible";
import CKEditor from "react-ckeditor-component";
import Header from "./components/ui/Header";
import {HorizontalBar ,  Scatter ,Line , Bar , Pie} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

import {
  ButtonGroup,
  Card,
  CardFooter,
  Button,
  CardHeader,
  CardBody,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { Link } from "react-router-dom";
//start of chart 

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Measles",
    borderColor: 'rgb(0, 0, 0)',
    // backgroundColor: 'rgb(66 , 134, 244)',
    
    borderWidth: 1,
    
    data: [4, 14, 12, 2, 1, 5, 13],
  },
  {
    label: "Rubella",
    borderColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(178, 69, 69)',
    borderWidth: 1,
    data: [3, 10, 5, 2, 20, 16, 10],
  }
]
}

//end of chart 
class ReportEditor extends Component {
  constructor(props) {
    super(props);

    // this.state={
    //   content:""
    // }
    // console.log(this.state.content);

    var currentIndicator = JSON.parse(localStorage.getItem("someone"));
    var currentDataElements = JSON.parse(localStorage.getItem("element"));
    var currentDataSets = JSON.parse(localStorage.getItem("dataset"));
    var currentOrgUnits = JSON.parse(localStorage.getItem("orgunit"));
    //var currentCounty=JSON.parse(localStorage.getItem("county"))
    console.log(currentIndicator);
    this.updateContent = this.updateContent.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  
    var currentState = JSON.parse(localStorage.getItem("editor"));
    this.state = {
      content: currentState,
      indicators: currentIndicator,
      elements: currentDataElements,
      datasets: currentDataSets,
      orgunits:currentOrgUnits
    };
  }
  updateContent(newContent) {
    let temp = this.state.content;
    newContent = temp + newContent;
    this.setState({
      content: newContent
    });
    var m = localStorage.setItem("editor", JSON.stringify(this.state.content));
    console.log(m);
  }
  onChange(evt) {
    console.log("onchange fired: ", evt);
  }
  onBlur(evt) {
    console.log("onBlur fired: ", evt);
  }
  afterPaste(evt) {
    console.log("afterPaste called with event info: ", evt);
  }
  handleCheck(e) {
    console.log(e.target.title);
  }
  changeChartType(newChartType){
    this.setState({
      ...this.state,
      chartType: newChartType
    })
  }

  render() {
    var { indicators } = this.state;
    var {elements}=this.state;
    var {datasets}=this.state;
    var {orgunits}=this.state;

    //var content = CKEditor.instances['comment'].getData();
    return (
      <div className="container-fluid">
        {/* <textarea name={this.elementName} defaultValue={this.props.value}></textarea> */}
        {/* Application Top Bar */}
        <Header />

        {/* End of Application top bar */}
        <br />
        <div className="row">
          <div className="col-md-3">
            <Card>
              <CardHeader>Selected report attributes</CardHeader>
              <CardBody>
                {/* <CardText>Selected Data elements</CardText> */}
                {/* <Button  color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Go somewhere</Button>
              <Collapse isOpen={this.state.collapse}>
              <CardBody>
                nkjsfsnfjsfnkf
              </CardBody>
              </Collapse> */}
                <Collapsible trigger="Indicators">
                  <ListGroup>
                    {indicators.map(test => (
                      <ListGroupItem
                        tag="a"
                        onClick={() => {
                          this.updateContent(test.text);
                        }}
                        action
                        key={test.value}
                        title={test.text}
                        id={test.value}
                      >
                        {test.text}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Collapsible>
                <Collapsible trigger="Data Elements">
                  <ListGroup>
                    {elements.map(data => (
                      <ListGroupItem
                        tag="a"
                        onClick={() => {
                          this.updateContent(data.text);
                        }}
                        action
                        key={data.value}
                        title={data.text}
                        id={data.value}
                      >
                        {data.text}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Collapsible>
                <Collapsible trigger="Data Sets">
                  <ListGroup>
                    {datasets.map(data => (
                      <ListGroupItem
                        tag="a"
                        onClick={() => {
                          this.updateContent(data.text);
                        }}
                        action
                        key={data.value}
                        title={data.text}
                        id={data.value}
                      >
                        {data.text}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Collapsible>
                <Collapsible trigger="Organization Units">
                  <ListGroup>
                    {orgunits.map(data => (
                      <ListGroupItem
                        tag="a"
                        onClick={() => {
                          this.updateContent(data.text);
                        }}
                        action
                        key={data.value}
                        title={data.text}
                        id={data.value}
                      >
                        {data.text}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Collapsible>             
                {/*End of Side Menu  */}
              </CardBody>
            </Card>

            {/* End Of Sidebar */}
          </div>
          <div className="col-md-9">
            <div>
              <Card color="">
                <CardHeader>Standard Report Editor </CardHeader>
                <CardText>
                  <ButtonGroup>
                    <Button color="">
                      <img
                        src={require("./components/icons/graph.png")}
                        width="30"
                        height="30"
                        onClick={()=>{this.changeChartType("HORIZONTAL BAR")}}
                      />{" "}
                    </Button>
                    <Button color="">
                      <img
                        src={require("./components/icons/line-graph.png")}
                        width="30"
                        height="30"
                        
                        onClick={()=>{this.changeChartType("LINE")}}
                      />
                    </Button>
                    <Button color="">
                      <img
                        src={require("./components/icons/isometric.jpg")}
                        width="30"
                        height="30"
                        onClick={()=>{this.changeChartType("BAR")}}
                      />{" "}
                    </Button>
                    <Button color="">
                      <img
                        src={require("./components/icons/Bar-Chart-icon.png")}
                        width="30"
                        height="30"
                      />
                    </Button>
                    <Button color="">
                      <img
                        src={require("./components/icons/gis.png")}
                        width="30"
                        height="30"
                      />
                    </Button>
                  </ButtonGroup>
                  <CKEditor
                  
                    activeClass="editor"
                    content={this.state.content}
                    onChange={this.updateContent}
                    events={{
                      blur: this.onBlur,
                      afterPaste: this.afterPaste,
                      change: this.onChange
                    }}
                    
                  />
                      {
              this.state.chartType == "LINE" &&(
                <div>LINE CHART Rendered here

                <Line data={data} className='fullsize' />
                </div>
              )
            }

             {
              this.state.chartType == "BAR" &&(
                <div>BAR CHART Rendered here

                <Bar data={data} className="fullsize" />
                </div>
              )
            }

            {
              this.state.chartType == "HORIZONTAL BAR" &&(
                <div>HORIZONTAL BAR CHART Rendered here

                <HorizontalBar data={data} className='fullsize' />
                </div>
              )
            }
                </CardText>
                <CardFooter>
                  <ButtonGroup>
                    <Button color="primary">Save Report</Button>
                    <Button color="primary">Export PDF</Button>
                    <Button color="primary">Export PNG</Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12" />
                </div>
              </div>
            </div>
            <Link to="/Visualizer">
              <Button color="primary" className="float-right">
                Visualizer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   let configuration = {
  //     toolbar: "Basic"
  //   };
  //   CKEDITOR.replace(this.elementName, configuration);
  //   CKEDITOR.instances[this.elementName].on("change", function () {
  //     let data = CKEDITOR.instances[this.elementName].getData();
  //     this.props.onChange(data);
  //   }.bind(this));
  // }
}

export default ReportEditor;
