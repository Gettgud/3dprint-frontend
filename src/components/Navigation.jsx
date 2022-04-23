import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect bg='dark' variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">NT Country Creations</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
            Home
            </Nav.Link>
            <Nav.Link href="/about">
            About
            </Nav.Link>
            <Nav.Link href="/contact">
            Contact
            </Nav.Link>
            <Nav.Link href="/educational">
            Educational
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <div className="navigation">
    //   <nav className="navbar navbar-expand navbar-dark bg-dark">
    //     <div className="container">
    //       <NavLink className="navbar-brand" to="/">
    //         NTCountryCreations
    //       </NavLink>
    //       <div>
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/">
    //               Home
    //               <span className="sr-only">(current)</span>
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/about">
    //               About Us
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/contact">
    //               Contact
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/educational">
    //               Educational
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default Navigation;