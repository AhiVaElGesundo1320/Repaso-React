import React, { useState } from "react";

const ReaccEntraDatEstado = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1 style={{color:'green'}}>!Correcto¡</h1>;
  }

  const submitForm = (answer) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "lima";
        if (shouldError) {
          reject(new Error('Buen intento Prueba de nuevo'));
        } else {
          resolve();
        }
      }, 1500);
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div>
      <h1>Reaccion a Entrada de Datos del Estado</h1>

      <h4>Prueba del forom con textarea esbozado </h4>
      <form onSubmit={handleSubmit}>
        <p>Cualquier Cosa</p>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submiting"}
        />
        <br />
        <button
          disabled={answer.length === 0 || status === "submitting"}
        >
          Enviar
        </button>
        {error !== null && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default ReaccEntraDatEstado;
