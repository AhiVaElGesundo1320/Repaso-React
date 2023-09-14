import React, { useState } from "react";

let initialPosition = [
  { id: 1, type: "circle", x: 50, y: 750 },
  { id: 2, type: "circle", x: 150, y: 750 },
  { id: 3, type: "circle", x: 250, y: 750 },
];

const TransformarUnArray = () => {
  const [positions, setPositions] = useState(initialPosition);

  const handleTopClick = () => {
    const nextPosition = positions.map((position) => {
      if (position.type === "square") {
        return position;
      } else {
        return {
          ...position,
          y: position.y + -50,
        };
      }
    });
    setPositions(nextPosition);
  };

  const handleRightClick = () => {
    const nextPosition = positions.map((position) => {
      if (position.type === "square") {
        return position;
      } else {
        return {
          ...position,
          x: position.x + 50,
        };
      }
    });
    setPositions(nextPosition);
  };

  const handleLeftClick = () => {
    const nextPosition = positions.map((position) => {
      if (position.type === "square") {
        return position;
      } else {
        return {
          ...position,
          x: position.x + -50,
        };
      }
    });
    setPositions(nextPosition);
  };

  const handleBottomClick = () => {
    const nextPosition = positions.map((position) => {
      if (position.type === "square") {
        return position;
      } else {
        return {
          ...position,
          y: position.y + 50,
        };
      }
    });
    setPositions(nextPosition);
  };
  return (
    <div>
      <hr />    
      <h1>Transformar una Array</h1>
      <button onClick={handleTopClick}>Muevete hacia Arriba /\</button>
      <button onClick={handleRightClick}>Muevete hacia la Derecha {'>'} </button>

      <button onClick={handleLeftClick}>
            Muevete Hacia La Izquierda {'<'}
      </button>

      <button onClick={handleBottomClick}>Muevete hacia Abajo V</button>

      {positions.map((position) => (
        <div
          key={position.id}
          style={{
            backgroundColor: "red",
            position: "absolute",
            left: position.x,
            top: position.y,
            borderRadius:
              position.type === 'circle'
                ? '50%' : '',
            width:20,
            height: 20,
          }}
        />
      ))}
    </div>
  );
};

export default TransformarUnArray;
