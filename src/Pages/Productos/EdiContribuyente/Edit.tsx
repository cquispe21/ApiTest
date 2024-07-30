import { UsersContextProvider } from "../Context/ProductosContext";
import EditarProductos from "./EditarProductos";

export const Edit = () => {
  return (
    <>
      <UsersContextProvider>
        <EditarProductos />
      </UsersContextProvider>{" "}
    </>
  );
};
