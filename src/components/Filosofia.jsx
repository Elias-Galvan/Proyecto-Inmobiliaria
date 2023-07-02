import React from "react";
import "../assets/css/Filosofia.css";

export default function Filosofia() {
  return (
    <div className="container-Filosofia" id="cont-filo">
      <h1>Filosofia</h1>
      <h4>Duo Gym es para todos y esa es nuestra filosofia</h4>

      <div className="lista">
        <div className="col-md-4">
          <ul>
            <li> En este gimnasio no juzgamos.</li>
            <li>
              {" "}
              Somos una sociedad diversa y tenemos una cultura de inclusion.
            </li>
            <li> Nada es mucho ni muy poco.</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <li>Buscamos animarte, entusiasmarte y entretenerte.</li>
            <li>Hay lugar para todos.</li>
            <li>No existen miradas que desaprueben.</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <li>No hay un solo tipo. Ni una sola razón. Ni un solo camino.</li>
            <li>
              Cualquier persona que nos elija para alcanzar sus objetivos y
              respete al prójimo será bienvenida.
            </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
