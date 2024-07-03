import { Nombres } from "./Domain/Nombre";

export default function ProductosList({ nombres }: { nombres: Nombres[] }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {nombres.map((nombre: Nombres, index) => (
            <tr key={index}>
              <td>{nombre.nombre}</td>
              <td>{nombre.apellido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
