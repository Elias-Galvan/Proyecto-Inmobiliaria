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
            <a href="/registro">Sumate Ya</a>
          </li>
          <li>
            <a href="/actividades">Actividades</a>
          </li>
        
         
          <li>
            <a href="/contacto">Contacto</a>
          </li>
          <li>
            <a href="/ayuda">Ayuda</a>
          </li>
          <li>
            <a href="">Tienda</a>
          </li>
         
          <a href="/login" className="action-btn">
            Inicia sesion
          </a>
        </ul>
        
       
      </div>
    </>
  );
}
