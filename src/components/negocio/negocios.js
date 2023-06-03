import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

function Negocios() {
  const [negocios, setNegocios] = useState([]);
  const intl = useIntl();

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
      <h1><FormattedMessage id="NegDisp" /></h1>
      <p><FormattedMessage id="NegExplora" /></p>
      <br />
      <div className="row justify-content-center align-items-center">
        {negocios.map((negocio) => (
          <div className="col-md-4" key={negocio.id}>
            <div className="card mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">{negocio.nombre}</h5>
                <p className="card-text">{negocio.descripcion}</p>
                <img src={negocio.imagen} className="card-img-top mx-auto" alt={negocio.nombre} />
                <Link to={`/negocios/${negocio.id}`} className="btn btn-primary">
                  <FormattedMessage id="NegBttn" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Negocios;
