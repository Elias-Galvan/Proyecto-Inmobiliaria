import React from "react";
import "../assets/css/Actividades.css";

export default function Card({
  dir,
  imgUrl,
  titulo,
  adrress,
  descripcion,
  datos,
}) {
  return (
    <div className="card">
      <img src={imgUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text text-secondary">asdasdasdasdasdasdasdasd</p>
      </div>
    </div>
  );
}
