import React, { Component } from "react";
import Header from "./components/ui/Header";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, Button, CardHeader, CardText } from "reactstrap";

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
              <CardHeader>Selected report attributes</CardHeader>
            </Card>
          </div>
          <div className="col-md-9">
            <br />
            <Card color="primary">
              <CardHeader>This is my Home Interface</CardHeader>
              <CardText>
                <ListGroup>
                  <ListGroupItem>ANC 4th visit Report </ListGroupItem>
                  <ListGroupItem>Ruiru Healthcare Malaria Report</ListGroupItem>
                </ListGroup>
              </CardText>
            </Card>

            <Link to="/Report">
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
