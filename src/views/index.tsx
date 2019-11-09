import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { urlTemplate } from "../route";
import Library from './pages/library';
import Home from './pages/home';
import NewWorkout from "./pages/new-workout";
import Progress from './pages/progress';


const navView = (
  <nav className="navbar is-spaced is-dark">
    <div className="navbar-brand">
      <Link to={urlTemplate({ route: "home" })} className="navbar-item">
        Home
      </Link>
      <Link to={urlTemplate({ route: "library" })} className="navbar-item">
        Library
      </Link>
      <Link to={urlTemplate({ route: "progress" })} className="navbar-item">
        Progress
      </Link>
    </div>
  </nav>
);


const pageView = (
  <Switch>
    <Route exact path={urlTemplate({ route: "home" })}><Home /></Route>
    <Route exact path={urlTemplate({ route: "library" })}><Library /></Route>
    <Route exact path={urlTemplate({ route: "new-workout" })}><NewWorkout /></Route>
    <Route exact path={urlTemplate({ route: "progress" })}><Progress /></Route>
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
