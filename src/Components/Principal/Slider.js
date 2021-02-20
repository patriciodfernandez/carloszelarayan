import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import slider4 from "../../assets/images/slider-4.jpg";
import Nav from "react-bootstrap/Nav";

const Slider = () => {
  return (
    <div className="mb-5" id="inicio">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <Nav.Link exact={true} href="/" className="nav-link text-light">
              <h3 className="text-left">
                <b>PROVEEDOR</b>
              </h3>
              <h3 className="text-left subrayado">DE SOLUCIONES</h3>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Third slide" />
          <Carousel.Caption>
            <Nav.Link exact={true} href="/equipos" className="nav-link text-light">
              <h3 className="text-left">
                <b>CONOCÉ</b>
              </h3>
              <h3 className="text-left subrayado">NUESTROS EQUIPOS</h3>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption>
            <Nav.Link exact={true} href="/servicios" className="nav-link text-light">
              <h3 className="text-left">
                <b>CONOCÉ</b>
              </h3>
              <h3 className="text-left subrayado">NUESTROS SERVICIOS</h3>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Third slide" />
          <Carousel.Caption>
            <Nav.Link exact={true} href="/contacto" className="nav-link text-light">
              <h3 className="text-left">
                <b>ESTAMOS</b>
              </h3>
              <h3 className="text-left subrayado">PARA AYUDARTE</h3>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
