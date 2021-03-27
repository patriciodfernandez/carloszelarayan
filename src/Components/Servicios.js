import React from "react";
import almacenamiento from "../assets/Servicios_01.jpg";
import servidores from "../assets/Servicios_02.jpg";
import digitalizadores from "../assets/Servicios_03.jpg";
import Slider3 from "../assets/images/slider_3.jpg";

const Servicios = () => {
  return (
    <div className="mb-5 pb-5 text-center">
      <div className="sliderpadre">
        <img src={Slider3} className="w-100"></img>
        <div className="carousel-caption text-light">
          <div className="nomd nolg noxl">
            <h4 className="text-left">
              <b>CONOCÉ</b>
            </h4>
            <h4 className="text-left subrayado">NUESTROS SERVICIOS</h4>
          </div>
          <div className="noxs nosm">
            <h2 className="text-left">
              <b>CONOCÉ</b>
            </h2>
            <h2 className="text-left subrayado">NUESTROS SERVICIOS</h2>
          </div>
        </div>
      </div>
      <h1 className="text-center m-5">
        NUESTROS <b>SERVICIOS</b>
      </h1>
      <img src={almacenamiento} className="w-100 mb-5 pb-3"></img>
      <img src={servidores} className="w-100 mb-5 pb-3"></img>
      <img src={digitalizadores} className="w-100 mb-5 pb-3"></img>
    </div>
  );
};

export default Servicios;
