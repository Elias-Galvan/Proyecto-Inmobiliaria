import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/altaUsuario.css"

const AltaUsuario = () => {
  return (
    <>
      <div className="au">
        <h1>Registro exitoso</h1>
        <Link to={"/"}>Volver</Link>
      </div>
    </>
  );
};

export default AltaUsuario;
