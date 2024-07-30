import React from "react";
import { useUsersContext } from "../../Pages/Productos/Context/ProductosContext";
import { Nombres } from "./Domain/Nombre";

interface Props {
  producto: Nombres;
  onDelete: (id: string) => void;
}

const EliminarProducto: React.FC<Props> = ({ producto, onDelete }) => {
  const { nombres, guardarEnLocalStorage } = useUsersContext();

  const handleDelete = () => {
    const nuevosNombres = nombres.filter((nombre: Nombres) => nombre.idCategoria !== producto.idCategoria);
    guardarEnLocalStorage(nuevosNombres);
    onDelete(producto.idCategoria);
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDelete}
    >
      Eliminar
    </button>
  );
};

export default EliminarProducto;