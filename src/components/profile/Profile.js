import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';

const Profile = ({ imagenSeleccionada, setFechaInscripcion, setIdUsuario }) => {

    const [usuario, setUsuario] = useState({});

    //Petición de la información del usuario deseado
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

    //Sacar el numero de publicaciones de un usuario
    const numeroPublicaciones = usuario.publicaciones ? usuario.publicaciones.length : 0;

    //Enviar información de id y fechaInscripcion al componente padre
    useEffect(() => {
        setFechaInscripcion(usuario.fechaInscripcion);
        setIdUsuario(usuario.id);
      }, [usuario.fechaInscripcion, usuario.id, setFechaInscripcion, setIdUsuario]);

    return (
        <div className="h-80" style={{ backgroundColor: '#FFFFFF' }}>
            <MDBContainer className="container py-5 h-100 ">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol className='flex-fill align-self-start'>
                        <MDBCard className="w-100 h-100" style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={imagenSeleccionada ? URL.createObjectURL(imagenSeleccionada) : usuario.imagen}
                                    className="rounded-circle orange-border"
                                    fluid
                                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderColor: '#E25540' }}
                                />
                                <MDBTypography tag="h4">{usuario.nombre}</MDBTypography>
                                <MDBCardText className="text-muted mb-4">
                                    {usuario.fechaNacimiento}
                                </MDBCardText>
                                <div className="px-3 mx-auto">
                                    <MDBCardText className="mb-1 h5">
                                        {numeroPublicaciones}
                                    </MDBCardText>
                                    <MDBCardText className="small text-muted mb-0">
                                        Publicaciones
                                    </MDBCardText>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    )
}

export default Profile;