import { Nombres } from "../Domain/Nombre";
import { useState } from "react";

  export const useLocalStorage = () => {

    const [nombreId, setNombresId] = useState<Nombres[]>([]);
   
      // const guardarEnLocalStorage = (usuarios: Nombres[]) => {
      //   const nombresGuardados = JSON.parse(localStorage.getItem("nombres") || "[]");
      //   const nuevosNombres = [...nombresGuardados, ...usuarios];
      //   localStorage.setItem("nombres", JSON.stringify(nuevosNombres));
      //   setNombres(nuevosNombres);
      // };



    // const obtenerNombresDeLocalStorage = () => {
    //   const nombresGuardados = JSON.parse(localStorage.getItem("nombres") || "[]");
    //   setNombres(nombresGuardados);
    // };


    const searchIdLocalStorage = (id: string) => {
      
      const nombresGuardados = localStorage.getItem("nombres");
      if (nombresGuardados) {
        const nombresGuardadosParseados = JSON.parse(nombresGuardados);
        const nombreGuardadoEncontrado = nombresGuardadosParseados.find((nombreGuardado: Nombres) => {
          return nombreGuardado.idCategoria === id;
        });

        if (nombreGuardadoEncontrado) {
          const nuevoNombreGuardado = { ...nombreGuardadoEncontrado };
          localStorage.setItem("nombres", JSON.stringify(nuevoNombreGuardado));
         setNombresId(nuevoNombreGuardado);
         
        } else {
          console.log(`No se encontró ningún nombre con idCategoria: ${id}`);
        }
      }
    }






    return {
      nombreId,
     
      searchIdLocalStorage,
    }
  }
