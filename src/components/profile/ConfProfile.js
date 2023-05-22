import Profile from "./Profile";
import React from 'react';
import {  MDBBtn } from 'mdb-react-ui-kit';
import "./Profile.css";
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup} from "react-bootstrap";

function ConfProfile(){
    return(
        <div class="row with-vertical-line">
            <div class="col-4 vertical-line">
                <Profile />
                <div class = 'text-center' style={{ marginTop: '20px' }}>
                    <MDBBtn color="danger" size="sm">Cambiar imagen de perfil</MDBBtn>
                </div>
            </div>
            <div class="col-8 my-4">
                <h5 style={{ borderBottom: "2px solid #E25540", textAlign: "right", color: "#E25540" }}>Configuración de perfil</h5>            
                <div class="row my-4">
                    <div class="col-6">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="NombreDefault" />
                        </Form.Group>
                    </div>
                    <div class="col-6">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="ApellidoDefault" />
                        </Form.Group>
                    </div>    
                </div>
                <div class="row my-4">
                    <div class="col-12">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Cedula</Form.Label>
                            <Form.Control type="email" placeholder="cedulaDefault" />
                        </Form.Group>
                    </div>
                </div>
                <div class="row my-4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                    </Form.Group>
                    <div class="col-4">
                        <Form.Control type="text" placeholder="DD" readOnly />
                    </div>
                    <div class="col-4">
                        <Form.Control type="text" placeholder="MM" readOnly />
                    </div>
                    <div class="col-4">
                        <Form.Control type="text" placeholder="AAAA" readOnly />
                    </div>
                </div>
                <div class="row my-4">
                    <div className="col d-flex justify-content-end">
                        <ButtonGroup aria-label="options">
                        <Button variant="outline-danger" className="ml-2">CANCELAR</Button>
                        <Button variant="danger" className="ml-2">GUARDAR</Button>
                        </ButtonGroup>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default ConfProfile;