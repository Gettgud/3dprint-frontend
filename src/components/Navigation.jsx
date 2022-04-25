import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">NT Country Creations</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/educational">Educational</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
