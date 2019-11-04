import { Reducer } from "redux";


interface State { }


const initState: State = { };


type Action = NoOp;


export interface NoOp {
  type: "NoOp"
}


const reducer: Reducer<State, Action> = (state = initState, action) => {
  switch (action.type) {
    case "NoOp":
      return state;

    default:
      return state;
  }
}


export default reducer;
