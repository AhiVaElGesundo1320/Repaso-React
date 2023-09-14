import React, { useReducer } from "react";

const myReducer = (state, action) => {
  if (action.type === "increment_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown Action");
};




const ConsolidarLogicaReducer = () => {
  const [state, dispatch] = useReducer(myReducer, { age: 42 });
  
  return (
    <div>
      <h1>Consolidar Logica de Estado Con un Reducer </h1>
      <button
        onClick={() => {
          dispatch({ type: "increment_age" });
        }}
      >
        Increment Age
      </button>
      <p>You are {state.age}</p>
    </div>
  );
};

export default ConsolidarLogicaReducer;
