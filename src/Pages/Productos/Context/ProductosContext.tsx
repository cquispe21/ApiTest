import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Nombres } from "../Domain/Nombre";

interface ContextState {
  nombres: Nombres[];
  guardarEnLocalStorage: (nuevosNombres: Nombres[]) => void;
  obtenerNombresDeLocalStorage: () => void;
  nombreId: Nombres;
  searchIdLocalStorage: (id: string) => void;
}

export const UsersContext = createContext<ContextState | undefined>(undefined);

export const UsersContextProvider = ({ children }: { children: ReactNode }) => {
  const [nombres, setNombres] = useState<Nombres[]>([]);
  const [nombreId, setNombresId] = useState<Nombres[]>([]);
  

  const obtenerNombresDeLocalStorage = () => {
    const nombresGuardados = localStorage.getItem("nombres");
    if (nombresGuardados) {
      setNombres(JSON.parse(nombresGuardados));
    }
  };

  const searchIdLocalStorage = (id: string) => {
      
    const nombresGuardados = localStorage.getItem("nombres");
    if (nombresGuardados) {
      const nombresGuardadosParseados = JSON.parse(nombresGuardados);
      const nombreGuardadoEncontrado = nombresGuardadosParseados.find((nombreGuardado: Nombres) => {
        return nombreGuardado.idCategoria === id;
      });

      if (nombreGuardadoEncontrado) {
        const nuevoNombreGuardado = { ...nombreGuardadoEncontrado };
        localStorage.setItem("nombre", JSON.stringify(nuevoNombreGuardado));
       setNombresId(nuevoNombreGuardado);
       
      } else {
        console.log(`No se encontró ningún nombre con idCategoria: ${id}`);
      }
    }
  }


  const guardarEnLocalStorage = (nuevosNombres: Nombres[]) => {
    localStorage.setItem("nombres", JSON.stringify(nuevosNombres));
  };

  useEffect(() => {
    obtenerNombresDeLocalStorage();
  }, []);


  const value = {
    nombres,
    guardarEnLocalStorage,
    obtenerNombresDeLocalStorage,
    nombreId,
    searchIdLocalStorage,
  };
  return <UsersContext.Provider 
  value={value}>
    {children}
    </UsersContext.Provider>;
  
  // return (
  //   <UsersContext.Provider
  //     value={{
  //       nombres,
  //       guardarEnLocalStorage,
  //       obtenerNombresDeLocalStorage,
  //       searchIdLocalStorage,
  //       nombreId,
  //     }}
  //   >
  //     {children}
  //   </UsersContext.Provider>
  // );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error(
      "useUsersContext must be used within a UsersContextProvider"
    );
  }
  return context;
};
