import React, { Component } from 'react';
import { Link ,BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import  Report  from "./components/Report";
import  App  from "./components/App";
import Visualizer  from "./components/Visualizer";

export default () =>
 <Switch>
     <Route path="/" exact component={Dashboard} />
   <Route path="/components/Report" exact component={Report} />
   <Route path="/components/App" exact component={App} />
   <Route path="/components/Visualizer" exact component={Visualizer} />

   { /* Finally, catch all unmatched routes */ }
   {/* <Route component={NotFound} /> */}
 </Switch>;
 