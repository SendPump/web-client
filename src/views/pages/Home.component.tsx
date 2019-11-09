import React from "react";
import { Link } from "react-router-dom";

import { buildUrl } from "../../route";


const workouts = [ 1, 2, 3 ];


const renderWorkoutTile = () => (
  [ <div className="column is-one-quarter is-hidden-mobile"></div>,
    <div className="column is-half">
      <div className="box">
        Workout Info
      </div>
    </div>
  , <div className="column is-one-quarter is-hidden-mobile"></div>
  ]
);


export default () => (
  <div>
    <div className="columns is-centered" style={{padding: 15, margin: 0 }}>
      <div className="column is-6">
        <Link to={buildUrl({ route: "new-workout" })}>
          <button className="button is-success is-medium is-fullwidth">start new workout</button>
        </Link>
      </div>
    </div>
    <section className="section has-text-centered" style={{paddingTop: "0"}}>
      <h1 className="title is-4" style={{textDecoration: "underline" }}>Recent Workouts</h1>
      <div className="columns is-centered is-multiline">
        {workouts.map(renderWorkoutTile)}
      </div>
    </section>
  </div>
);
