import React from "react";
import logo from "../../assets/images/Logo_PNG_Medium1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* FOOTER OSCURO */}
      <div className="negro text-light">
        <div className="container py-4 justificado">
          <div className="row">
            {/* COL 1 */}
            <div className="col-sm-12 col-md-3 mt-0 mb-2">
              <Nav.Link exact={true} href="/inicio" className="px-0 nomd">
                <img
                  src={logo}
                  alt="logo del Footer"
                  width="160px"
                  className="mb-2"
                ></img>
              </Nav.Link>
              <Nav.Link exact={true} href="/inicio" className="px-0 noxs nosm nolg noxl">
                <img
                  src={logo}
                  alt="logo del Footer"
                  width="145px"
                  className="my-2"
                ></img>
              </Nav.Link>
              <ul className="m-0 p-0 noxs nosm nomd">
                <li>
                  <Nav.Link
                    exact={true}
                    href="/"
                    className="nav-link text-light mb-1 mx-0 p-0 efectofoot"
                  >
                    INICIO
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    exact={true}
                    href="/equipos"
                    className="nav-link text-light mb-1 mx-0 p-0 efectofoot"
                  >
                    EQUIPOS
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    exact={true}
                    href="/servicios"
                    className="nav-link text-light mb-1 mx-0 p-0 efectofoot"
                  >
                    SERVICIOS
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    exact={true}
                    href="/contacto"
                    className="nav-link text-light mb-1 mx-0 p-0 efectofoot"
                  >
                    CONTACTO
                  </Nav.Link>
                </li>
              </ul>
            </div>
            {/* COL 2 */}
            <div className="col-sm-12 col-md-3 mt-4">
              <p className="casisemibold azul mb-2">HORARIO</p>
              <p className="semibold mb-1">LUNES a VIERNES</p>
              <p className="mb-1 letrachica">08:00 a 16:00</p>
              <p className="semibold mb-1">SÁBADOS</p>
              <p className="letrachica">08:00 a 12:00</p>
            </div>
            {/* COL 3 */}
            <div className="col-sm-12 col-md-3 mt-4">
              <p className="casisemibold azul mb-2">TELÉFONO</p>
              <p className="semibold mb-1">FIJO</p>
              <p className="pb-0 mb-0 letrachica">381 423-9995</p>
              <p className="mb-1 letrachica">381 423-3773</p>
              <p className="semibold pb-1 mb-0">CELULAR</p>
              <a
                href="https://wa.me/5493816407353"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-light letrachica">
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
            {/*  COL 4 */}
            <div className="col-sm-12 col-md-3 mt-4">
              <p className="casisemibold azul mb-2">DIRECCIÓN</p>
              <a
                href="https://www.google.com.ar/maps/place/Castelli+69,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8226217,-65.2362843,17z/data=!4m5!3m4!1s0x94225c5ee0a47ceb:0x8e015b8db3a3570a!8m2!3d-26.8231244!4d-65.2349217"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light letrachica"
              >
                <p className="mb-0 letrachica semibold">Casteli 69</p>
                <p className="letrachica">
                  San Miguiel de Tucumán<br></br>Tucumán | T4000
                </p>
              </a>
              <Nav.Link
                exact={true}
                href="/contacto"
                className="nav-link text-light p-0"
              >
                <p className="casisemibold azul mb-2">CORREO</p>
                <p className="letrachica">
                  carloszelarayan@sinectis.com.ar
                </p>
              </Nav.Link>
            </div>
            {/* FIN COL 2 los otros dos divs son row, container, bg-dark */}
          </div>
        </div>
      </div>
      {/* FOOTER CELESTE */}
      <div className="fondogradiente">
        <p className="pl-5 py-2 text-light letrachica m-0">
          Copyright 2021 <b>| Agencia Katana</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
