import React from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function Post({ publicacion, usuario }) {
  const { titulo, cuerpo, fechaPublicacion, imagen } = publicacion;

  return (
    <div className="h-80" style={{ backgroundColor: '#FFFFFF' }}>
      <MDBCard className="w-75 mt-4 mx-auto" style={{ borderRadius: '15px' }}>
        <MDBCardBody>
          <div className="d-flex align-items-center">
            <img
              src={usuario.fotoPerfil}
              alt="Foto de perfil"
              className="rounded-circle orange-border mr-3"
              style={{ width: '40px', height: '40px', borderColor: '#E25540' }}
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
