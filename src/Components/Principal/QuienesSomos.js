import React from "react";

const QuienesSomos = () => {
  return (
    <div>
      {/* QUIENES SOMOS */}
      <div className="row no-gutters my-5">
        <div className="col-md-4 pr-5 my-0 fondogradiente"></div>
        <h2 className="col-md-4 text-center">QUIENES <b>SOMOS</b></h2>
        <div className="col-md-4"></div>
      </div>
      <section className="row no-gutters gris">
        <div className="col-md-6 col-sm-12">
          <img></img>
        </div>
        <div className="col-md-6 col-sm-12">
          <p className="p-5 m-0">
            Somos líderes en tecnología de diagnóstico por imágenes, brindando
            servicios y soluciones IT a socios estratégicos de la región.
            Nuestra principal unidad de negocios es la comercialización de
            productos <b>AGFA Healthcare Imaging</b>.
          </p>
        </div>
      </section>
      {/* INFRAESTRUCTURA */}
      <div className="row no-gutters my-5">
        <div className="col-md-4"></div>
        <h2 className="col-md-4 text-center">INFRAESTRUCTURA <b>IT</b></h2>
        <div className="col-md-4 fondogradiente"></div>
      </div>
      <section className="row no-gutters gris">
        <div className="col-md-6 col-sm-12">
          <p className="p-5 m-0">
            Contamos con una infraestructura de centros de datos con equipos de
            ultima generación, sistemas de alimentación ininterrumpidas y
            generadores para evitar perdida de servicio. <b>Monitoreo constante</b>.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img></img>
        </div>
      </section>
      {/* ALGUNOS CLIENTES */}
      <section className="gris py-5 mt-5">
        <div className="row no-gutters my-5">
          <div className="col-md-4 fondogradiente"></div>
          <h2 className="col-md-4 text-center">ALGUNOS DE NUESTROS <b>CLIENTES</b></h2>
          <div className="col-md-4"></div>
        </div>
        <section className="row no-gutters">
          <div className="col-md-2 col-sm-12"></div>
          <div className="col-md-2 col-sm-12">
            <img></img>
          </div>
          <div className="col-md-2 col-sm-12">
            <img></img>
          </div>
          <div className="col-md-2 col-sm-12">
            <img></img>
          </div>
          <div className="col-md-2 col-sm-12">
            <img></img>
          </div>
          <div className="col-md-2 col-sm-12"></div>
        </section>
        <h2 className="text-center px-5">
          Trabajamos con más de <b className="azul">350 clientes</b> en todo el país
        </h2>
      </section>
      {/* DONDE ESTAMOS */}
      <div className="row no-gutters my-5">
        <div className="col-md-4"></div>
        <h2 className="col-md-4 text-center">¿DONDE <b>ESTAMOS?</b></h2>
        <div className="col-md-4 fondogradiente"></div>
      </div>
      <div className="text-center container">
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
          className="mb-5 nolg noxl nosm noxs w-100"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5290735114772!2d-65.23711038529646!3d-26.823119595933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5ee0a47ceb%3A0x8e015b8db3a3570a!2sCastelli%2069%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1613153832755!5m2!1ses!2sar"
          className="mb-5 nolg noxl nomd w-100"
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
