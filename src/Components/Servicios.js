import React from "react";
import almacenamiento from "../assets/Servicios_01.jpg";
import servidores from "../assets/Servicios_02.jpg";
import digitalizadores from "../assets/Servicios_03.jpg";
import Slider3 from "../assets/images/slider_3.jpg";
import captura from "../assets/Captura.JPG";

const Servicios = () => {
  return (
    <div className="pb-5 text-center">
      <div className="sliderpadre">
        <img src={Slider3} className="w-100"></img>
        <div className="carousel-caption text-light">
          <div className="nomd nolg noxl">
            <h5 className="text-left gothammedium">
              CONOCÉ
            </h5>
            <h5 className="text-left subrayado gothamlight">NUESTROS SERVICIOS</h5>
          </div>
          <div className="noxs nosm">
            <h2 className="text-left gothammedium">
              CONOCÉ
            </h2>
            <h2 className="text-left subrayado gothamlight">NUESTROS SERVICIOS</h2>
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
        <h1 className="text-center algunosclients nosm noxs gothambook">
          NUESTROS <b className="gothambold">SERVICIOS</b>
        </h1>
        <h3 className="text-center nomd nolg noxl gothambook">
          NUESTROS <b className="gothambold">SERVICIOS</b>
        </h3>
      </div>

      <img src={almacenamiento} className="w-100 mb-5 pb-3"></img>
      <img src={servidores} className="w-100 mb-5 pb-3"></img>
      <img src={digitalizadores} className="w-100 mb-5 pb-3"></img>
    </div>
  );
};

export default Servicios;
