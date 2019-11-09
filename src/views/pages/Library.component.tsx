import React from "react";
import { Link } from "react-router-dom";

import { Exercise } from "../../exercise";
import { onInputString } from "../../form";


interface Props {
  exerciseSearchInput: string;
  onExerciseSearchInput: (newInput: string) => void;
  exercises: Exercise[];
};


const exerciseTile = (exercise: Exercise): JSX.Element => (
  <div className="column is-one-third">
    <div className="box">
      <Link to={`/exercise/${exercise.id}`}>{ exercise.name }</Link>
    </div>
  </div>
);



export default ({ exerciseSearchInput, onExerciseSearchInput, exercises }: Props) => (
  <div>
    <section className="section is-small has-text-centered">
      <div className="columns is-centered" style={{paddingBottom: "20px"}}>
        <div className="column is-half">
          <input className="input has-text-centered"
                 type="text"
                 placeholder="search exercises"
                 value={exerciseSearchInput}
                 onInput={onInputString(onExerciseSearchInput)}
          />
        </div>
      </div>
      <div className="columns is-multiline">
        { exercises.sort((a, b) => a.name.localeCompare(b.name)).map(exerciseTile) }
      </div>
    </section>
  </div>
);
