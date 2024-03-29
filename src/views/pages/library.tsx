import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Exercise, searchExercises, sortExercises } from "../../exercise";
import { exercises } from "../../constants/exercises";
import { onInputString } from "../../form";
import { StoreState } from '../../store/';
import { Action } from "../../store/core";


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
        { sortExercises(exercises).map(renderExerciseTile) }
      </div>
    </section>
  </div>
);


const mapStateToProps = (storeState: StoreState) => ({
  exerciseSearchInput: storeState.exerciseSearchInput,
  exercises: searchExercises(exercises, storeState.exerciseSearchInput)
});


const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onExerciseSearchInput: (newInput: string) => dispatch({ type: "UpdateExerciseSearchInput", newInput })
});


export default connect(mapStateToProps, mapDispatchToProps)(renderLibraryPage);
