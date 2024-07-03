import { useState } from "react";
import { Nombres } from "./Domain/Nombre";
import ProductosList from "./ProductosList";

export default function ProductosForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombres, setNombres] = useState<Nombres[]>([]);

  const guardarEnLocalStorage = () => {
    setNombres([...nombres, { nombre, apellido, idCategoria: Idcateogira }]);
    setNombre("");
    setApellido("");
    localStorage.setItem("nombres", JSON.stringify(nombres));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Apellido"
        onChange={(e) => {
          setApellido(e.target.value);
        }}
      />
      <button onClick={guardarEnLocalStorage}>Guardar</button>
      <ProductosList nombres={nombres} />
    </>
  );
}
