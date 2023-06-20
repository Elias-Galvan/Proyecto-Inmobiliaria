import React, { useState } from "react";
import "../assets/css/Contacto.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Mailer = () => {
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const navigate  =  useNavigate();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const sendEmail = (event) => {
    event.preventDefault();

    if (!data.user_name || !data.user_email || !data.user_message) {
      Swal.fire("Error!!", "Lo lamento, algun campo esta incorrecto.", "error");
      return;
    }
    emailjs
      .sendForm(
        "service_24ytlmh",
        "template_heg3rjd",
        event.target,
        "miNfolIkLrzbFAL8u"
      )
      .then((response) => Swal.fire("Ok..","Mensaje enviado!", "success"));

      navigate("/")
  };

  return (
    <div className="div-form container-fluid">
      <form className="form-mail" onSubmit={sendEmail}>
        <h1 className="title-form">Contactanos</h1>
        <label id="lab-cont">Nombre</label>
        <input
          type="text"
          name="user_name"
          value={data.user_name}
          onChange={handleChange}
        />
        <hr />

        <label id="lab-cont">Email</label>
        <input
          type="email"
          name="user_email"
          value={data.user_email}
          onChange={handleChange}
        />
        <hr />

        <label id="lab-cont">Mensaje</label>
        <textarea
          name="user_message"
          id="textarea-cont"
          cols="30"
          rows="10"
          value={data.user_message}
          onChange={handleChange}
        ></textarea>
        <hr />
        <button className="buttonContacto">Enviar</button>
      </form>
    </div>
  );
};
