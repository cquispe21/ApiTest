import { useForm, FormProvider } from "react-hook-form";
import { useUsersContext } from "../../Pages/Productos/Context/ProductosContext";
import { Nombres } from "./Domain/Nombre";
import FormUser from "./FormUser";
import ProductosList from "./ProductosList";

export default function ProductosForm() {
  const { nombres, guardarEnLocalStorage } = useUsersContext();

  const InitialStateForm: Nombres = {
    idCategoria: "",
    nombreProducto: "",
    descripcion: "",
  };

  const methods = useForm<Nombres>({
    defaultValues: InitialStateForm,
  });

  const generateUniqueId = (existingIds: string[]): string => {
    let newId;
    do {
      newId = String(Math.floor(Math.random() * 1000));
    } while (existingIds.includes(newId));
    return newId;
  };

  const handleSubmit = async (usuario: Nombres) => {
    const existingIds = nombres.map(n => n.idCategoria);
    usuario.idCategoria = generateUniqueId(existingIds);
    const nuevosNombres = [...nombres, usuario];
    guardarEnLocalStorage(nuevosNombres);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <FormUser />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Guardar
        </button>
      </form>
      <ProductosList productos={nombres} />
    </FormProvider>
  );
}
