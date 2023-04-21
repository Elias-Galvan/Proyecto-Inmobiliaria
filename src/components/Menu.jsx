import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/Menu.css'

import Offcanvas from 'react-bootstrap/Offcanvas';
import iconoHeader from "../assets/statics/icono.webp"
function OffcanvasExample() {
    return (
      <>
        {['l,xxl'].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className="mb-3" >
            <Container fluid>
              <Navbar.Brand href="/"><img src={iconoHeader} alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} bg="light">
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Propiedades</Nav.Link>
                    <Nav.Link href="/Emprendimientos">Emprendimientos</Nav.Link>
                    <Nav.Link href="#action2">Alquiler</Nav.Link>
                    <Nav.Link href="#action2">Venta</Nav.Link>
                    <Nav.Link href="/LaEmpresa">La Empresa</Nav.Link>
                    <Nav.Link href="#action2">Tasacion</Nav.Link>
                    <Nav.Link href="#action2">Contacto</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
  
  export default OffcanvasExample;