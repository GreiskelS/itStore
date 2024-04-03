import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './css/Navbar.css'

function Navbarhome() {
  const logo = "https://cdn.glitch.global/55101d5a-1c75-498d-8bf8-5a3bd396a138/Logo.png?v=1712071547142";
  const buttonsearchnav = "src/assets/lupa.png";
  const buttonlanguage = "src/assets/bandera.png";
  const buttonlike = "src/assets/like.png";
  const buttonkart = "src/assets/kart.png";
  
  return (
    <div>
      <header id='headnav'>
        <section className='headerHome'>
          <img className='logo' src={logo} alt="Logo de Store" />
          {[false,].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
              <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder=" Busca lo que se te ocurra"
                    className="me-2"
                    aria-label="Search"
                  />
                  <img id='buttonsearchnav' src={buttonsearchnav} alt="search" />
                </Form>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      otro
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='navbar-toggler collapsed'>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
          <div className='buttonsheader'>
            <Button variant="light" id='buttonentry'><h6><strong>Entrar</strong></h6></Button>{''}
            <Button variant="light" id='buttonlanguage'><img src={buttonlanguage} alt="Language" /></Button>{''}
            <Button variant="light" id='buttonlike'><img src={buttonlike} alt="Like or save" /></Button>{''}
            <Button variant="light" id='buttonkart'><img src={buttonkart} alt="Kart shopping" /></Button>{''}
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbarhome;