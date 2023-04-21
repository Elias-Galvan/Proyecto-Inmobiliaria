import React from "react";
import "../assets/css/Emprendimientos.css";

export default function CardEmprendimiento({
  dir,
  imgUrl,
  titulo,
  adrress,
  descripcion,
  datos,
}) {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-5">
          <div className="pic">
            <img src={imgUrl} alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="card-derecha">
            <div className="prop-dir">
              <p>{dir}</p>{" "}
            </div>
            <div className="prop-adrress">{adrress}</div>
            <div className="prop-titulo">
              <h4>{titulo}</h4>
            </div>

            <div className="prop-descripcion">
              <p>{descripcion}</p>
            </div>
            <div className="prop-datos">
              <p>{datos}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
