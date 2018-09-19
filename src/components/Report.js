import React, { Component } from "react";
import Header from "./ui/Header";
import ReportItems from "./ui/ReportItems";
import { Link } from "react-router-dom";

import { Card, Button, CardHeader, CardText } from "reactstrap";

class Report extends Component {
  render() {
    return (
      <div className="container-fluid">
        <br />
        {/* Application Top Bar */}
        <Header />

        {/* End of Application top bar */}
        <br />
        <div className="row">
          <div className="col-md-3">
            <br />
            {/*  The application Sidebar*/}
            <ReportItems />

            {/* End Of Sidebar */}
          </div>
          <div className="col-md-9">
            <br />
            <Card color="">
              <CardHeader>Selected Data Attributes</CardHeader>
              <CardText>data</CardText>
            </Card>

            <Link to="/ReportEditor">
              <Button color="primary" className="float-right">
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
