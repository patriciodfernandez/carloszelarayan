import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider_1.jpg";
import slider2 from "../../assets/images/slider_2.jpg";
import slider3 from "../../assets/images/slider_3.jpg";
import slider4 from "../../assets/images/slider_4.jpg";
import Nav from "react-bootstrap/Nav";
import next from "../../assets/images/right-arrow.png"
import prev from "../../assets/images/left-arrow.png"

const Slider = () => {
  return (
    <div className="mb-5" id="inicio">
      <Carousel indicators={false} nextIcon={<span><img src={next} className="flechasSlider"></img></span>}
      prevIcon={<span><img src={prev} className="flechasSlider"></img></span>}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <Nav.Link exact={true} href="/" className="nav-link text-light noxs nosm">
              <h2 className="text-left gothammedium">
                PROVEEDOR
              </h2>
              <h2 className="text-left subrayado gothamlight">DE SOLUCIONES</h2>
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h5 className="text-left gothammedium">
                PROVEEDOR
              </h5>
              <h5 className="text-left subrayado gothamlight">DE SOLUCIONES</h5>
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
              <h2 className="text-left gothammedium">
                CONOCÉ
              </h2>
              <h2 className="text-left subrayado gothamlight">NUESTROS EQUIPOS</h2>
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h5 className="text-left gothammedium">
                CONOCÉ
              </h5>
              <h5 className="text-left subrayado gothamlight">NUESTROS EQUIPOS</h5>
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
              <h2 className="text-left gothammedium">
                CONOCÉ
              </h2>
              <h2 className="text-left subrayado gothamlight">NUESTROS SERVICIOS</h2>
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h5 className="text-left gothammedium">
                CONOCÉ
              </h5>
              <h5 className="text-left subrayado gothamlight">NUESTROS SERVICIOS</h5>
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
              <h2 className="text-left gothammedium">
                ESTAMOS
              </h2>
              <h2 className="text-left subrayado gothamlight">PARA AYUDARTE</h2>
            </Nav.Link>
            <Nav.Link
              exact={true}
              href="/equipos"
              className="nav-link text-light nomd nolg noxl p-0 m-0"
            >
              <h5 className="text-left gothammedium">
                ESTAMOS
              </h5>
              <h5 className="text-left subrayado gothamlight">PARA AYUDARTE</h5>
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
