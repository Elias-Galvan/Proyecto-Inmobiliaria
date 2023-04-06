import React from "react";
import "../assets/css/Footer.css";
import iconoHeader from "../assets/statics/icono.webp";
import phone from"../assets/statics/phone.png"
export default function Footer() {
 
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-md-3">
            
            <img src={iconoHeader} alt="" />
            
            <h6>Encontranos en</h6>
            <div className="tel">
            <img src={phone}style={{float:"left",height:"25px"}}></img>
            <h6>7538-6467</h6>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Venta y Tasaciones de propiedades. Inmobiliaria</h5>
          </div>
          <div className="col-md-3">
            <h6>Seguinos en</h6>
          </div>
          <div className="col-md-3">
            <h6>¿Qué estás buscando? </h6>
            <ul>
              <li>Terrenos</li>
              <li>Departamentos</li>
              <li>Casas</li>
              <li>Locales</li>
            </ul>
          </div>
        </div>
        <h6 className="footer-descripcion">
          Todas las medidas enunciadas son meramente orientativas, las medidas
          exactas serán las que se expresen en el respectivo título de propiedad
          de cada inmueble. Todas las fotos, imagenes y videos son meramente
          ilustrativos y no contractuales. Los precios enunciados son meramente
          orientativos y no contractuales.. © 2023 Lopez Balaguer Propiedades.
        </h6>
      </footer>
    </>
  );
}
