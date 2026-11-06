   import { useEffect } from "react";

   function Aviso() {
     useEffect(() => {
       console.log("El componente se mostró");
     }, []);

     return <p>Revisa la consola del navegador.</p>;
   }

   export default Aviso;