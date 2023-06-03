import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Producto from './components/producto/Producto';
import ListaProductos from './components/producto/ListaProductos';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import Events from './components/events/Events';
import Footer from './components/footer/footer';
import CustomerReviews from './components/reviews/CustomerReviews';
import Negocios from './components/negocio/negocios';
import ListaNegocios from './components/negocio/ListaNegocios';
import DetalleNegocio from './components/negocio/DetalleNegocio';
import ConfProfile from './components/profile/ConfProfile';
import PostPage from './components/post/PostPage';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/producto/:productoId" element={<Producto />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reviews" element={<CustomerReviews />} />
          <Route path="/negocios" element={<Negocios />} />
          <Route path="/negocios/lista" element={<ListaNegocios />} />
          <Route path="/negocios/:id" element={<DetalleNegocio />} />
          <Route path="/blogs" element={<PostPage />} />
          <Route path="/profile" element={<ConfProfile />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
