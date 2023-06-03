import Profile from "./Profile";
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import "./Profile.css";
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

function ConfProfile({onGuardarClick}) {

    const [guardado, setGuardado] = useState(false);

    //Manejar la actualización de imagen de perfil
    const [imgSelected, setImgSelected] = useState(null);
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    //Manejar la actualización de datos de perfil
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [anio, setAnio] = useState('');


    //Acción de actualizar imagen de perfil
    const handleCambiarImagenPerfil = () => {
        setIsBtnClicked(true);
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const file = event.target.files[0];
            setImgSelected(file);
            const imgUrl = URL.createObjectURL(file);
            setImageUrl(imgUrl);
        };
        input.click();
    };


    //Acción de actualizar datos de perfil en el formulario (CANCELAR)
    const handleCancelar = () => {
        setNombre('');
        setApellido('');
        setCedula('');
        setDia('');
        setMes('');
        setAnio('');
    };

    //Guardar fecha de inscripción por actualización de datos de perfil
    const [fechaInscripcion, setFechaInscripcion] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    
    console.log('fehcaIns:'+fechaInscripcion);
    console.log('id:'+idUsuario);
    console.log('nombre:'+nombre);
    console.log('apellido:'+apellido);
    console.log('cedula:'+cedula);
    console.log('dia:'+dia);
    console.log('mes:'+mes);
    console.log('anio:'+anio);
    console.log('imgSelected:'+imgSelected);
    console.log('imgURL:'+imageUrl);


    const hadlerUpdateGuardar = () => {
        const url = 'http://localhost:3000/api/v1/users/login';
        const datos = {
          username: 'adminUsuario',
          password: 'adminUsuario'
        }
        fetch(url, { method: 'POST', body: JSON.stringify(datos), headers: { 'Content-Type': 'application/json' } })
          .then(res => res.json())
          .then(res => {
            let token = res['token'];
            const headersU = { 'Authorization': 'Bearer ' + token };
            const urlUsuarios = 'http://localhost:3000/api/v1/usuarios/' + idUsuario;
            return fetch(urlUsuarios, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                ...headersU
              },
              body: JSON.stringify({
                cedula: cedula,
                nombre: nombre+ '-' + apellido,
                fechaNacimiento: anio + '-' + mes + '-' + dia,
                fechaInscripcion: fechaInscripcion,
                imagen: imageUrl 
              })
            });
          })
          .then(response => response.json())
          .then(data => {
            console.log('La información se ha actualizado correctamente');
          })
          .catch(error => {
            console.log('Ha ocurrido un error al actualizar la información');
          });
      };

    return (
        <div class="row with-vertical-line">
            <div class="col-4 vertical-line">
                <Profile imagenSeleccionada={imageUrl}
                setFechaInscripcion={setFechaInscripcion}
                setIdUsuario={setIdUsuario}
                setImageUrl={setImageUrl}/>
                <div class='text-center' style={{ marginTop: '20px' }}>
                    <MDBBtn
                        color="danger"
                        size="sm"
                        onClick={handleCambiarImagenPerfil}>
                        Cambiar imagen de perfil
                    </MDBBtn>
                </div>
            </div>
            <div class="col-8 my-4">
                <h5 style={{ borderBottom: "2px solid #E25540", textAlign: "right", color: "#E25540" }}>Configuración de perfil</h5>
                <div class="row my-4">
                    <div class="col-6">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="nombre..."
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            maxLength={25}/>
                        </Form.Group>
                    </div>
                    <div class="col-6">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="apellido..." 
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            maxLength={25}/>
                        </Form.Group>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-12">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Cedula</Form.Label>
                            <Form.Control type="email" placeholder="cedula..." 
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
                            maxLength={10}/>
                        </Form.Group>
                    </div>
                </div>
                <div class="row my-4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                    </Form.Group>
                    <div class="col-4">
                        <Form.Control type="text" placeholder="DD" 
                        value={dia}
                        onChange={(e) => setDia(e.target.value)}
                        maxLength={2}/>
                    </div>
                    <div class="col-4">
                        <Form.Control type="text" placeholder="MM"
                        value={mes}
                        onChange={(e) => setMes(e.target.value)}
                        maxLength={2}/>
                    </div>
                    <div class="col-4">
                        <Form.Control type="text" placeholder="AAAA"
                        value={anio}
                        onChange={(e) => setAnio(e.target.value)}
                        maxLength={4}/>
                    </div>
                </div>
                <div class="row my-4">
                    <div className="col d-flex justify-content-end">
                        <ButtonGroup aria-label="options">
                            <Button variant="outline-danger" className="ml-2" onClick={handleCancelar}>CANCELAR</Button>
                            <Button variant="danger" className="ml-2" onClick={hadlerUpdateGuardar}>GUARDAR</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfProfile;