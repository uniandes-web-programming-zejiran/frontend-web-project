import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBImage, MDBTypography } from 'mdb-react-ui-kit';

function Footer () {
   return(
    <div className='text-center'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBTypography tag="h3" style={{fontFamily: "system-ui"}}>Nosotros</MDBTypography>
                <MDBTypography style={{fontFamily: "system-ui"}}>Somos un sitio web que reúne información tanto de productos locales como de tiendas de cadena con el fin de tener un catálogo eco sostenible, local, artesanal y lleno de emprendimientos.</MDBTypography>
            </MDBCol>
            <MDBCol>
                <img
                            src= "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/shopping-circle-green-512.png"
                            fluid
                            style={{ height: '150px', borderColor: '#E25540' }}
                />
            </MDBCol>
            <MDBCol></MDBCol>
        </MDBRow>
        <br></br>
        <MDBTypography tag="h6" style={{fontFamily: "system-ui"}}>Contactanos: +57 3163782253 - info@EcoWeb.com</MDBTypography>
    </div>
   )
}

export default Footer;