import { useFormContext } from "react-hook-form";

export default function FormUser() {
    const { register, formState: { errors } } = useFormContext();

    console.log(errors);

    return <><div className="flex space-x-2">
     
        <input
            placeholder="Nombre Producto"
            className="w-full h-10 border border-gray-400 rounded-md px-2"
            {...register("nombreProducto", {
                required: {
                    value: true,
                    message: "Nombre es requerido"
                },
                minLength: {
                    value: 4,
                    message: "Minimo 4 caracteres"
                },
                maxLength: {
                    value: 10,
                    message: "Maximo 20 caracteres"
                }
            })}
        />

        {errors.nombreProducto && <span> El Nombre del Producto es requerido </span>}


        <input
            placeholder="Descripcion"
            className="w-full h-10 border border-gray-400 rounded-md px-2"

            {...register("descripcion", {
                required: {
                    value: true,
                    message: "La Descripcion es requerida"
                },
                minLength: {
                    value: 15,
                    message: "Minimo 15 caracteres"
                },
                maxLength: {
                    value: 50,
                    message: "Maximo 50 caracteres"
                }
            })}
        />
        {errors.Descripcion && <span> La Descripcion es requerida </span>}
    </div>
    </>
}