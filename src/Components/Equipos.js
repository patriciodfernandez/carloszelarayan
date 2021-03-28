import React, { useState, handleSelect, index, render } from "react";
import Carousel from "react-bootstrap/Carousel";
import rcompu1 from "../assets/images/RCompu_01.jpg";
import rcompu2 from "../assets/images/RCompu_02.jpg";
import rcompu3 from "../assets/images/RCompu_03.jpg";
import rcompu4 from "../assets/images/RCompu_04.jpg";
import rcompu5 from "../assets/images/RCompu_05.jpg";
import rdirecta1 from "../assets/images/RDirecta_01.jpg";
import rdirecta2 from "../assets/images/RDirecta_02.jpg";
import rdirecta3 from "../assets/images/RDirecta_03.jpg";
import rdirecta4 from "../assets/images/RDirecta_04.jpg";
import rdirecta5 from "../assets/images/RDirecta_05.jpg";
import rdirecta6 from "../assets/images/RDirecta_06.jpg";
import rdirecta7 from "../assets/images/RDirecta_07.jpg";
import Slider2 from "../assets/images/slider_2.jpg";
import captura from "../assets/Captura.JPG";
import capturar from "../assets/Capturar.JPG";
import afga from "../assets/images/Agfa_01.png";
import RDire01 from "../assets/small/RDirecta_01.jpg";
import RDire02 from "../assets/small/RDirecta_02.jpg";
import RDire03 from "../assets/small/RDirecta_03.jpg";
import RDire04 from "../assets/small/RDirecta_04.jpg";
import RDire05 from "../assets/small/RDirecta_05.jpg";
import RDire06 from "../assets/small/RDirecta_06.jpg";
import RDire07 from "../assets/small/RDirecta_07.jpg";
import RDire1 from "../assets/small/RDirecta_1.jpg";
import RDire2 from "../assets/small/RDirecta_2.jpg";
import RDire3 from "../assets/small/RDirecta_3.jpg";
import RDire4 from "../assets/small/RDirecta_4.jpg";
import RDire5 from "../assets/small/RDirecta_5.jpg";
import RDire6 from "../assets/small/RDirecta_6.jpg";
import RDire7 from "../assets/small/RDirecta_7.jpg";

const Equipos = () => {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  }
  return (
    <div className="mb-5 pb-5">
      <div className="sliderpadre">
        <img src={Slider2} className="w-100"></img>
        <div className="carousel-caption text-light">
          <div className="nomd nolg noxl">
            <h4 className="text-left">
              <b>CONOCÉ</b>
            </h4>
            <h4 className="text-left subrayado d-flex">NUESTROS EQUIPOS</h4>
          </div>
          <div className="noxs nosm">
            <h2 className="text-left">
              <b>CONOCÉ</b>
            </h2>
            <h2 className="text-left subrayado">NUESTROS EQUIPOS</h2>
          </div>
        </div>
      </div>
      {/* FIN PORTADA */}
      <div className="d-flex titulos nuestrosequipos">
        <img
          src={captura}
          alt=""
          className="nosm noxs my-0 capturatitulosleft"
          height="50px"
        ></img>
        <h1 className="text-center algunosclients nosm noxs">
          NUESTROS <b>EQUIPOS</b>
        </h1>
        <h3 className="text-center nomd nolg noxl">
          NUESTROS <b>EQUIPOS</b>
        </h3>
      </div>
      {/* ----- */}
      <h2 className="text-center mx-5 mb-5 noxs nosm">
        RADIOGRAFÍA <b className="rojo">DIRECTA</b>
      </h2>
      <h4 className="text-center my-3 nomd nolg noxl">
        RADIOGRAFÍA <b className="azul">DIRECTA</b>
      </h4>
      <Carousel
        className="noxs nosm"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={rdirecta1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rdirecta2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rdirecta3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rdirecta4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rdirecta5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rdirecta6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rdirecta7} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {/* RADIO DIRECTA SMALL */}
      <div className="nomd nolg noxl">
        <div className="container d-flex equiposchicos p-3">
          <h4 className="azul">
            <b>DX-D 100 +</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire01} alt="DX-D 100 +" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire1} alt="DX-D 100 + INFO" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="azul">
            <b>DX-D 300</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire02} alt="DX-D 300" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire2} alt="DX-D 300 INFO" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="azul">
            <b>DR 400</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire03} alt="DR 400" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire3} alt="DR 400 INFO" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="azul">
            <b>DX-D 400</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire04} alt="DX-D 400" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire4} alt="DX-D 400 INFO" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="azul">
            <b>DR 600</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire05} alt="DR 600" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire5} alt="DR 600 INFO" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="azul">
            <b>DX-D 600</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire06} alt="DX-D 600" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire6} alt="DX-D 600 INFO" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="azul">
            <b>DX-D 800</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire07} alt="DX-D 800" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire7} alt="DX-D 800 INFO" />
          </Carousel.Item> */}
        </Carousel>
      </div>
      {/* FIN RADIODIRECTA SMALL*/}
      <h2 className="text-center my-5 pt-5 noxs nosm">
        RADIOGRAFÍA <b className="rojo">COMPUTARIZADA</b>
      </h2>
      <h4 className="text-center my-5 nomd nolg noxl">
        RADIOGRAFÍA <b className="rojo">COMPUTARIZADA</b>
      </h4>
      <Carousel className="noxs nosm">
        <Carousel.Item>
          <img className="d-block w-100" src={rcompu1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rcompu2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rcompu3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rcompu4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={rcompu5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {/* RADIO COMPU SMALL */}
      <div className="nomd nolg noxl">
        <div className="container d-flex equiposchicos p-3">
          <h4 className="rojo">
            <b>DX-M</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire01} alt="DX-M" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire1} alt="DX-M INFO" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="rojo">
            <b>CR 30-Xm</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire02} alt="CR 30-Xm" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire2} alt="CR 30-Xm info" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="rojo">
            <b>CR 15-m</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire03} alt="CR 15-m" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire3} alt="CR 15-m info" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="rojo">
            <b>CR 12-X</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire04} alt="CR 12-X" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire4} alt="CR 12-X info" />
          </Carousel.Item> */}
        </Carousel>
        <div className="container d-flex equiposchicos p-3">
          <h4 className="rojo">
            <b>CR 10-X</b>
          </h4>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={RDire05} alt="CR 10-X" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={RDire5} alt="CR 10-X info" />
          </Carousel.Item> */}
        </Carousel>
      </div>
      {/* FIN RADIO COMPU SMALL */}
    </div>
  );
  render(<ControlledCarousel />);
};

export default Equipos;
