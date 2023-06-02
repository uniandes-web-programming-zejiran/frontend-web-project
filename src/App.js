import React from 'react';
import Producto from './components/producto/Producto';
import ListaProductos from './components/producto/ListaProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/producto/:productoId" element={<Producto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
