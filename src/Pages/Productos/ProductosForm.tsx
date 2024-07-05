import { useState, useEffect } from "react";
import { Nombres } from "./Domain/Nombre";
import ProductosList from "./ProductosList";
import { useUsersContext } from "./Context/ProductosContext";

export default function ProductosForm() {
  const {
    nombre,
    setNombre,
    apellido,
    setApellido,
    idCategoria,
    setIdCategoria,
    nombres,
    setNombres,
    nuevoNombre,
    setNuevoNombre,
    nuevoApellido,
    setNuevoApellido,
    nuevoIdCategoria,
    setNuevoIdCategoria,
    borrarCategoria,
    setBorrarCategoria,
    error,
    setError,
    guardarEnLocalStorage,

  } = useUsersContext();

 

  useEffect(() => {
    const nombresGuardados = localStorage.getItem("nombres");
    if (nombresGuardados) {
      setNombres(JSON.parse(nombresGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("nombres", JSON.stringify(nombres));
  }, [nombres]);


  const editarRegistroEnLocalStorage = (idCategoria: string, nuevoNombre: string, nuevoApellido: string, nuevoIdCategoria: string) => {
    const nombresGuardados = localStorage.getItem("nombres");
    if (nombresGuardados) {
      const nombresGuardadosParseados = JSON.parse(nombresGuardados);
      let registroEncontrado = false;

      const nuevoNombresGuardados = nombresGuardadosParseados.map((nombreGuardado: Nombres) => {
        if (nombreGuardado.idCategoria === nuevoIdCategoria) {
          registroEncontrado = true;
          return {
            nombre: nuevoNombre,
            apellido: nuevoApellido,
            idCategoria: nuevoIdCategoria
          };
        }
        return nombreGuardado;
      });

      if (!registroEncontrado) {
        setError("No se encontró un registro con el ID de categoría proporcionado.");
        return;
      }

      setNombres(nuevoNombresGuardados);
      localStorage.setItem("nombres", JSON.stringify(nuevoNombresGuardados));

      // Limpiar los campos de entrada y el error
      setNombre("");
      setApellido("");
      setIdCategoria("");
      setNuevoNombre("");
      setNuevoApellido("");
      setNuevoIdCategoria("");
      setError(null);
    }
  };

  const borrarRegistroEnLocalStorage = (idCategoria: string) => {
    const nombresGuardados = localStorage.getItem("nombres");
    if (nombresGuardados) {
      const nombresGuardadosParseados = JSON.parse(nombresGuardados);
      const nuevosNombresGuardados = nombresGuardadosParseados.filter((nombreGuardado: Nombres) => 
        nombreGuardado.idCategoria !== idCategoria);
      setNombres(nuevosNombresGuardados);
      localStorage.setItem("nombres", JSON.stringify(nuevosNombresGuardados));

      setBorrarCategoria("");
    }
  };

  return (
    <>
      {error && <div style={{ color: "red" }}>{error}</div>}
      
      <input
        type="text"
        placeholder="ID de Categoría"
        value={idCategoria}
        onChange={(e) => {
          setIdCategoria(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => {
          setApellido(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Nuevo ID de Categoría"
        value={nuevoIdCategoria}
        onChange={(e) => {
          setNuevoIdCategoria(e.target.value);
        }}
      />  

      <input
        type="text"
        placeholder="Nuevo Nombre"
        value={nuevoNombre}
        onChange={(e) => {
          setNuevoNombre(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Nuevo Apellido"
        value={nuevoApellido}
        onChange={(e) => {
          setNuevoApellido(e.target.value);
        }}
      />

        <input 
        type="text"
        placeholder="Id que desea borrar"
        value={borrarCategoria}
        onChange={(e) => {
          setBorrarCategoria(e.target.value);
        }}  
      />

      <button onClick={guardarEnLocalStorage}>Guardar</button>

      <button onClick={() => editarRegistroEnLocalStorage(idCategoria, nuevoNombre, nuevoApellido, nuevoIdCategoria)}>Editar</button>

      <button onClick={() => borrarRegistroEnLocalStorage(borrarCategoria)}>Borrar</button>

      <ProductosList nombres={nombres} />

    </>
  );
}
