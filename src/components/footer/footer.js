import { MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { FormattedMessage } from 'react-intl';
import footerImage from './../images/footer-image.png';

function Footer() {
    return (
        <div className='text-center'>
            <br />
            <br />
            <br />
            <br />
            <MDBRow>
                <MDBCol md={2}></MDBCol>
                <MDBCol md={4}>
                    <MDBTypography tag="h3" style={{ fontFamily: "system-ui" }}>
                        <FormattedMessage id="Nosotros" />
                    </MDBTypography>
                    <MDBTypography style={{ fontFamily: "system-ui" }}>
                        <FormattedMessage id="FooterSomos" />
                    </MDBTypography>
                </MDBCol>
                <MDBCol md={4}>
                    <img
                        src={footerImage}
                        alt='footer'
                        fluid
                        style={{ height: '200px', borderColor: '#E25540' }}
                    />
                </MDBCol>
                <MDBCol md={2}></MDBCol>
            </MDBRow>
            <br />
            <MDBTypography className='my-5' tag="h6" style={{ fontFamily: "system-ui" }}>
                <FormattedMessage id="Contactanos" />: +57 3163782253 - info@EcoWeb.com
            </MDBTypography>
        </div>
    );
}

export default Footer;
