import React, { Component } from "react";
//import { Editor } from "react-draft-wysiwyg";
//import "react-bootstrap/dist/react-bootstrap";
import Collapsible from "react-collapsible";
import CKEditor from "react-ckeditor-component";
import Header from "./components/ui/Header";

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

class ReportEditor extends Component {
  constructor(props) {
    super(props);

    // this.state={
    //   content:""
    // }
    // console.log(this.state.content);

    var currentIndicator = JSON.parse(localStorage.getItem("someone"));
    console.log(currentIndicator);
    this.updateContent = this.updateContent.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    var currentState = JSON.parse(localStorage.getItem('editor'));
    this.state = {
      content: currentState,
      indicators: currentIndicator
    };
  }
  updateContent(newContent) {
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

  render() {
    var { indicators } = this.state;

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
                <Collapsible trigger="Indicators">
                  {indicators.map(test => (
                    <li key={test.value}>{test.text}</li>
                  ))}
                </Collapsible>
                <Collapsible trigger="Data Elements">
                  <li>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </li>
                  <li>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </li>
                </Collapsible>
                <Collapsible trigger="Programs">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>

                {/* Start of side Menu */}
                {/* <Accordion>
        
            <AccordionItem title="Data Elements">
              <div>
               tjcnsjcnsj
              </div>
            </AccordionItem>
       
      </Accordion> */}
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
                      />{" "}
                    </Button>
                    <Button color="">
                      <img
                        src={require("./components/icons/line-graph.png")}
                        width="30"
                        height="30"
                      />
                    </Button>
                    <Button color="">
                      <img
                        src={require("./components/icons/isometric.jpg")}
                        width="30"
                        height="30"
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
