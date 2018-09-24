import React, { Component } from 'react';
import { Link ,BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import  ReportEditor  from "./ReportEditor";

import  App  from "./components/App";
import Visualizer  from "./components/Visualizer";
import ReportData from './components/ReportData';

export default () =>
 <Switch>
     <Route path="/" exact component={Dashboard} />
   <Route path="/ReportData" exact component={ReportData} />
   <Route path="/App" exact component={App} />
   <Route path="/ReportEditor" exact component ={ReportEditor} />
   <Route path="/Visualizer" exact component={Visualizer} />


   { /* Finally, catch all unmatched routes */ }
   {/* <Route component={NotFound} /> */}
 </Switch>;
 