import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function Post() {
    return (
        <div className="h-80" style={{ backgroundColor: '#FFFFFF' }}>
            <MDBCard className="w-75 mt-4 mx-auto" style={{ borderRadius: '15px' }}>
                <MDBCardBody>
                    <div className="d-flex align-items-center">
                        <img
                            src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                            alt="Foto de perfil"
                            className="rounded-circle orange-border mr-3"
                            style={{ width: '40px', height: '40px', borderColor: '#E25540' }}
                        />
                        <div >
                            <h5 className="mb-0 mx-2">Nombre de la persona</h5>
                            <div className="text-muted mx-2">Fecha de publicación</div>
                        </div>
                    </div>
                    <p className="mt-3">Texto de la publicación</p>
                    <img
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zero-waste-plastic-free-products-on-bathroom-window-royalty-free-image-1587469177.jpg?crop=0.667xw:1.00xh;0.145xw,0&resize=640:*"
                        alt="Imagen de la publicación"
                        className="w-75 mx-auto d-block"
                    />
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default Post;