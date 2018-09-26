import React, { Component } from "react";
//import { Editor } from "react-draft-wysiwyg";
import "react-bootstrap/dist/react-bootstrap";
import Collapsible from "react-collapsible";
import CKEditor from "react-ckeditor-component";
import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import { Card, Button, CardHeader,CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { ListItem } from "@material-ui/core";


class ReportEditor extends Component {
  constructor(props){
    super(props);
    var currentIndicator=JSON.parse(localStorage.getItem("someone"));
    console.log(currentIndicator);
    this.updateContent=this.updateContent.bind(this);
    this.state={
        content: '',
        indicators:currentIndicator,
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
    var {indicators}=this.state;
    //var content = CKEditor.instances['comment'].getData();
    return (
      <div className="container-fluid">
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
        {indicators.map((test)=>      
          <ListGroupItem  tag="a" href="#" action key={test.value}>{test.text}</ListGroupItem>
        )}
        </ListGroup>
        </Collapsible>
      <Collapsible trigger="Indicators">
    
      {indicators.map((test)=>
       <li key={test.value}>
       {test.text}</li>
      
      )}
     
     
      </Collapsible>
      <Collapsible trigger="Data Elements">
        <li>This is the collapsible content. It can be any element or React component you like.</li>
        <li>It can even be another Collapsible component. Check out the next section!</li>
      </Collapsible>
      <Collapsible trigger="Programs">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
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
                
             
             <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              events={{
                "blur": this.onBlur,
                "afterPaste": this.afterPaste,
                "change": this.onChange
              }}
             />           
                
               
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
