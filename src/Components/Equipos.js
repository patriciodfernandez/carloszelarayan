import React from "react";
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

const Equipos = () => {
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
      <h1 className="text-center m-5">
        NUESTROS <b>EQUIPOS</b>
      </h1>
      <h2 className="text-center m-5">
        RADIOGRAFÍA <b className="rojo">DIRECTA</b>
      </h2>
      <Carousel className="noxs nosm">
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
      <h2 className="text-center my-5 pt-5">
        RADIOGRAFÍA <b className="rojo">COMPUTARIZADA</b>
      </h2>
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
    </div>
  );
};

export default Equipos;
