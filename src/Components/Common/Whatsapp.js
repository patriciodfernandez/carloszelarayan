import React from "react";
import logowp from "../../assets/wp.png";

const Whatsapp = () => {
  return (
    <div>
      <div id="whatsapp">
        <a
          href="https://wa.me/5493815854257"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            height="60px"
            width="60px"
            src={logowp}
            alt="Logo de whatsapp, presione para redireccionar a la aplicacion"
          />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
