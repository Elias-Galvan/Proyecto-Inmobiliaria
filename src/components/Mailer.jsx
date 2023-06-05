import React from "react";
import "../assets/css/Contacto.css";
import emailjs from "@emailjs/browser";

export const Mailer = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_d5n5bte",
        "template_x2cqih8",
        event.target,
        "Zjo6mNYvNam9PYTZC"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="div-form">
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
          rows="10"
        ></textarea>
        <hr />
        <button className="buttonContacto">Enviar</button>
      </form>
    </div>
  );
};
