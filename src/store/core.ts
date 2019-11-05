import { Reducer } from "redux";


interface State {
  exerciseSearchInput: string;
}


export const initState: State = {
  exerciseSearchInput: ""
};


type Action = UpdateExerciseSearchInput;


export interface UpdateExerciseSearchInput {
  type: "UpdateExerciseSearchInput";
  data: string;
};


export const createActionUpdateExerciseSearchInput = (data: string): UpdateExerciseSearchInput => {
  return {
    type: "UpdateExerciseSearchInput",
    data
  }
};


const reducer: Reducer<State, Action> = (state = initState, action) => {
  switch (action.type) {
    case "UpdateExerciseSearchInput":
      return { ...state, exerciseSearchInput: action.data };

    default:
      return state;
  }
}


export default reducer;
