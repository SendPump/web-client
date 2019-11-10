import { Reducer } from "redux";
import * as EdView from "../views/exercise-dropdown";


interface State {
  exerciseSearchInput: string;
  newWorkoutDropdownState: EdView.State
}


export const initState: State = {
  exerciseSearchInput: "",
  newWorkoutDropdownState: EdView.init
};


export type Action
  = UpdateExerciseSearchInput
  | UpdateNewWorkoutDropdownState;


export interface UpdateExerciseSearchInput {
  type: "UpdateExerciseSearchInput";
  newInput: string;
};


export interface UpdateNewWorkoutDropdownState {
  type: "UpdateNewWorkoutDropdownState";
  newState: EdView.State;
}


const reducer: Reducer<State, Action> = (state = initState, action) => {
  switch (action.type) {
    case "UpdateExerciseSearchInput":
      return { ...state, exerciseSearchInput: action.newInput };

    case "UpdateNewWorkoutDropdownState":
      return { ...state, newWorkoutDropdownState: action.newState };

    default:
      return state;
  }
}


export default reducer;
