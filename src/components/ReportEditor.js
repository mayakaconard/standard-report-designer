import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-bootstrap/dist/react-bootstrap";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CKEditor from "react-ckeditor-component";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
import { Link } from "react-router-dom";

//import 'webpack';
import { Card, CardBody, CardFooter,Button } from "reactstrap";


class ReportEditor extends Component {
  constructor(props){
    super(props);
    this.updateContent=this.updateContent.bind(this);
    this.state={
        content: 'content',
    }
}
updateContent(newContent){
    this.setState({
        content: newContent
    })
}
onChange(evt){
   console.log("onchange fired: ",evt);
   
}
onBlur(evt){
    console.log("onBlur fired: ",evt);
    
 }
afterPaste(evt){
    console.log("afterPaste called with event info: ", evt);

}
  
  render() {
 
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
                <CKEditor 
            activeClass="p10"
            content={this.state.content}
            events={{
                "blur":this.onBlur,
                "afterPaste": this.afterPaste,
                "change":this.onChange
            }}
            />
                </CardBody>
                
                <CardFooter>Standard Report Customizer</CardFooter>
              </Card>
              <Link to="/Visualizer">
              <Button color="primary" className="float-right">
                Visualizer
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportEditor;
