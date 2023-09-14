import React, { useState } from "react";

const CompartirStateComponentes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{border: 'red solid 2px'}}>
      <h1>
        Compartiendo El Estado entre Componentes{" "}
        {"(lifting state up)"}
      </h1>
      <h2>ALmaty, Kazajistan</h2>
      <Panel
        title="Acerca de"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Con una población de unos 2 millones de habitantes, Almaty es
        la mayor ciudad de Kazajstán. De 1929 a 1997 fue su capital.
      </Panel>

    <Panel 
      title='Emitologia'
      isActive={activeIndex === 0}
      onShow={() => setActiveIndex(0)}
    >

El nombre proviene de <span lang="kk-KZ">алма</span>, palabra Kazakh  que significa "manzana" y suele traducirse como "lleno de manzanas". De hecho, se cree que la región que rodea a Almaty es el hogar ancestral de la manzana, y se considera que este fruto silvestre <i lang="la">Malus sieversii</i> es un candidato probable para el ancestro de la manzana doméstica moderna.

    </Panel>    

    </div>
  );
};

const Panel = ({ title, isActive, onShow, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Mostrar</button>
      )}
    </section>
  );
};

export default CompartirStateComponentes;
