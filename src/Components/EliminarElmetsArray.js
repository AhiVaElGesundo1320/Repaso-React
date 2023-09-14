import React, { useState } from "react";

let initialArtists = [
  { id: 0, name: "Ayrton Senna" },
  { id: 1, name: "Ferdinand Porsche" },
  { id: 2, name: "Christian Koenigsegg" },
];

const EliminarElmetsArray = () => {
  const [name, setName] = useState(" ");
  const [artist, setArtist] = useState([]);
  const [artists, setArtists] = useState(initialArtists);

  let nextId = 0;

  return (
    <div>
      <h1>Agregar Elementos a uba Array</h1>

      <hr />
      <h1>Escultores inspirados:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtist([...artist, { id: nextId++, name: name }]);
        }}
      >
        Añadir
      </button>
      <ul>
        {artist.map((arti) => (
          <>
            <li key={arti.id}>{arti.name}</li>
            <button
              onClick={() => {
                setArtist(artist.filter((ar) => ar.id !== nextId++));
              }}
            >
              eliminar
            </button>
          </>
        ))}
      </ul>

      <hr />
      <h1>Eliminar Elementos de una Array</h1>
      <h2>EScultores Inspiradores</h2>

      <ul>
        {artists.map((art) => (
          <>
            <li key={art.id}>{art.name}</li>

            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== art.id));
              }}
            >
              eliminar
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default EliminarElmetsArray;
