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
                    <img className='logo' src={logo} alt="Logo de Store" />
                    IT STORE
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='navbar-toggler collapsed' id='navoff'>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/"><h2><strong>Home</strong></h2></Nav.Link>
                      <hr />
                      <Nav.Link href="/Destacados"><h3>📌Destacados</h3></Nav.Link>
                      <Nav.Link href="/Populares"><h3>❤️‍🔥Populares</h3></Nav.Link>
                      <Nav.Link href="/MejoresRegalos"><h3>🎁Mejores regalos</h3></Nav.Link>
                      <Nav.Link href="/Creadores"><h3>🪆Creadores Locales</h3></Nav.Link>
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