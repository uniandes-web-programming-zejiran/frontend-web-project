import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetalleNegocio() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET a tu API para obtener los detalles del negocio
    fetch(`http://localhost:3000/api/v1/negocios/${id}`)
      .then((response) => response.json())
      .then((data) => setBusiness(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!business) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '20vh' }}>
      <div className="text-center">
        <h1>{business.nombre}</h1>
        <p>{business.descripcion}</p>
      </div>
    </div>
  );
}

export default DetalleNegocio;
