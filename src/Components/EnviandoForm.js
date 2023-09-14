import React, { useState } from "react";

const EnviandoForm = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }
  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Gracias Por el Mensaje</h1>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Escribe algo por favor {":("} </p>
        <textarea
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" disabled={isSending}>
          Envaime siiiii
        </button>
        {isSending && "Envaindo..."}
      </form>
    </div>
  );
};

const sendMessage = () => {   
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

export default EnviandoForm;
