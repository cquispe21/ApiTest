import { Nombres } from "./Domain/Nombre";

export default function ProductosList({ nombres }: { nombres: Nombres[] }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID de Categoría</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {nombres.map((nombre: Nombres, index) => (
            <tr key={index}>
              <td>{nombre.idCategoria}</td>
              <td>{nombre.nombre}</td>
              <td>{nombre.apellido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
