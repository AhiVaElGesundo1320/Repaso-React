import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);

const ActualiDatos = () => {
  const [theme, setTheme] = useState('dark')

  return (
    <div>
        <h1>Actualizacion de Datos a traves de contextox</h1>
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input 
            type='checkbox'
            checked={theme === 'dark'}
            onChange={ e => {
              setTheme(e.target.checked ? 'dark' :' light ')
            }}
          />
          Use Dark Mode
        </label>
      </ThemeContext.Provider>
    </div>
  )
}

const Form = ({children}) =>  {
  return(
    <Panel title='welcome'>
      <Button>Sing up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({title, children}) => {
  return(
    <section clasName={title}>
      {children}
    </section>
  )
}

const Button = ({children}) => {
  const theme = useContext(ThemeContext)
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  )
}


export default ActualiDatos
;