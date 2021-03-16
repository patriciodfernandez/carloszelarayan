import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import logo from "../../assets/images/Logo_PNG_Medium.png";
import "./Header.css";

const Header = () => {
  return (
    <div id="top">
      {/* HEADER LG Y XL */}
      <div className="header positionheader w-100 noxs noxm nomd">
        <Navbar collapseOnSelect expand="lg" className="transparente">
          <div className="container py-1">
            <Nav.Link exact={true} href="/" className="solido">
              <img src={logo} alt="logo del NavBar" width="160px"></img>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  exact={true}
                  href="/"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  INICIO
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/equipos"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  EQUIPOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/servicios"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  SERVICIOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/contacto"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  CONTACTO
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      {/* HEADER XS SM Y MD */}
      <div className="header w-100 nolg noxl">
        <Navbar collapseOnSelect expand="lg" className="negroo">
          <div className="container">
            <Nav.Link exact={true} href="/">
              <img src={logo} alt="logo del NavBar" width="90px"></img>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  exact={true}
                  href="/"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  INICIO
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/equipos"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  EQUIPOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/servicios"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  SERVICIOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/contacto"
                  className="nav-link text-light efectonav solido px-0 mx-3"
                >
                  CONTACTO
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
