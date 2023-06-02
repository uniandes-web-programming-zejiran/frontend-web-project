import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Producto from './components/producto/Producto';
import ListaProductos from './components/producto/ListaProductos';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import Events from './components/events/Events';
import Footer from './components/footer/footer';
import CustomerReviews from './components/reviews/CustomerReviews';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/producto/:productoId" element={<Producto />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reviews" element={<CustomerReviews />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
