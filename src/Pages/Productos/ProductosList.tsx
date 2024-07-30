import { useFormContext } from "react-hook-form";
import { useUsersContext } from "./Context/ProductosContext";
import { Nombres } from "./Domain/Nombre";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function ProductosList() {
  const { nombres, searchIdLocalStorage, obtenerNombresDeLocalStorage,nombreId } =
    useUsersContext();
  const navigate = useNavigate();

  const edit = async (id: string) => {
    debugger
  const producto = await searchIdLocalStorage(id);

    console.log(producto);
  };

  const { reset,register } = useFormContext();

  const handleDelete = async (id: string) => {
    const nombresActualizados = nombres.filter(
      (nombre: Nombres) => nombre.idCategoria !== id
    );
    await localStorage.setItem("nombres", JSON.stringify(nombresActualizados));
    obtenerNombresDeLocalStorage();
  };

  const [isModal,setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
     reset(nombreId);
    }
  }, [
 
    nombreId
  ]);

  return (
<>
{isModal && (
 <div className="absolute">
          <input {...register("nombreProducto")} id="nombreProducto" />

 </div>
)}
   
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre Producto</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {nombres.map((nombre: Nombres, index: number) => (
          <tr key={`${nombre.idCategoria}-${index}`}>
            <td>{nombre.idCategoria}</td>
            <td>{nombre.nombreProducto}</td>
            <td>{nombre.descripcion}</td>
            <td>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => edit(nombre.idCategoria)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(nombre.idCategoria)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
</>

  );
}
