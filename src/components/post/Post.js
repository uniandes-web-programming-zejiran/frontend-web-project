import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";


function Post(){
    return(
       
        <Container>
            <Row className="justify-content-center"> 
                <Col xs={12} md={8} className="d-flex">
                    <h1>Post</h1>
                </Col>
                <Col xs={6} md={4} className="d-flex">
                    <h1>Post</h1>
                </Col>
            </Row>    

        </Container>
  
    )
}

export default Post;