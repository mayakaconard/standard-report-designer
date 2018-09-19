import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import  Report  from "./components/Report";
// import  App  from "./components/App";
import  ReportEditor  from "./components/ReportEditor";
import Visualizer  from "./components/Visualizer";

export default () =>
 <Switch>
     <Route path="/" exact component={Dashboard} />
   <Route path="/Report" exact component={Report} />
   {/* <Route path="/App" exact component={App} /> */}
   <Route path="/ReportEditor" exact component={ReportEditor} />
   <Route path="/Visualizer" exact component={Visualizer} />   
 </Switch>;
 