import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { RouteUrl } from "../route";
import Library from './pages/Library.container';
import Home from './pages/Home.component';
import NewWorkout from "./pages/NewWorkout.component";
import Progress from './pages/Progress.component';


const navView = (
  <nav className="navbar is-spaced is-dark">
    <div className="navbar-brand">
      <Link to={RouteUrl.Home} className="navbar-item">
        Home
      </Link>
      <Link to={RouteUrl.Library} className="navbar-item">
        Library
      </Link>
      <Link to={RouteUrl.Progress} className="navbar-item">
        Progress
      </Link>
    </div>
  </nav>
);


const pageView = (
  <Switch>
    <Route exact path={RouteUrl.Home}><Home /></Route>
    <Route exact path={RouteUrl.Library}><Library /></Route>
    <Route exact path={RouteUrl.NewWorkout}><NewWorkout /></Route>
    <Route exact path={RouteUrl.Progress}><Progress /></Route>
  </Switch>
);


const View = () => (
  <Router>
    <div>
      { navView }
      { pageView }
    </div>
  </Router>
);


export default View;
