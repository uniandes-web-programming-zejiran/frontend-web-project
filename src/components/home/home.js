import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){

    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        const URL = "http://localhost:3000/api/v1/users/login";
        const datos = {
            username:"adminProducto",
            password:"adminProducto"
        }
        fetch(URL,{method:"POST", body: JSON.stringify(datos), headers: {"Content-type": "application/json; charset=UTF-8"}}).then(res => res.json()).then(res => {
            let token = res["token"]
            const headersP = { 'Authorization': 'Bearer ' + token}
            const URL2 = "http://localhost:3000/api/v1/productos";
            fetch(URL2, {headers: headersP}).then(res => res.json()).then(res => {
                console.log("Hola")
                console.log(res)
                setProductos(res);
            })
        })

    }, []);

    return(
        <div className='text-center'>
            <MDBTypography tag="h1" style={{fontFamily: "system-ui"}}>¡Explora los nuevos productos!</MDBTypography>
            <MDBTypography className='text-muted' style={{fontFamily: "system-ui"}}>Conoce los nuevos productos ecológicos proporcionados por las empresas aliadas</MDBTypography>
            <Button style={{ backgroundColor: "#FF9591" }}><Link style={{color:"inherit", textDecoration:"none"}} to={"/productos"}>Explorar!</Link></Button>
            <br></br>
            <br></br>
            <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
            <img
                            src= "https://promoactual.com/wp-content/uploads/2018/09/Azure.png"
                            className='border border-3 border-secondary rounded-pill'
                            fluid
                            style={{ height: '200px', borderColor: '#E25540' }}
            />
            </MDBCol>
            <MDBCol>
            <img
                            src= "https://verdecora.es/blog/wp-content/uploads/2019/07/ramo-rosas-rosas-4.jpg"
                            className='border border-3 border-secondary rounded-pill'
                            fluid
                            style={{ height: '200px', borderColor: '#E25540' }}
            />
            </MDBCol>
            <MDBCol></MDBCol>
            </MDBRow>

            <br></br>
            <br></br>
            <hr></hr>
            <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBTypography style={{fontFamily: "system-ui"}}>El espacio para cambiar un poco nuestro estilo de vida, ayudar un poco con el planeta, apoyar el talento local y presentar nuestros productos de manera digital.</MDBTypography>
                <MDBTypography style={{fontFamily: "system-ui"}}><b>¡Conoce más!</b></MDBTypography>
                <img
                            src= "https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                            fluid
                            style={{ height: '80px' }}
                />
            <br></br>
            <br></br>
            <br></br>
            </MDBCol>
            <MDBCol></MDBCol>
            </MDBRow>
            <hr></hr>
            <MDBTypography tag="h4" style={{fontFamily: "system-ui"}}>Ofertas Semanales</MDBTypography>
            <br></br>
            <div className="row" style={{justifyContent:"center", alignContent:"center"}}>
            {productos.map((prod) => (
            <MDBCol className="d-flex align-items-center justify-content-center text-center">
            <MDBCard className="w-55 h-500" style={{ borderRadius: '15px', backgroundColor: '#FFF188' }}>
            <MDBCardBody>
            <Link style={{color:"inherit", textDecoration:"none"}} to={"/producto/" + prod.id}>
                <MDBTypography tag="h3">{prod.nombre}</MDBTypography>
            </Link>
            <br></br>
                    <MDBCardImage
                            src={prod.imagen}
                            fluid
                            className='border border-3 border-danger rounded-pill'
                            style={{ height: '150px', borderColor: '#E25540' }}
                    />
                    <br></br>
                    <br></br>
                    <MDBCardText className="mb-2 h5">Precio Unitario</MDBCardText>
                    <MDBCardText className="mb-2 h5 text-muted mb-0">{prod.precio}$</MDBCardText>
                    <br></br>
            </MDBCardBody>
            </MDBCard>
            </MDBCol>
            ))}
            </div>
        </div>
    )
}

export default Home;