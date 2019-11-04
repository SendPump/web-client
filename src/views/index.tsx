import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Assessments from './pages/Assessments.component';
import Workouts from './pages/Workouts.component';
import Progress from './pages/Progress.component';


const navView = (
  <nav className="navbar is-spaced">
    <div className="navbar-brand">
      <Link to="/workouts" className="navbar-item">
        Workouts
      </Link>
      <Link to="/assessments" className="navbar-item">
        Assessments
      </Link>
      <Link to="/progress" className="navbar-item">
        Progress
      </Link>
    </div>
  </nav>
);


const pageView = (
  <Switch>
    <Route path="/workouts"><Workouts /></Route>
    <Route path="/assessments"><Assessments /></Route>
    <Route path="/progress"><Progress /></Route>
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
