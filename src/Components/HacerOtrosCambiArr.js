import React, { useState } from 'react'


let initialList= [
  {id:0, title: 'Andrea Pirlo'},
  {id:1, title: 'Franchesco Totti'},
  {id:2, title: 'Genaro Gatusso'},
]
const HacerOtrosCambiArr = () => {
  const [list, setList] = useState(initialList)

  const HandleClick = () => {

    const nextList = [...list]
    nextList.reverse();
    setList(nextList);

    
  }
  return (
    <div>
      <h1>Hacer Otros Cambios En Una Array</h1>
        
      <button onClick={HandleClick}>Hola</button>

        <ul>
          {list.map(lists => (
            <li key={lists.id}>{lists.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default HacerOtrosCambiArr
