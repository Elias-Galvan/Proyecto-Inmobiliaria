import React from "react";
import "../assets/css/Busqueda.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Busqueda() {
  return (
    <>
      <div className="busqueda">
        <h1>Busque su propiedad en Lopez Balaguer Bienes Raices</h1>
        <Navbar bg="transparent" className="navbar" expand="lg">
          <Container className="var" fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Venta" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Venta</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Alquiler</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Tipo de propiedad"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Terreno</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Departamentos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Casa</NavDropdown.Item>

                  <NavDropdown.Item href="#action4">Locales</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
