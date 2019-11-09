import Fuse from "fuse.js";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Exercise } from "../../exercise";
import { exercises } from "../../constants/exercises";
import { onInputString } from "../../form";
import { StoreState } from '../../store/';
import { createActionUpdateExerciseSearchInput } from '../../store/core';


const fuse = new Fuse(exercises, { keys: [ "name", "exerciseCategory" ], threshold: 0.3 });


const renderExerciseTile = (exercise: Exercise) => (
  <div className="column is-one-third">
    <div className="box">
      <Link to={`/exercise/${exercise.id}`}>{ exercise.name }</Link>
    </div>
  </div>
);


interface Props {
  exerciseSearchInput: string;
  onExerciseSearchInput: (newInput: string) => void;
  exercises: Exercise[];
};


const renderLibraryPage = ({ exerciseSearchInput, onExerciseSearchInput, exercises }: Props) => (
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
        { exercises.sort((a, b) => a.name.localeCompare(b.name)).map(renderExerciseTile) }
      </div>
    </section>
  </div>
);


const mapStateToProps = (storeState: StoreState) => ({
  exerciseSearchInput: storeState.exerciseSearchInput,
  exercises: storeState.exerciseSearchInput.length === 0 ? exercises : fuse.search(storeState.exerciseSearchInput)
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
  onExerciseSearchInput: (newInput: string) => dispatch(createActionUpdateExerciseSearchInput(newInput))
});


export default connect(mapStateToProps, mapDispatchToProps)(renderLibraryPage);
