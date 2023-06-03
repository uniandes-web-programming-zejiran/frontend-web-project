import React, { useState, useEffect } from 'react';
import Profile from '../profile/Profile';
import Post from './Post';
import { FormattedMessage } from 'react-intl';

function PostPage() {
  const [fechaInscripcion, setFechaInscripcion] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [publicaciones, setPublicaciones] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:3000/api/v1/users/login';
    const datos = {
      username: 'adminPublicacion',
      password: 'adminPublicacion'
    };
    fetch(url, { method: 'POST', body: JSON.stringify(datos), headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(res => {
        let token = res['token'];
        const headersU = { 'Authorization': 'Bearer ' + token };
        const urlPublicaciones = 'http://localhost:3000/api/v1/publicaciones';
        fetch(urlPublicaciones, { headers: headersU })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('listPublicaciones', JSON.stringify(res));
            setPublicaciones(res);
          });
      });
  }, []);

  return (
    <div className="row with-vertical-line">
      <div className="col-4 vertical-line">
        <Profile setFechaInscripcion={setFechaInscripcion} setIdUsuario={setIdUsuario} />
      </div>
      <div className="col-8 my-4">
        <h5 style={{ borderBottom: "2px solid #E25540", textAlign: "right", color: "#E25540" }}><FormattedMessage id='Posts'/></h5>
        <div className="row my-4">
          {publicaciones.map(publicacion => {
            return (
              <Post
                key={publicacion.id}
                publicacion={publicacion}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
