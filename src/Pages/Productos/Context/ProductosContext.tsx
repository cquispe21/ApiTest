import React, { useContext, useState } from "react";
import { Nombres } from "../Domain/Nombre";

export interface ContextState {
  users: Nombres[];
  setUsers: React.Dispatch<React.SetStateAction<Nombres[]>>;
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  apellido: string;
  setApellido: React.Dispatch<React.SetStateAction<string>>;
  idCategoria: string;
  setIdCategoria: React.Dispatch<React.SetStateAction<string>>;
  nombres: Nombres[];
  setNombres: React.Dispatch<React.SetStateAction<Nombres[]>>;
  nuevoNombre: string;
  setNuevoNombre: React.Dispatch<React.SetStateAction<string>>;
  nuevoApellido: string;
  setNuevoApellido: React.Dispatch<React.SetStateAction<string>>;
  nuevoIdCategoria: string;
  setNuevoIdCategoria: React.Dispatch<React.SetStateAction<string>>;
  borrarCategoria: string;
  setBorrarCategoria: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  guardarEnLocalStorage: () => void;
}

export const UsersContext = React.createContext({} as ContextState);

export const UsersContextProvider = ({ children }: React.PropsWithChildren) => {
  const [users, setUsers] = useState<Nombres[]>([]);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [nombres, setNombres] = useState<Nombres[]>([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoApellido, setNuevoApellido] = useState("");
  const [nuevoIdCategoria, setNuevoIdCategoria] = useState("");
  const [borrarCategoria, setBorrarCategoria] = useState("");
  const [error, setError] = useState<string | null>(null);
  const guardarEnLocalStorage = () => {
    const nuevosNombres = [...nombres, { nombre, apellido, idCategoria }];
    setNombres(nuevosNombres);
    localStorage.setItem("nombres", JSON.stringify(nuevosNombres));

    setNombre("");
    setApellido("");
    setIdCategoria("");
  };

  const storage: ContextState = {
    users,
    setUsers,
    nombre,
    setNombre,
    apellido,
    setApellido,
    idCategoria,
    setIdCategoria,
    nombres,
    setNombres,
    nuevoNombre,
    setNuevoNombre,
    nuevoApellido,
    setNuevoApellido,
    nuevoIdCategoria,
    setNuevoIdCategoria,
    borrarCategoria,
    setBorrarCategoria,
    error,
    setError,
    guardarEnLocalStorage
  };

  return (
    <UsersContext.Provider value={storage}>{children}</UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
