import React from "react";

import { Exercise } from "../exercise";
import { onInputString } from "../form";


interface Props {
  exercises: Exercise[];
  state: State;
  setState: (state: State) => void;
}


export interface State {
  searchInput: string;
  isFocused: boolean;
}


export const init = {
  searchInput: "",
  isFocused: false
}


const renderExerciseBar = (exercise: Exercise) => (
  <div style={{borderBottom: "0.5px solid lightgrey", backgroundColor: "white", height: 40, paddingTop: 8, cursor: "pointer" }}>
    { exercise.name }
  </div>
);


export default ({ exercises, state, setState }: Props) => {
  return (
    <div>
      <input className="input has-text-centered"
             type="text"
             placeholder="search exercises"
             value={state.searchInput}
             onInput={onInputString((newInput) => { setState({ ...state, searchInput: newInput }) })}
             onFocus={() => setState({ ...state, isFocused: true }) }
             onBlur={() => setState({ ...state, isFocused: state.searchInput !== "" }) }

      />
      { !state.isFocused ? [] : <div className="box" style={{ marginTop: 10, padding: 0,maxHeight: 240, overflowY: "auto" }} >
        { exercises.map(renderExerciseBar) }
      </div> }

    </div>
  );
}
