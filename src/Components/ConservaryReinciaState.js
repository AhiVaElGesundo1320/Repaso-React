import React, { useState } from "react";

const ConservaryReinciaState = () => {
  const [showB, setShowB] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayerA, setisPlayerA] = useState(true);
  return (
    <div style={{ border: "blue solid 2px" }}>
      <h1>Conservar y Reiniciar el Estado</h1>
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        render the second counter
      </label>

      <hr />

      <h1>
        Diferentes <b>Componentes</b> en la <b>misma</b> posicion{" "}
        <b>reincian</b> el estado
      </h1>
      <div>
        {isPaused ? <p>See you Later</p> : <Counter />}
        <label>
          <input 
            type='checkbox'
            checked={isPaused}
            onChange={e => {
              setIsPaused(e.target.checked)
            }}
          />
        </label>
      </div>

        <h3>Reiniciar el estad enla misma posicion</h3>

        <div>{
            isPlayerA ? (
                <Counter person='Ethan' />
            ) : <Counter person='Josh'/>

          }
          <button onClick={() => {
            setisPlayerA(!isPlayerA)
          }}>
            Next Player
          </button>
          </div>
    </div>
  );
};

const Counter = () => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";

  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      style={{ display: "flex", flexFlow: "row" }}
    >
      <h2>{score}</h2>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
};

export default ConservaryReinciaState;
