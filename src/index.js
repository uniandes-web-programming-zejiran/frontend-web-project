import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './components/post/Post';
import Producto from './components/producto/Producto';
import ListaProductos from './components/producto/ListaProductos';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import ConfProfile from './components/profile/ConfProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {IntlProvider} from 'react-intl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavBar />
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
         <Route path="/productos" element={<ListaProductos />} />
         <Route path="/producto/:productoId" element={<Producto />} />
       </Routes>
     </BrowserRouter>
    <Footer />
  </div>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
