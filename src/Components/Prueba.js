import React, { useState } from "react";

const Prueba = () => {
  // const PlayButton = ({movieName}) => {
  //   const handlePlayClick = () => {
  //     alert(`Reproduciendo ${movieName}`)
  //   };

  //   return(
  //     <Button onClick={handlePlayClick}>
  //       Reproducir "{movieName}"
  //     </Button>
  //   )
  // }

  // const UploadButton = () => {
  //   return(
  //     <Button onClick={() => alert('Subiendo')}>
  //       subir Imagen
  //     </Button>
  //   )
  // }

  const [person, setPerson] = useState({
    firstName: "Ethan",
    lastName: "Martinez",
    email: "mrtinez777@gmail",
  });

  
  const handleFirstNameChange = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };

  return (
    <div>
      <label>
        First Name
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>{person.firstName} {person.lastName} su correo es <b>{person.email}</b></p>

      {/* <PlayButton movieName='Blade Runner 2049'/>
      <UploadButton /> */}
      {/* <AlertButton message='REPRODUCIENDOOOOOO'>
      Reproduciendo
    </AlertButton>
    <AlertButton message='CARGANDOOOOOOO'>
      Cargando
    </AlertButton> */}
      {/* <Toolbar 
     
      onPlayMovie={() => alert('Reproduciendo!')}
      onUploadImage={() => alert('Cargando!')}
     />  */}

      <hr />
    </div>
  );
};

// const Boton = ({ onSmash, children }) => {
//   return <button onClick={onSmash}>{children}</button>;
// };
// const AlertButton = ({message, children}) => {
//   <button onClick={() => alert(message)}> {children}</button>
// }

// const Toolbar = ({ onPlayMovie, onUploadImage }) => {
//   return (
//     <div>
//       <Boton onSmash={() => alert("click")}>Presioname</Boton>
//       <Button onClick={onPlayMovie}>Reproducir Pelicula</Button>
//       <Button onClick={onUploadImage}>Cargar Imagen</Button>

//       <div
//         onClick={() => alert("Cliqueaste")}
//         style={{ border: "red sold 2px" }}
//       >
//         <Button onClick={() => alert("reproduciendo")}>
//           Reproducir
//         </Button>
//         <Button onClick={() => alert("Subiendo")}>Subir</Button>
//       </div>
//       <hr />
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert("Enviado!!!");
//         }}
//       >
//         <input type="text" />
//         <button>Enviar</button>
//       </form>
//       <hr />
//       {/* ESTADO */}
//       <h1>Estado y Memoria</h1>
//     </div>
//   );
// };
const Button = ({ onClick, children }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
};
export default Prueba;
