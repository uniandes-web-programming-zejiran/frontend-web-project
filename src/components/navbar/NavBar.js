import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {FormattedMessage} from 'react-intl';


function NavScrollExample() {

  return (
    <Navbar bg="light" expand="lg">
      <Container flex-fill>
        <Navbar.Brand href="#">
          <b>ECOWEB</b>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><FormattedMessage id="Inicio"/></Nav.Link>
            <Nav.Link href="/productos"><FormattedMessage id="Productos"/></Nav.Link>
            <Nav.Link href="#Blogs">Blogs</Nav.Link>
            <Nav.Link href="#Eventos"><FormattedMessage id="Eventos"/></Nav.Link>

            {/* LISTADO DE OPCIONES (FUTURO)
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-4">
              <i className="bi bi-search"></i>
            </Button>
            <Button variant="outline-success" className="me-2">
              <i className="bi bi-person"></i>
            </Button>
            <Button variant="outline-success" className="me-2" >
              <i className="bi bi-cart"></i>
            </Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;