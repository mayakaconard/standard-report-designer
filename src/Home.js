import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./Routes";

class Home extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
export default Home;
