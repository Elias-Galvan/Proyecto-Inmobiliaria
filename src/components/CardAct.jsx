import React from "react";
import "../assets/css/Actividades.css";
import { Link } from "react-router-dom";
import { defaultUrl } from "../store/action/types";

export default function Card({ nombre, imagen, descripcion }) {
  return (
    <div className="card text-center bg-dark">
      <div className="overflow">
        <img
          src={`${defaultUrl}${imagen}`}
          alt="imagen actividad"
          className="card-img-top"
          width="150"
          height="250"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title ">{nombre}</h4>
        <p className="card-text text-secondary">{descripcion}</p>
        <Link to="/desc-act" className="btn btn-secondary rounded-0">
          Ver mas...
        </Link>
      </div>
    </div>
  );
}
