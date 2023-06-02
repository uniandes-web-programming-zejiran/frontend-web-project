import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBImage, MDBTypography } from 'mdb-react-ui-kit';
import { FormattedMessage } from 'react-intl';

function Footer() {
    return (
        <div className='text-center'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol>
                    <MDBTypography tag="h3" style={{ fontFamily: "system-ui" }}><FormattedMessage id="Nosotros" /></MDBTypography>
                    <MDBTypography style={{ fontFamily: "system-ui" }}><FormattedMessage id="FooterSomos" /></MDBTypography>
                </MDBCol>
                <MDBCol>
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/shopping-circle-green-512.png"
                        fluid
                        style={{ height: '150px', borderColor: '#E25540' }}
                    />
                </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            <br></br>
            <MDBTypography className='my-5' tag="h6" style={{ fontFamily: "system-ui" }}><FormattedMessage id="Contactanos" />: +57 3163782253 - info@EcoWeb.com</MDBTypography>
        </div>
    )
}

export default Footer;