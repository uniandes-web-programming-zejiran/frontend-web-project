import React from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

function Post({ publicacion }) {
  const { titulo, cuerpo, fechaPublicacion, imagen } = publicacion;

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const url = 'http://localhost:3000/api/v1/users/login';
    const datos = {
        username: 'adminUsuario',
        password: 'adminUsuario'
    }
    fetch(url, { method: 'POST', body: JSON.stringify(datos), headers: { 'Content-Type': 'application/json' } }).then(res => res.json()).then(res => {
        let token = res['token'];
        const headersU = { 'Authorization': 'Bearer ' + token }
        const urlUsuarios = 'http://localhost:3000/api/v1/usuarios';
        fetch(urlUsuarios, { headers: headersU }).then(res => res.json()).then(res => {
            localStorage.setItem('listUsuarios', JSON.stringify(res));
            fetch(urlUsuarios + '/' + res[0].id, { headers: headersU }).then(res => res.json()).then(res => {
                setUsuario(res);
            })
        })
    })
  }, []);
  return (
    <div className="h-80" style={{ backgroundColor: '#FFFFFF' }}>
      <MDBCard className="w-75 mt-4 mx-auto" style={{ borderRadius: '15px' }}>
        <MDBCardBody>
          <div className="d-flex align-items-center">
            <img
              src={usuario.imagen}
              alt="Foto de perfil"
              className="rounded-circle orange-border mr-3"
              style={{ width: '40px', height: '40px', objectFit: 'cover',borderColor: '#E25540' }}
            />
            <div>
              <h5 className="mb-0 mx-2">{usuario.nombre}</h5>
              <div className="text-muted mx-2">{fechaPublicacion}</div>
            </div>
          </div>
          <p className="mt-3">{cuerpo}</p>
          <img
            src={imagen}
            alt="Imagen de la publicación"
            className="w-75 mx-auto d-block"
          />
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Post;
