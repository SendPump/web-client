import React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ExerciseDropdown, { State as EdState } from "../exercise-dropdown";
import { exercises } from "../../constants/exercises";
import { Exercise, sortExercises, searchExercises } from "../../exercise";
import { StoreState } from "../../store/";
import { Action } from "../../store/core";


interface Props {
  exercises: Exercise[];
  dropdownState: EdState;
  setDropdownState: (newState: EdState) => void;
}


const renderNewWorkoutsPage = ({ exercises, dropdownState, setDropdownState }: Props) => (
  <div>
    <section className="section is-small has-text-centered" style={{padding: 20}}>
      <div className="columns is-centered" style={{paddingBottom: "20px"}}>
        <div className="column is-half">
          <ExerciseDropdown
            exercises={searchExercises(exercises, dropdownState.searchInput)}
            state={dropdownState}
            setState={setDropdownState} />
        </div>
      </div>
    </section>
  </div>
);


const mapStateToProps = (storeState: StoreState) => ({
  exercises: sortExercises(searchExercises(exercises, storeState.exerciseSearchInput)),
  dropdownState: storeState.newWorkoutDropdownState,
});


const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setDropdownState: (newState: EdState) => dispatch({ type: "UpdateNewWorkoutDropdownState", newState: newState })
});


export default connect(mapStateToProps, mapDispatchToProps)(renderNewWorkoutsPage);
