import React from "react";
import "../assets/css/Actividades.css";
import { Link } from "react-router-dom";

export default function Card({ imgUrl, titulo, descripcion }) {
  return (
    <div className="card text-center bg-dark">
      <div className="overflow">
        <img src={imgUrl} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title ">{titulo}</h4>
        <p className="card-text text-secondary">{descripcion}</p>
        <Link
          to="/desc-act"
          target="_blank"
          className="btn btn-secondary rounded-0"
          rel="noreferrer"
        >
          Ver mas...
        </Link>
      </div>
    </div>
  );
}
