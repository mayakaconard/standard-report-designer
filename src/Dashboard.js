import React, { Component } from "react";
import Header from "./components/ui/Header";


//import ReactDOM from "react-dom";
//import { Link } from 'react-router';
import { Link } from "react-router-dom";
//import { Redirect } from 'react-router-dom'
//import App from "./App";
import Report from "./components/Report";

import { Card, Button, CardHeader, CardText,ListGroup, ListGroupItem,Table } from "reactstrap";

class Dashboard extends Component {
  render() {

    return (
      <div className="container-fluid">
        <br />
        <Header />

        <div className="row">
          <div className="col-md-3">
            <br />
            <Card>
              <CardHeader>Standard Report Designer</CardHeader>
            </Card>
          </div>
          <div className="col-md-9">
            <br />
            <Card color="">
              <CardHeader>Custom Standard Reports Created</CardHeader>
              <CardText>
                {/* <ListGroup>
                  <ListGroupItem>ANC 4th visit Report </ListGroupItem>
                  <ListGroupItem>Ruiru Healthcare Malaria Report</ListGroupItem>
                </ListGroup> */}
                <Table dark>
        <thead>
          <tr>
            <th>No</th>
            <th>Name of the Report</th>            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ANC 4th visit Report</td>            
            <td>Edit</td>
          </tr>
         
        </tbody>
      </Table>
          
              </CardText>
            </Card>

            <Link to="/ReportData">
              <Button color="primary" className="float-right">
                New
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
