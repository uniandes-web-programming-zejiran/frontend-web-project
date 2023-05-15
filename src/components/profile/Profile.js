import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

function Profile(){
    return(
        <div className="h-80" style={{ backgroundColor: '#FFFFFF' }}>
            <MDBContainer className="container py-5 h-100 ">
                <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol className='flex-fill align-self-start'>
                    <MDBCard className="w-100 h-100" style={{ borderRadius: '15px' }}>
                    <MDBCardBody className="text-center">
                        <div className="mt-3 mb-4">
                        <MDBCardImage
                            src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                            className="rounded-circle border border-3 border-#E25540"
                            fluid
                            style={{ width: '100px' }}
                        />
                        </div>
                        <MDBTypography tag="h4">Nombre Apellido</MDBTypography>
                        <MDBCardText className="text-muted mb-4">
                        ciudad, Pais
                        </MDBCardText>
                        <MDBCardText className="text-muted mb-4">
                        fecha de nacimiento
                        </MDBCardText>
                        <div className="px-3 mx-auto">
                        <MDBCardText className="mb-1 h5">21</MDBCardText>
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