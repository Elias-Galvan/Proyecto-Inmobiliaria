import "../assets/css/Header.css";
import React from "react";
import iconoHeader from "../assets/statics/icono.png";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
      <div className="container-header">
        <a href="/">
          <img src={iconoHeader}></img>
          <h6>Duo Gym</h6>
        </a>
        <ul>
          <li>
            <a href="/Registro">Sumate Ya</a>
          </li>
          <li>
            <a href="">Actividades</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="#cont-filo">Filosofia</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">Tienda</a>
          </li>
         
          <a href="/Login" className="action-btn">
            Inicia sesion
          </a>
        </ul>
        
       
      </div>
    </>
  );
}
