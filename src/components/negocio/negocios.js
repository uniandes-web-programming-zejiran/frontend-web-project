import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Negocios() {
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem('listaNegocios') === null) {
        setNegocios([]);
      } else {
        setNegocios(JSON.parse(localStorage.getItem('listaNegocios')));
      }
    } else {
      const URL = 'http://localhost:3000/api/v1/users/login';
      const datos = {
        username: 'adminNegocio',
        password: 'adminNegocio'
      };

      fetch(URL, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => res.json())
        .then((res) => {
          const token = res.token;
          const headersP = { Authorization: 'Bearer ' + token };
          const URL2 = 'http://localhost:3000/api/v1/negocios';

          fetch(URL2, { headers: headersP })
            .then((res) => res.json())
            .then((res) => {
              setNegocios(res);
              localStorage.setItem('listaNegocios', JSON.stringify(res));
            });
        });
    }
  }, []);

  return (
    <div className="text-center">
      <h1><FormattedMessage id="These are our allied businesses!" /></h1>
      <p><FormattedMessage id="Powerful partnerships for growth! Explore our trusted allies, fueling our collective success. Together, we innovate, collaborate, and seize exciting prospects. Join our network of business champions and unlock boundless potential!" /></p>
      <br />
      <div className="row" style={{ justifyContent: 'center', alignContent: 'center' }}>
        {negocios.map((negocio) => (
          <div className="col-md-4" key={negocio.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{negocio.nombre}</h5>
                <p className="card-text">{negocio.descripcion}</p>
                <img src={negocio.imagen} className="card-img-top" alt={negocio.nombre} />
                <Link to={`/negocios/${negocio.id}`} className="btn btn-primary">
                  <FormattedMessage id="VerDetalles" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Negocios;
