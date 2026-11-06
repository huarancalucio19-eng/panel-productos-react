import { useRef } from "react";

function FormularioNoControlado() {
  const nombreRef = useRef(null);

  function enviar(evento) {
    evento.preventDefault();
    alert(`Nombre ingresado: ${nombreRef.current.value}`);
  }

  return (
    <form onSubmit={enviar}>
      <label htmlFor="nombre2">Nombre</label>
      <input id="nombre2" ref={nombreRef} />
      <button type="submit">Leer valor</button>
    </form>
  );
}

export default FormularioNoControlado;