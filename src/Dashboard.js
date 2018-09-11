import React, { Component } from "react";
import Header from "./components/ui/Header";
//import {Link} from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';
//import ReactDOM from "react-dom";
//import { Link } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from "./App";
//import { CardHeader, CardContent } from '@material-ui/core';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  CardTitle,
  CardText,
  ToolTip
} from "reactstrap";


class Dashboard extends Component {   
        
  render() {
    return (
      <div className="container-fluid">
      <br/>
        <Header />

        <div className="row">
          <div className="col-md-3">
          <br/>
          <Card>
            <CardHeader>Selected report attributes</CardHeader>
            
            
          </Card>

          </div>
          <div className="col-md-9">
          <br/>
            <Card color="primary">
              <CardHeader>This is my Home Interface</CardHeader>
              <CardText>
              <ListGroup>
        <ListGroupItem>ANC 4th visit Report </ListGroupItem>
        <ListGroupItem>Ruiru Healthcare Malaria Report</ListGroupItem>
       
      </ListGroup>

              </CardText>
              
                
            </Card>
            <Button color="primary" className="float-right" >
                    +
                 {/* <BrowserRouter> <Link to="/App">+</Link></BrowserRouter> */}
                </Button>
              
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
