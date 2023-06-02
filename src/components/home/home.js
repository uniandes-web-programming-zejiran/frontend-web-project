import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

function Home() {

    const [productos, setProductos] = useState([]);
    useEffect(()=>{

        if(!navigator.onLine){
            if(localStorage.getItem("listaProd") === null) {
                setProductos([])
            } else {
                setProductos(JSON.parse(localStorage.getItem("listaProd")));
            }
        }
        else{

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
                    setProductos(res);
                    localStorage.setItem("listaProd", JSON.stringify(res));
                })
            })
        }

    }, []);

    return (
        <div className='text-center'>
            <MDBTypography tag="h1" style={{ fontFamily: "system-ui" }}><FormattedMessage id="HomeExplora" /></MDBTypography>
            <MDBTypography className='text-muted' style={{ fontFamily: "system-ui" }}><FormattedMessage id="HomeConoce" /></MDBTypography>
            <Button style={{ backgroundColor: "#FF9591" }}><Link style={{ color: "inherit", textDecoration: "none" }} to={"/productos"}><FormattedMessage id="Explorar" /></Link></Button>
            <br></br>
            <br></br>
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol>
                    <img
                        src="https://promoactual.com/wp-content/uploads/2018/09/Azure.png"
                        className='border border-3 border-secondary rounded-pill'
                        fluid
                        style={{ height: '200px', borderColor: '#E25540' }}
                    />
                </MDBCol>
                <MDBCol>
                    <img
                        src="https://verdecora.es/blog/wp-content/uploads/2019/07/ramo-rosas-rosas-4.jpg"
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
                    <MDBTypography style={{ fontFamily: "system-ui" }}><FormattedMessage id="HomeEspacio" /></MDBTypography>
                    <MDBTypography style={{ fontFamily: "system-ui" }}><b><FormattedMessage id="ConoceMas" /></b></MDBTypography>
                    <img
                        src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                        fluid
                        style={{ height: '80px' }}
                    />
                    <br></br>
                    <MDBRow>
                        <MDBCol>
                            <Link style={{ color: "inherit", textDecoration: "none" }} to={"/productos"}>
                                <MDBCard className="w-55 h-500" style={{ borderRadius: '15px', backgroundColor: '#FFF188' }}>
                                    <MDBCardBody>
                                        <br></br>
                                        <MDBCardImage
                                            src="https://cdn-icons-png.flaticon.com/512/679/679821.png"
                                            fluid
                                            style={{ height: '75px' }}
                                        />
                                        <br></br>
                                        <br></br>
                                        <MDBCardText className="mb-2 h5 text-muted mb-0"><FormattedMessage id="Productos" /></MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="w-55 h-500" style={{ borderRadius: '15px', backgroundColor: '#FFF188' }}>
                                <MDBCardBody>
                                    <br></br>
                                    <MDBCardImage
                                        src="https://cdn-icons-png.flaticon.com/512/1809/1809216.png"
                                        fluid
                                        style={{ height: '75px' }}
                                    />
                                    <br></br>
                                    <br></br>
                                    <MDBCardText className="mb-2 h5 text-muted mb-0">Blog</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <br></br>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard className="w-55 h-500" style={{ borderRadius: '15px', backgroundColor: '#FFF188' }}>
                                <MDBCardBody>
                                    <br></br>
                                    <MDBCardImage
                                        src="https://cdn-icons-png.flaticon.com/512/1591/1591041.png"
                                        fluid
                                        style={{ height: '75px' }}
                                    />
                                    <br></br>
                                    <br></br>
                                    <MDBCardText className="mb-2 h5 text-muted mb-0"><FormattedMessage id="Negocios" /></MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="w-55 h-500" style={{ borderRadius: '15px', backgroundColor: '#FFF188' }}>
                                <MDBCardBody>
                                    <br></br>
                                    <MDBCardImage
                                        src="https://cdn-icons-png.flaticon.com/512/6556/6556497.png"
                                        fluid
                                        style={{ height: '75px' }}
                                    />
                                    <br></br>
                                    <br></br>
                                    <MDBCardText className="mb-2 h5 text-muted mb-0"><FormattedMessage id="Eventos" /></MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <br></br>
                    <br></br>
                </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            <hr></hr>
            <MDBTypography tag="h3" style={{ fontFamily: "system-ui" }}><FormattedMessage id="OfertasSem" /></MDBTypography>
            <br></br>
            <div className="row" style={{ justifyContent: "center", alignContent: "center" }}>
                {productos.map((prod) => (
                    <MDBCol className="d-flex align-items-center justify-content-center text-center">
                        <MDBCard className="w-55 h-500" style={{ borderRadius: '15px', backgroundColor: '#D4FCF0' }}>
                            <MDBCardBody>
                                <Link style={{ color: "inherit", textDecoration: "none" }} to={"/producto/" + prod.id}>
                                    <MDBTypography tag="h3">{prod.nombre}</MDBTypography>
                                </Link>
                                <br></br>
                                <MDBCardImage
                                    src={prod.imagen}
                                    fluid
                                    className='border border-3 border-secondary rounded-pill'
                                    style={{ height: '150px', borderColor: '#E25540' }}
                                />
                                <br></br>
                                <br></br>
                                <MDBCardText className="mb-2 h5"><FormattedMessage id="PrecioUnitario" /></MDBCardText>
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