import React from "react";
import "../assets/css/Contacto.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Mailer = () => {
  const navigate = useNavigate();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_24ytlmh",
        "template_heg3rjd",
        event.target,
        "miNfolIkLrzbFAL8u"
      )
      .then((response) =>
        Swal.fire(
          "OK!!",
          "Tu mensaje fue enviado correctamente.",
          "success"
        ).then((result) => {
          if (result.isConfirmed) navigate("/");
        })
      )
      .catch((error) =>
        Swal.fire(
          "Error!!",
          "Ocurrio un problema al enviar tu mensaje, por favor intentelo más tarde",
          "error"
        ).then((result) => {
          if (result.isConfirmed) navigate("/");
        })
      );
  };

  return (
    <div className="div-form container-fluid">
      <form className="form-mail" onSubmit={sendEmail}>
        <h1 className="title-form">Contactanos</h1>
        <label id="lab-cont">Nombre</label>
        <input type="text" name="user_name" />
        <hr />

        <label id="lab-cont">Email</label>
        <input type="email" name="user_email" />
        <hr />

        <label id="lab-cont">Mensaje</label>
        <textarea
          name="user_message"
          id="textarea-cont"
          cols="30"
          rows="30"
        ></textarea>
        <hr />
        <button className="buttonContacto">Enviar</button>
      </form>
    </div>
  );
};
