import React from "react";
import almacenamiento from "../assets/Servicios_01.jpg"
import servidores from "../assets/Servicios_02.jpg"
import digitalizadores from "../assets/Servicios_03.jpg"

const Servicios = () => {
  return (
    <div className="container text-center">
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
