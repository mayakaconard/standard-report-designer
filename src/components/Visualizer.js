import React, { Component } from "react";

//Import Editor
import { Editor } from "react-draft-wysiwyg";
import "react-bootstrap/dist/react-bootstrap";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw} from "draft-js";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
import { Link } from "react-router-dom";
//import 'webpack';

//charts
import {  Form, FormGroup } from 'reactstrap';
import { Line , Bar} from 'react-chartjs-2';
import {  Nav,Row, Col } from 'reactstrap';
//charts end 

import { Card, CardBody, CardFooter,Button } from "reactstrap";



//chart variables 

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Measles",
    borderColor: 'rgb(255, 99, 132)',
    data: [4, 14, 12, 2, 1, 5, 13],
  },
  {
    label: "Rubella",
    borderColor: '#0000FF',
    data: [3, 10, 5, 2, 20, 16, 10],
  }]
}

//end

const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};
class Visualizer extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState
    };
  }

  onContentStateChange = contentState => {
    this.setState({
      contentState
    });
  };

  state = { editorState: EditorState.createEmpty() };
  onChange = editorState => this.setState({ editorState });
  render() {
    const { contentState } = this.state;
    return (
      <div className="container-fluid">
        {/* Application Top Bar */}
        <Header />

        {/* End of Application top bar */}
        <br />
        <div className="row">
          <div className="col-md-3">
            {/*  The application Sidebar*/}
            <Sidebar />

            {/* End Of Sidebar */}
          </div>
          <div className="col-md-9">
            <div>
              <Card bsStyle="primary">
                <CardBody>
                  <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="rdw-editor-wrapper"
                    editorClassName="rdw-editor-main"
                    toolbarClassName="rdw-editor-toolbar"
                    onEditorStateChange={this.onChange}
                    onContentStateChange={this.onContentStateChange}
                  />

    <Nav tabs>      
        </Nav>
        <Form>
          <FormGroup>
              <Row>
                  <Col md={5}>
                  <select class="selectpicker form-control input-place"  name="select_option" id="disease" onChange="setCode(this)" required>
                  {/* multiple data-live-search="true" */}
                  <option value="">Select Region</option>
                  <option value="44">Central</option>
                  <option value="55">Coast</option>
                  <option value="33">Eastern</option>
                  <option value="22">Nairobi</option>
                  <option value="11">N/Eastern</option>
                  <option value="32">Nyanza</option>
                  <option value="34">Western</option>
                  </select>
                  </Col>
                  <Col md={5}>
                  <select class="form-control" id="county">
                  <option>Select County</option>
                  </select>
                  </Col>
                  <Col md={2}>
                  <Button>Generate Chart</Button>
                  </Col>
                  
              </Row>
              
          </FormGroup>
          
      </Form>
          <Bar data={data} className="fullsize" />
                </CardBody>
                <textarea
                  className="form-control"
                  disabled
                  value={JSON.stringify(contentState, null, 4)}
                />
                <CardFooter>Standard Report Customizer</CardFooter>
              </Card>
              <Link to="/Visualizer">
              <Button color="primary" className="float-right">
               Save
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Visualizer;
