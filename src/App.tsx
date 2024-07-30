import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Productos from './Pages/Productos';
import Inicio from './Pages/Inicio/Inicio';
import AddProductos from './Pages/Productos/AddProductos';
import EditarProductos from './Pages/Productos/EdiContribuyente/EditarProductos';
import { UsersContextProvider } from './Pages/Productos/Context/ProductosContext';

function App() {
  return (

    <UsersContextProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/addProductos" element={<AddProductos />} />
        <Route path="/editProductos/:id" element={<EditarProductos />} />
      </Routes>
    </UsersContextProvider>
  );
}

export default App;
