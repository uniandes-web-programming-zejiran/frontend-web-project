import React, { useState, useEffect } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { FormattedMessage, useIntl } from 'react-intl';


function ListaNegocios() {
  const [businesses, setBusinesses] = useState([]);
  const intl = useIntl();

  useEffect(() => {
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
            setBusinesses(res);
          });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-center">
      <h1><FormattedMessage id="NegDetalle" /></h1>
      <div className="row justify-content-center align-items-center">
        {businesses.map((business) => (
          <div className="col-md-4" key={business.id}>
            <div className="card mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">{business.nombre}</h5>
                <p className="card-text">{business.descripcion}</p>
                <div className="image-center">
                  <img src={business.imagen} className="card-img-top mx-auto" alt={business.nombre} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }
  

export default ListaNegocios;
