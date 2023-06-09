import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FormattedMessage} from 'react-intl';

function ListaProductos(){

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
            setProductos(JSON.parse(localStorage.getItem("listaProd")));
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

    return(
        <div className='text-center'>
            <MDBTypography tag="h1" style={{fontFamily: "system-ui"}}><FormattedMessage id="ProdDisp"/></MDBTypography>
            <MDBTypography className='text-muted' style={{fontFamily: "system-ui"}}><FormattedMessage id="ProdExplora"/></MDBTypography>
            <br></br>
            <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
            <img
                            src= "https://promoactual.com/wp-content/uploads/2018/09/Azure.png"
                            className='border border-3 border-secondary rounded-pill'
                            fluid
                            style={{ height: '200px', borderColor: '#E25540' }}
                            alt = "Alt"
            />
            </MDBCol>
            <MDBCol>
            <img
                            src= "https://img1.picmix.com/output/stamp/normal/2/7/5/6/2076572_2ec0d.png"
                            className='border border-3 border-secondary rounded-pill'
                            fluid
                            style={{ height: '200px', width:"230px", borderColor: '#E25540' }}
                            alt = "Alt"
            />
            </MDBCol>
            <MDBCol></MDBCol>
            </MDBRow>
            <br></br>
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
                    <MDBCardText className="mb-2 h5"><FormattedMessage id="PrecioUnitario"/></MDBCardText>
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

export default ListaProductos;