import React from "react";
import imgEmp from "../assets/statics/img-empresa.webp";
import "../assets/css/LaEmpresa.css";
export default function LaEmpresa() {
  return (
    <>
      <div className="emp-container">
        <div className="img-container">
          <img className="imgEmp" src={imgEmp} alt="" />
        </div>

        <div className="DetalleEmp">
          <h4>Mision</h4>
          <p>
            Brindar un servicio profesional y responsable de intermediación en
            la compra, venta y alquiler de inmuebles, buscando satisfacer al
            cliente atendiendo, comprendiendo y trabajando sobre sus necesidades
            inmobiliarias específicas, y aportando valor a los inversores en
            bienes raíces
          </p>
          <h4>Vision</h4>
          <p>
            Ser una empresa líder en servicios inmobiliarios, referente absoluto
            de profesionalismo y atención personalizada.
          </p>
          <h4>Valores</h4>

          <ul>
            <li>Compromiso</li>
            <li>Integridad</li>
            <li>Profesionalismo</li>
          </ul>
        </div>
      </div>
    </>
  );
}
