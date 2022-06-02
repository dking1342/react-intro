import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      let newAddValue = state.count + 1;
      return { ...state, count: newAddValue };
    case "DECREMENT":
      let newMinusValue = state.count - 1;
      return { ...state, count: newMinusValue };
    case "TOGGLE":
      return { ...state, showText: !state.showText };
    default:
      break;
  }
};

const ReducerTutorial = () => {
  const initialState = { count: 0, showText: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Reducer</h1>
      <h2>Count: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={()=> dispatch({type:"TOGGLE"})}>
          { state.showText ? "Hide Secret Text" : "Show Secret Text" }
        </button>
      </div>
      <div>{ state.showText && "This is the secret text" }</div>
    </div>
  );
};

export default ReducerTutorial;
