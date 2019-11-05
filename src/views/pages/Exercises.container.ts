import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { exercises } from "../../data/exercises";
import ExercisesComponent from './Exercises.component';
import { StoreState } from '../../store/';
import { createActionUpdateExerciseSearchInput } from '../../store/core';
import Fuse from "fuse.js";


const fuse = new Fuse(exercises, { keys: [ "name", "exerciseCategory" ], threshold: 0.3 });


const mapStateToProps = (storeState: StoreState) => ({
  exerciseSearchInput: storeState.exerciseSearchInput,
  exercises: storeState.exerciseSearchInput.length === 0 ? exercises : fuse.search(storeState.exerciseSearchInput)
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
  onExerciseSearchInput: (newInput: string) => dispatch(createActionUpdateExerciseSearchInput(newInput))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExercisesComponent);
