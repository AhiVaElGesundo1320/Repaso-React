import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1
      };
    }

    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age 
      };
    }
    default : {
    throw Error( 'unKown Action :' + action.type );
  }
  }
  
};

const EscribiendoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {name:'Ethan', age: 43 });

  const handleButtonClick = () => {
    dispatch({type: 'incremented_age'})
  }

  const handleInputChange = e => {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
  })
    
  }
  return (
    <div style={{ border: "groove 2px red" }}>
      <h1>Escribiendo una Funcion Reductora</h1>
      <input 
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment Age
      </button>
      <p>Hello, {state.name} You are {state.age}</p>
    </div>
  );
};

export default EscribiendoUseReducer;
