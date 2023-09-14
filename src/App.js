
import './App.css';
import Testimonio from './Components/Testimonio/Testimonio';
import CambioDeForm from './Components/CambioDeForm';
import ConservaryReinciaState from './Components/ConservaryReinciaState';
import EliminarElmetsArray from './Components/EliminarElmetsArray';
import EnviandoForm from './Components/EnviandoForm';
import ConsolidarLogicaReducer from './Components/ExtraerLogicStateReducer/ConsolidarLogicaReducer';
import EscribiendoUseReducer from './Components/ExtraerLogicStateReducer/EscribiendoUseReducer';
import PruebaTaskList from './Components/ExtraerLogicStateReducer/PruebaTaskList';
import CompartirStateComponentes from './Components/Gestion de Estado/CompartirStateComponentes';
import ReaccEntraDatEstado from './Components/Gestion de Estado/ReaccEntraDatEstado';
import HacerOtrosCambiArr from './Components/HacerOtrosCambiArr';
import ActualiDatos from './Components/PasarDatosProfunContext/ActualiDatos';
import Contexto from './Components/PasarDatosProfunContext/Contexto';

import Prueba from './Components/Prueba';
import RemplazaUnElementoArray from './Components/RemplazaUnElementoArray';
import TransformarUnArray from './Components/TransformarUnArray';
import UsandoUseImmer from './Components/UsandoUseImmer';

// import ReactJkMusicPlayer from 'react-jinke-music-player'
// import 'react-jinke-music-player/assets/index.css'




function App() {
  return (
    <div className="App">

    {/* <ReactJkMusicPlayer  /> */}
      <h1>Hola Mundo</h1>
      <h2>Negrito</h2>
      <Testimonio />
      <ActualiDatos />
      <Contexto />
      <hr />
      <PruebaTaskList />
      <hr />
      <EscribiendoUseReducer />
      <hr />
      <ConsolidarLogicaReducer />
      <ConservaryReinciaState style={{border:'blue solid 2px'}}/>
      <hr />
      <CompartirStateComponentes />
      <hr />
      <EnviandoForm />
      <hr />
      <CambioDeForm />
      <ReaccEntraDatEstado />
      <hr />
    <Prueba/>
    <EliminarElmetsArray />
    <TransformarUnArray />
    <RemplazaUnElementoArray />
    <HacerOtrosCambiArr />
    <UsandoUseImmer />

    </div>
  );
}



export default App;
