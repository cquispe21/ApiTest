import { Outlet } from "react-router";

export default function Inicio() {
    return (
        <div>
            <p>REGISTRO DE PRODUCTOS</p>
            <Outlet/>
        </div>
    );
}