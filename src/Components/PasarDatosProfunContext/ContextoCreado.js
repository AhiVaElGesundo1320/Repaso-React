import React, { createContext,useContext,useState } from 'react'

const ThemeContext = createContext('light');
const AuthContext = createContext(null);




const ContextoCreado = () => {
  // const themeContext = createContext(' el valor que desea que tenga el contexto cuando no hay un proveedor de contexto coincidente en el árbol sobre el componente que lee el contexto')
  const theme = useContext(ThemeContext);
  const userCurrent = useContext(AuthContext)
  
  
  return (
    <div>
      <h1>Create Context</h1>
    {/* <h4>SomeContext.provider</h4>
    <p>Le Permite proporcionar el valor de de este contexto a los componentes </p>
      <ThemeContext.Provider value={theme}>
        <Page />
      </ThemeContext.Provider> */}
    </div>
  )
}

// const Button = () =>{
//   const theme = useContext(ThemeContext);
//   return <button className={theme} />
// }

export default ContextoCreado
