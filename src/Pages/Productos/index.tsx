import { UsersContextProvider } from "../../Pages/Productos/Context/ProductosContext";
import EditarProductos from "./EdiContribuyente/EditarProductos";
import ModalEdit from "./Modal/ModalEdit";
import ProductosForm from "./ProductosForm";

export default function Productos() {
  return (
    <UsersContextProvider>
      <ProductosForm />     
     <ModalEdit />
    </UsersContextProvider>
  );
}
