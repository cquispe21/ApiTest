import { UsersContextProvider } from "./Context/ProductosContext";
import ProductosForm from "./ProductosForm";

export default function Productos() {
  return (
    <>
      <UsersContextProvider>
      <ProductosForm />

      </UsersContextProvider>
 
    </>
  );
}
