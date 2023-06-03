import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListaNegocios() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a tu API para obtener la lista de negocios
    fetch('http://localhost:3000/api/v1/negocios')
      .then((res) => res.json())
      .then((res) => {
        setBusinesses(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Negocios</h1>
      <div className="row">
        {businesses.map((business) => (
          <div className="col-md-4" key={business.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{business.nombre}</h5>
                <p className="card-text">{business.descripcion}</p>
                <img src={business.imagen} className="card-img-top" alt={business.nombre} />
                <Link to={`/negocios/${business.id}`} className="btn btn-primary">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaNegocios;
