import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import logo from "../../assets/images/Logo_PNG_Medium.png";
import "./Header.css";

const Header = () => {
  return (
    <div id="top" className="gothambook">
      {/* HEADER LG Y XL */}
      <div className="positionheader w-100 noxs noxm nomd">
        <Navbar collapseOnSelect expand="lg">
          <div className="container py-1">
            <Nav.Link exact={true} href="/">
              <img src={logo} alt="logo del NavBar" width="160px"></img>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  exact={true}
                  href="/"
                  className="nav-link text-light efectonav px-0 mx-3"
                >
                  INICIO
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/equipos"
                  className="nav-link text-light efectonav px-0 mx-3"
                >
                  EQUIPOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/servicios"
                  className="nav-link text-light efectonav px-0 mx-3"
                >
                  SERVICIOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/contacto"
                  className="nav-link text-light efectonav px-0 mx-3"
                >
                  CONTACTO
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      {/* HEADER XS SM Y MD */}
      <div className="w-100 nolg noxl">
        <Navbar collapseOnSelect expand="lg" className="negroo text-right navbar-dark">
          <div className="container">
            <Nav.Link exact={true} href="/">
              <img src={logo} alt="logo del NavBar" width="100px"></img>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ml-auto" >
                <Nav.Link
                  exact={true}
                  href="/"
                  className="nav-link text-light efectonav px-0 mx-3"
                >
                  INICIO
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/equipos"
                  className="nav-link text-light efectonav px-0 mx-3"
                >
                  EQUIPOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/servicios"
                  className="nav-link text-light efectonav px-0 mx-3"
                >
                  SERVICIOS
                </Nav.Link>
                <Nav.Link
                  exact={true}
                  href="/contacto"
                  className="nav-link text-light efectonav px-0 mx-3"
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
