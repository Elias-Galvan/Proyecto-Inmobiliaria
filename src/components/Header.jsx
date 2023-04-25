import "../assets/css/Header.css";
import "../assets/statics/icono.png";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import iconoHeader from "../assets/statics/icono.png";

export default function Header() {
  return (
    <>
      <div className="container-header">
        {["l,xxl"].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="/">
                <div className="icono">
                <img src={iconoHeader} alt="" />
                <h6>Duo Gym</h6>
                </div>
               
              </Navbar.Brand>


              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />


              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    bg="light"
                  >Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Login">Inicia sesion/Registrate</Nav.Link>
                    
                    <Nav.Link href="/Emprendimientos">Actividades</Nav.Link>
                    <Nav.Link href="#action2">Sumate Ya</Nav.Link>
                    <Nav.Link href="#action2">Nosotros</Nav.Link>
                    <Nav.Link href="/LaEmpresa">Contacto</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}
