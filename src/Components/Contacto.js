import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import captura from "../assets/Captura.JPG";
import Slider4 from "../assets/images/slider_4.jpg";

const Contacto = () => {
  const [validated, setValidated] = useState(false);
  const [nombreConsultor, setNombreConsultor] = useState("");
  const [telefonoConsultor, setTelefonoConsultor] = useState("");
  const [emailConsultor, setEmailConsultor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    //Validacion de los campos requeridos
    if (form.checkValidity() === false) {
      setError(true);
      setValidated(true);
      e.stopPropagation();
      return;
    } else {
      setError(false);
      setValidated(true);
      //Guardamos los datos en un objeto
      const suscriptor = {
        nombreConsultor: nombreConsultor,
        telefonoConsultor: telefonoConsultor,
        emailConsultor: emailConsultor,
      };
      //Enviamos los datos a backend - NO IMPLEMENTADO
      emailjs
        .sendForm(
          "allservice",
          "template_MeHMf7Af",
          e.target,
          "user_nywctwSrox7g34oEeJ7uY"
        )
        .then(
          (result) => {
            Swal.fire(
              "Enhorabuena!",
              "Tu consulta fue enviada correctamente.",
              "success"
            );
            e.target.reset();
            setValidated(false);
          },
          (error) => {
            Swal.fire(
              "Ups!",
              "Hubo un problema al enviar tu consulta. Por favor intentalo nuevamente.",
              "error"
            );
          }
        );

      return suscriptor;
    }
  };

  return (
    <div>
      <div className="sliderpadre">
        <img src={Slider4} className="w-100"></img>
        <div className="carousel-caption text-light">
          <div className="nomd nolg noxl">
            <h4 className="text-left">
              <b>ESTAMOS</b>
            </h4>
            <h4 className="text-left subrayado">PARA AYUDARTE</h4>
          </div>
          <div className="noxs nosm">
            <h2 className="text-left">
              <b>ESTAMOS</b>
            </h2>
            <h2 className="text-left subrayado">PARA AYUDARTE</h2>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-md-5 gris">
          <img
            src={captura}
            alt=""
            className="w-40 mt-5 noxs nosm"
            height="50px"
          ></img>
          <div className="p-5 mt-4 margencontactoo">
            <h4 className="mb-3">
              <FontAwesomeIcon
                className="mr-2 azul"
                icon={faPhoneAlt}
                size="1x"
              />
              381 640-7353
            </h4>
            <a
              href="https://wa.me/5493815231792"
              target="_blank"
              rel="noopener noreferrer"
              className="letrasfooter text-dark"
            >
              <h4 className="mb-3 textButton">
                <FontAwesomeIcon
                  className="mr-2 azul"
                  icon={faWhatsapp}
                  size="1x"
                />
                381 640-7353
              </h4>
            </a>
            <a
              href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <h4 className="mb-3 textButton">
                <FontAwesomeIcon
                  className="mr-2 azul"
                  icon={faMapMarkerAlt}
                  size="1x"
                />
                <b>Castelli 69</b>
                <br></br> San Miguel de Tucumán<br></br> Tucumán | T4000
              </h4>
            </a>
            <h4 className="mb-3">
              <FontAwesomeIcon className="mr-2 azul" icon={faAt} size="1x" />
              info@crz.com.ar
            </h4>
          </div>
        </div>
        <div className="col-md-7 p-5">
          <h2 className="margencontacto">
            <b>CONTACTO</b>
          </h2>
          <div className="mt-4 formcontacto">
            <h4 className="mb-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-1 azul"
                size="1x"
              ></FontAwesomeIcon>
              <b>ENVIANOS TU CONSULTA</b>
            </h4>
            {error ? (
              <Alert variant={"warning"}>
                Todos los campos son obligatorios, por favor asegúrese de
                ingresar datos válidos
              </Alert>
            ) : null}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="fullName">
                <Form.Label className="lead">Apellido y Nombre</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setNombreConsultor(e.target.value)}
                  type="text"
                  placeholder=""
                  name="user_name"
                  className="forms"
                />
              </Form.Group>
              <Form.Group controlId="direccion"></Form.Group>
              <Form.Group controlId="teléfono">
                <Form.Label className="lead">Teléfono</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setTelefonoConsultor(e.target.value)}
                  type="number"
                  placeholder=""
                  className="forms"
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label className="lead">Email</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setEmailConsultor(e.target.value)}
                  type="email"
                  placeholder=""
                  name="user_email"
                  className="forms"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="lead">
                  Escribe tu consulta aquí
                </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  className="forms"
                />
              </Form.Group>
              <Form.Text className="text-muted">
                *No compartiremos estos datos con nadie
              </Form.Text>
              <div className="text-right">
                <Button
                  type="Submit"
                  id="botonenviar"
                  className="text-light mt-2 btn-lg"
                >
                  <b>ENVIAR</b>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {/* DONDE ESTAMOS */}
      <div className="row no-gutters my-5">
        <div className="col-md-4"></div>
        <h2 className="col-md-4 text-center">
          ¿DONDE <b>ESTAMOS?</b>
        </h2>
        <div className="col-md-4 text-right pl-5">
          <img
            src={captura}
            alt=""
            className="w-100 nosm noxs"
            height="50px"
          ></img>
        </div>
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
        {/* MD */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5290735114772!2d-65.23711038529646!3d-26.823119595933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5ee0a47ceb%3A0x8e015b8db3a3570a!2sCastelli%2069%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1613153832755!5m2!1ses!2sar"
          className="mb-5 nolg noxl nosm noxs w-100 px-4"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5290735114772!2d-65.23711038529646!3d-26.823119595933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5ee0a47ceb%3A0x8e015b8db3a3570a!2sCastelli%2069%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1613153832755!5m2!1ses!2sar"
          className="mb-5 nolg noxl nomd w-80 px-4"
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

export default Contacto;
