import React from "react";
//import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div>
      <div className="bg-dark">
        <div className="row no-gutters container px-5 pt-5">
          <div className="col-sm-12 col-md-3 mb-4 text-center">
            <Nav.Link exact={true} href="/inicio">
              {/* <img src={logo} alt="logo del Footer" width="100px"></img> */}
            </Nav.Link>
            <div className="text-left">
              <Nav.Link
                exact={true}
                href="/inicio"
                className="nav-link text-light mb-1 p-0"
              >
                INICIO
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/equipos"
                className="nav-link text-light mb-1 p-0"
              >
                EQUIPOS
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/servicios"
                className="nav-link text-light mb-1 p-0"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/contacto"
                className="nav-link text-light mb-1 p-0"
              >
                CONTACTO
              </Nav.Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 text-light mb-4">
            <p>HORARIO</p>
            <p>LUNES a VIERNES</p>
            <p>08:00 a 16:00</p>
            <p>SABADOS</p>
            <p>08:00 a 12:00</p>
          </div>
          <div className="col-sm-12 col-md-3 text-light mb-4">
            <p>TELEFONO</p>
            <p>FIJO</p>
            <p>381 423-9995</p>
            <p>381 423-3773</p>
            <p>CELULAR</p>
            <a
              href="https://wa.me/5493816407353"
              target="_blank"
              rel="noopener noreferrer"
              className="letrasfooter text-light"
            >
              <p>
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faWhatsapp}
                  color="#fff"
                  size="1x"
                />
                381 640-7353
              </p>
            </a>
          </div>
          <div className="col-sm-12 col-md-3 text-light mb-4">
            <p>DIRECCION</p>
            <a
              href="https://www.google.com.ar/maps/place/Castelli+69,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8226217,-65.2362843,17z/data=!4m5!3m4!1s0x94225c5ee0a47ceb:0x8e015b8db3a3570a!8m2!3d-26.8231244!4d-65.2349217"
              target="_blank"
              rel="noopener noreferrer"
              className="letrasfooter text-light"
            >
              <p>
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faMapMarkerAlt}
                  color="#fff"
                  size="1x"
                />
                Casteli 69<br></br>San Miguiel de Tucumán<br></br>Tucumán |
                T4000
              </p>
            </a>

            <Nav.Link
              exact={true}
              href="/contacto"
              className="nav-link text-light m-0 p-0"
            >
              <p>CORREO</p>
              <p>
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faEnvelope}
                  color="#fff"
                  size="1x"
                />
                carloszelarayan@sinectis.com.ar
              </p>
            </Nav.Link>
          </div>
        </div>
      </div>
      <div className="bg-danger">
          <p className="pl-5">Copyright 2021 | Agencia Katana</p>
      </div>
    </div>
  );
};

export default Footer;
