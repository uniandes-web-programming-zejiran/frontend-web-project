import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl';


function Producto() {

    const params = useParams();

    const [producto, setProducto] = useState([]);
    useEffect(() => {
        const URL = "http://localhost:3000/api/v1/users/login";
        const datos = {
            username: "adminProducto",
            password: "adminProducto"
        }
        fetch(URL, { method: "POST", body: JSON.stringify(datos), headers: { "Content-type": "application/json; charset=UTF-8" } }).then(res => res.json()).then(res => {
            let token = res["token"]
            const headersP = { 'Authorization': 'Bearer ' + token }
            const URL2 = "http://localhost:3000/api/v1/productos/" + params.productoId;
            fetch(URL2, { headers: headersP }).then(res => res.json()).then(res => {
                console.log(res)
                setProducto(res);
            })
        })

    }, []);

    const [contCarr, setContCarr] = useState(false);

    const renderCart = () => {
        const userLanguage = navigator.language;
        if (contCarr === false) return "";
        else if (userLanguage == "es-ES") return "Añadido al carrito!";
        else if (userLanguage == "en-US") return "Added to cart!";
    };

    const changeCart = () => {
        setContCarr(true);
    }

    return (
        <div className="text-center" style={{ backgroundColor: '#FFFFFF' }}>
            <MDBTypography tag="h1" style={{ fontFamily: "system-ui" }}><FormattedMessage id="ProdDetalle" /></MDBTypography>
            <MDBTypography className='text-muted' style={{ fontFamily: "system-ui" }}><FormattedMessage id="ProdConoce" /></MDBTypography>
            <br></br>
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol>
                    <MDBContainer className="container align-items-center justify-content-center h-100">
                        <MDBCard className="w-90 h-100" style={{ borderRadius: '15px', width: '45rem', backgroundColor: '#FFE4E4' }}>
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol className="text-center">
                                        <MDBTypography tag="h3">{producto.nombre}</MDBTypography>
                                        <br></br>
                                        <MDBCardImage
                                            src={producto.imagen}
                                            fluid
                                            className='border border-3 border-danger rounded-pill'
                                            style={{ height: '250px', borderColor: '#E25540' }}
                                        />
                                        <br></br>
                                        <br></br>
                                    </MDBCol>
                                    <MDBCol className="text-center">
                                        <br></br>
                                        <MDBCardText className="mb-2 h5"><FormattedMessage id="Categoria" /></MDBCardText>
                                        <MDBCardText className="medium text-muted mb-0">{producto.categoria}</MDBCardText>
                                        <br></br>
                                        <MDBRow>
                                            <MDBCol>
                                                <MDBCardText className="mb-2 h5"><FormattedMessage id="Precio" /> {producto.precio}$</MDBCardText>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBCardText className="mb-2 h5">Stock: {producto.stock}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <br></br>
                                        <br></br>
                                        <Button style={{ backgroundColor: "#FFC32E", color: "#000000" }} onClick={changeCart}><FormattedMessage id="Comprar" /></Button>
                                        <br></br>
                                        <br></br>
                                        <div style={{ color: "#FF4F4F" }}><b>{renderCart()}</b></div>

                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
        </div>
    )
}

export default Producto;