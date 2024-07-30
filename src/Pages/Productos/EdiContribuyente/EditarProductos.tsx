import { useForm, FormProvider } from "react-hook-form";
import { Nombres } from "../Domain/Nombre";
import { UsersContextProvider, useUsersContext } from "../Context/ProductosContext";
import { useEffect } from "react";



export default function EditarProductos() {

  const {nombreId, nombres} = useUsersContext();

  debugger;
  const methods = useForm<Nombres>({
    defaultValues: {
      idCategoria: "",
      nombreProducto: "",
      descripcion: "",
    },
  });

const handleSubmit = (data: Nombres) => {
  const nombresActualizados = nombres.map((nombre: Nombres) => {
    if (nombre.idCategoria === nombreId[0]?.idCategoria) {
      console.log('Found matching nombre:', nombre);
      return { ...nombre, ...data };
      
    }
    return nombre;
  });
  // setNombres(nombresActualizados); 
  // guardarEnLocalStorage(nombresActualizados); 
};

useEffect(() => {
  methods.reset(nombreId)
}, [nombreId]);


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <div>
       
        </div>
        <div>
          <label htmlFor="nombreProducto" >Nombre Producto:</label>
          <input {...methods.register("nombreProducto")} id="nombreProducto" />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <input {...methods.register("descripcion")} id="descripcion" />
        </div>
        <button type="submit">Guardar</button>
      </form>
      <div>
        {/* <h1>Registros:</h1>
        {/* {nombres.map((nombre: Nombres) => (
          <div key={nombre.idCategoria}>
            <p>ID: {nombre.idCategoria}</p>
            <p>Nombre Producto: {nombre.nombreProducto}</p>
            <p>Descripcion: {nombre.descripcion}</p>
          </div>
        ))} */} 
      </div>

    </FormProvider>
  );
}
