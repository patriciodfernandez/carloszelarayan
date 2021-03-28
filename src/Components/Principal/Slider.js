import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider_1.jpg";
import slider2 from "../../assets/images/slider_2.jpg";
import slider3 from "../../assets/images/slider_3.jpg";
import slider4 from "../../assets/images/slider_4.jpg";
import Nav from "react-bootstrap/Nav";

const Slider = () => {
  return (
    <div className="mb-5" id="inicio">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <Nav.Link exact={true} href="/" className="nav-link text-light noxs nosm">
              <h2 className="text-left">
                <b>PROVEEDOR</b>
              </h2>
              <h2 className="text-left subrayado">DE SOLUCIONES</h2>
              {/* <hr className="azul"></hr> */}
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h4 className="text-left">
                <b>PROVEEDOR</b>
              </h4>
              <h4 className="text-left subrayado">DE SOLUCIONES</h4>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nosm noxs"
            >
              <h2 className="text-left">
                <b>CONOCÉ</b>
              </h2>
              <h2 className="text-left subrayado">NUESTROS EQUIPOS</h2>
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h4 className="text-left">
                <b>CONOCÉ</b>
              </h4>
              <h4 className="text-left subrayado">NUESTROS EQUIPOS</h4>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <Nav.Link
              exact={true}
              href="/servicios"
              className="nav-link text-light noxs noxm"
            >
              <h2 className="text-left">
                <b>CONOCÉ</b>
              </h2>
              <h2 className="text-left subrayado">NUESTROS SERVICIOS</h2>
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h4 className="text-left">
                <b>CONOCÉ</b>
              </h4>
              <h4 className="text-left subrayado">NUESTROS SERVICIOS</h4>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <Nav.Link
              exact={true}
              href="/contacto"
              className="nav-link text-light noxs nosm"
            >
              <h2 className="text-left">
                <b>ESTAMOS</b>
              </h2>
              <h2 className="text-left subrayado">PARA AYUDARTE</h2>
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h4 className="text-left">
                <b>ESTAMOS</b>
              </h4>
              <h4 className="text-left subrayado">PARA AYUDARTE</h4>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
