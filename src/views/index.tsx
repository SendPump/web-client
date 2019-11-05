import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Assessments from './pages/Assessments.component';
import Exercises from './pages/Exercises.container';
import Progress from './pages/Progress.component';
import Workouts from './pages/Workouts.component';


enum RouteUrl {
  Exercises = "/exercises",
  Exercise = "/exercise/:id",
  Workouts = "/workouts",
  Assessments = "/assessments",
  Progress = "/progress"
};


const navView = (
  <nav className="navbar is-spaced is-dark">
    <div className="navbar-brand">
      <Link to={RouteUrl.Exercises} className="navbar-item">
        Exercises
      </Link>
      <Link to={RouteUrl.Workouts} className="navbar-item">
        Workouts
      </Link>
      <Link to={RouteUrl.Assessments} className="navbar-item">
        Assessments
      </Link>
      <Link to={RouteUrl.Progress} className="navbar-item">
        Progress
      </Link>
    </div>
  </nav>
);


const pageView = (
  <Switch>
    <Route path={RouteUrl.Exercises}><Exercises /></Route>
    <Route path={RouteUrl.Workouts}><Workouts /></Route>
    <Route path={RouteUrl.Assessments}><Assessments /></Route>
    <Route path={RouteUrl.Progress}><Progress /></Route>
    <Route path={RouteUrl.Exercise}>TODO</Route>
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
