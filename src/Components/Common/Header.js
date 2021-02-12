import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
        <div>
           <Navbar  collapseOnSelect bg="dark" variant="dark" expand="lg">
        <div className="container py-1">
          <Nav.Link exact={true} href="/#inicio">
            {/* <img src={logo} alt="logo del NavBar" width="70px"></img> */}
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                exact={true}
                href="/#inicio"
                className="nav-link text-light"
              >
                INICIO
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/equipos"
                className="nav-link text-light"
              >
                EQUIPOS
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/servicios"
                className="nav-link text-light"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/contacto"
                className="nav-link text-light"
              >
                CONTACTO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
        </div>
    );
};

export default Header;