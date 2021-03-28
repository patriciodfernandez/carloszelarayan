import React from "react";
import captura from "../../assets/Captura.JPG";
import afga from "../../assets/Quienes_Somos.jpg";
import afgamd from "../../assets/Quienes_Somosmd.jpg";
import infraestructura from "../../assets/Infraestructura_IT.jpg";
import infraestructuramd from "../../assets/Infraestructura_ITmd.jpg";
import logo1 from "../../assets/images/Logo_01.png";
import logo2 from "../../assets/images/Logo_02.png";
import logo3 from "../../assets/images/Logo_03.png";
import logo4 from "../../assets/images/Logo_04.png";
import logo5 from "../../assets/images/Logo_05.png";

const QuienesSomos = () => {
  return (
    <div>
      {/* QUIENES SOMOS */}
      <div className="d-flex titulos nuestrosequipos">
        <img
          src={captura}
          alt=""
          className="nosm noxs my-0 capturatitulosleft"
          height="50px"
        ></img>
        <h2 className="text-center nosm noxs">
          QUIENES <b>SOMOS</b>
        </h2>
        <h3 className="text-center nomd nolg noxl">
          QUIENES <b>SOMOS</b>
        </h3>
      </div>
      <section className="row no-gutters gris">
        <div className="col-md-6 col-sm-12">
          <img src={afga} className="w-100 nomd"></img>
          <img src={afgamd} className="w-100 noxs nosm nolg noxl"></img>
        </div>
        <div className="col-md-6 col-sm-12">
          <h5 className="p-5 mt-3">
            Somos líderes en tecnología de diagnóstico por imágenes, brindando
            servicios y soluciones IT a socios estratégicos de la región.
            Nuestra principal unidad de negocios es la comercialización de
            productos <b>AGFA Healthcare Imaging</b>.
          </h5>
        </div>
      </section>
      {/* INFRAESTRUCTURA */}
      <div className="d-flex titulos nuestrosequipos">
        <h2 className="text-center nosm noxs">
          INFRAESTRUCTURA <b>IT</b>
        </h2>
        <img
          src={captura}
          alt=""
          className="nosm noxs capturatitulosright"
          height="50px"
        ></img>
        <h3 className="text-center nomd nolg noxl">
          INFRAESTRUCTURA <b>IT</b>
        </h3>
      </div>
      <section className="row no-gutters gris mb-5">
        <div className="col-md-6 col-sm-12">
          <h5 className="p-5 mt-3">
            Contamos con una infraestructura de centros de datos con equipos de
            ultima generación, sistemas de alimentación ininterrumpidas y
            generadores para evitar perdida de servicio.{" "}
            <b>Monitoreo constante</b>.
          </h5>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={infraestructura} className="w-100 nomd"></img>
          <img
            src={infraestructuramd}
            className="w-100 noxs nosm nolg noxl"
          ></img>
        </div>
      </section>
      {/* ALGUNOS CLIENTES */}
      <section className="gris py-5 my-5">
        <div className="d-flex titulos nuestrosequipos">
          <img
            src={captura}
            alt=""
            className="nosm noxs capturatitulosleft"
            height="50px"
          ></img>
          <h2 className="text-center nosm noxs algunosclients">
            ALGUNOS DE NUESTROS <b>CLIENTES</b>
          </h2>
          <h3 className="text-center nomd nolg noxl">
            ALGUNOS DE NUESTROS <b>CLIENTES</b>
          </h3>
        </div>
        <div className="row no-gutters mb-5 nosm noxs">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <img src={logo1} className="w-100" alt="logo"></img>
          </div>
          <div className="col-md-2">
            <img src={logo2} className="w-100" alt="logo"></img>
          </div>
          <div className="col-md-2">
            <img src={logo3} className="w-100" alt="logo"></img>
          </div>
          <div className="col-md-2">
            <img src={logo4} className="w-100" alt="logo"></img>
          </div>
          <div className="col-md-2">
            <img src={logo5} className="w-100" alt="logo"></img>
          </div>
          <div className="col-md-1"></div>
        </div>
        <section className="nomd nolg noxl">
          <div className="row no-gutters">
            <div className="col-6 pl-3 pr-0">
              <img src={logo1} className="w-100" alt="logo"></img>
            </div>
            <div className="col-6 pl-0 pr-3">
              <img src={logo2} className="w-100" alt="logo"></img>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-6 pl-3 pr-0">
              <img src={logo3} className="w-100" alt="logo"></img>
            </div>
            <div className="col-6 pl-0 pr-3">
              <img src={logo4} className="w-100" alt="logo"></img>
            </div>
          </div>
          <div className="text-center">
            <img src={logo5} className="" alt="logo"></img>
          </div>
        </section>
        <h2 className="text-center px-5 mb-5">
          Trabajamos con más de <b className="azul">350 clientes</b> en todo el
          país
        </h2>
      </section>
      {/* DONDE ESTAMOS */}
      <div className="d-flex titulos nuestrosequipos">
        <h2 className="text-center nosm noxs">
          ¿DONDE <b>ESTAMOS?</b>
        </h2>
        <img
          src={captura}
          alt=""
          className="nosm noxs capturatitulosright"
          height="50px"
        ></img>
        <h3 className="text-center nomd nolg noxl">
          ¿DONDE <b>ESTAMOS?</b>
        </h3>
      </div>
      <div className="text-center m-0 p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5290735114772!2d-65.23711038529646!3d-26.823119595933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5ee0a47ceb%3A0x8e015b8db3a3570a!2sCastelli%2069%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1613153832755!5m2!1ses!2sar"
          className="mb-5 nomd nosm noxs"
          width="600"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5290735114772!2d-65.23711038529646!3d-26.823119595933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5ee0a47ceb%3A0x8e015b8db3a3570a!2sCastelli%2069%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1613153832755!5m2!1ses!2sar"
          className="mb-5 nolg noxl nosm noxs w-100 px-5"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5290735114772!2d-65.23711038529646!3d-26.823119595933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5ee0a47ceb%3A0x8e015b8db3a3570a!2sCastelli%2069%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1613153832755!5m2!1ses!2sar"
          className="mb-5 nolg noxl nomd w-100 px-4"
          height="350"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default QuienesSomos;
