import { FormProvider, useForm } from "react-hook-form";
import { Nombres } from "../Domain/Nombre";

export default function ModalEdit() {
    const methods = useForm<Nombres>({
        defaultValues: {
          idCategoria: "",
          nombreProducto: "",
          descripcion: "",
        },
      });
    return (
        <div className="absolute">
               <FormProvider {...methods}>
      <form >
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
        </div>
    );
}
