import React from "react";
import "../assets/css/Footer.css";
import iconoHeader from "../assets/statics/icono.png";
import logoface from "../assets/statics/logoface.png";
import logoinsta from "../assets/statics/logoinsta.png";
import phone from "../assets/statics/phone.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-md-3">
          <div className="logo">
            <img src={iconoHeader} style={{ Color: "white" }} alt="" />
            <h5>Duo Gym</h5>
          </div>

          <h6>Comunicate con nosotros</h6>
          <div className="tel">
            <img src={phone} id="phone" alt="phone" />
            <h6 id="numtel">7538-6467</h6>
          </div>
        </div>
        <div className="col-md-3">
          <h5>Nos encontramos en:</h5>
          <p>Isabel la Catolica 1978</p>
          <p>Ciudad Evita</p>
        </div>
        <div className="col-md-3">
          <h6>Seguinos en</h6>
          <div className="container-iconos">
            <Link to="">
              <img src={logoface} alt="logo-face" />
            </Link>
            <Link to="">
              <img src={logoinsta} alt="logo-insta" />
            </Link>
          </div>
        </div>
        <div className="col-md-3">
          <h6>FILOSOFIA </h6>
          <ul>
            <li>Hay lugar para todos.</li>
            <li>no juzgamos.</li>
            <li>No existen miradas que desaprueben.</li>
          </ul>
        </div>
        <hr />
      </div>

      <h6 className="footer-descripcion">
        En DuoGym cuidamos tu salud, por eso te recordamos que tu apto médico es
        indispensable al momento de iniciar una actividad física (leyes nº 139 y
        12329). Copyright © 2022 DUOGYM. Todos los derechos reservados.
      </h6>
    </footer>
  );
}
