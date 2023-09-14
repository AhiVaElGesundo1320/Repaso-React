import React, { useState } from "react";

const CambioDeForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Ethan");
  const [lastName, setLastName] = useState("Mrtinez");
  return (
    <div>
      <h1>Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        <label>
          Primer Nombre{" "}
          {isEditing ? (
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          ) : (
            <b>{firstName}</b>
          )}{" "}
        </label>
        <label>
          Apellido
          {
            isEditing ? (
              <input 
              value={lastName}
              onChange={e => {
                setLastName(e.target.value)
              }}
              />
            ) : <b>{lastName}</b>
          }
        </label>
        <button type='submit'>{isEditing ? 'save' : 'Edit'} </button>
        <p><i>Hola {firstName} {lastName}</i></p>
      </form>
    </div>
  );
};

export default CambioDeForm;
