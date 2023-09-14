import React, { useState } from 'react'

let initialCounts = [0,0,0]

let nextId = 3;
let initialArtist = [
{id:0, name:'Leo Messi'},
{id:1, name:'Roberto Baggio'},
{id:2, name:'CR7'}
]
const RemplazaUnElementoArray = () => {
    const [counters, setCounters] = useState(
      initialCounts
    )

    const [name, setName] = useState('');
    const [artists, setartists] = useState(initialArtist);

      const handleClick = () => {
        const insertAt = 1;

        const nextArtists = [
          ...artists.slice(0, insertAt),
          {id: nextId++, name: name},
          ...artists.slice(insertAt)

        ]
        setartists(nextArtists);
        setName('')
      }

    const handleIncrementClick = index => {
      const nextCounters = counters.map((c, i) => {
        if (index === i) {
          return c + 1;
        } else {
          return c
        }
      })

      setCounters(nextCounters)
    }
  return (
    
    <div>
      <hr />
      <h1>Tranformar Una Array</h1>
        <ul>
          {counters.map((counter, i) =>(
            <li key={counter.id}>
                {counter}
                <button onClick={() => {
                  handleIncrementClick(i);
                }}>
                  +
                </button>
            </li>
          ))}
        </ul>

        <h2>Insertar en una Array </h2>

        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleClick}>Añadir</button>
                <ul>
                  {artists.map(artist => (
                      <li key={artist.id}>{artist.name}</li>
                  ))}
                </ul>
    </div>
  )
}

export default RemplazaUnElementoArray
