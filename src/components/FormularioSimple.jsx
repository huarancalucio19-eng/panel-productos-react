import { useState } from "react";

function FormularioSimple() {
  const [nombre, setNombre] = useState("");

  function enviar(evento) {
    evento.preventDefault();
    alert(`Nombre ingresado: ${nombre}`);
  }

  return (
    <form onSubmit={enviar}>
      <label htmlFor="nombre">Nombre del producto</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
      />
      <button type="submit">Mostrar dato</button>
    </form>
  );
}

export default FormularioSimple;