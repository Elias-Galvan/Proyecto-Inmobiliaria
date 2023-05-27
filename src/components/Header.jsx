import "../assets/css/Header.css";
import React from "react";
import iconoHeader from "../assets/statics/icono.png";
import { Link } from "react-router-dom";

export default function Header() {
  const auth = "logeado";
  const rol = "ADMIN";
  
  return (
    <div className="container-header">
      <Link to={"/"}>
        <img src={iconoHeader}></img>
        <h6>Duo Gym</h6>
      </Link>
      <ul>
        <li>
          <Link to={"/registro"}>Sumate Ya</Link>
        </li>
        <li>
          <Link to={"/actividades"}>Actividades</Link>
        </li>

        <li>
          <Link to={"/contacto"}>Contacto</Link>
        </li>
        <li>
          <Link to={"/ayuda"}>Ayuda</Link>
        </li>

        {/* {
          rol === 'ADMIN' 
          ?  <li>
              <Link to={"/ayuda"}>Ayuda</Link>
             </li>
          :  <li>
                <Link to={"/ayuda"}>Ayuda</Link>
              </li>
        } */}


        <li>
          <Link to={""}>Tienda</Link>
        </li>

        {auth === "logeado" ? (
          <Link to={"/login"} className="action-btn">
            Inicia sesion
          </Link>
        ) : (
          <Link href="/login" className="action-btn">
            Cerrar sesion
          </Link>
        )}
      </ul>
    </div>
  );
}
