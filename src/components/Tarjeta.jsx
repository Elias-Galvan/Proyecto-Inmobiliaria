import React from "react";
import "../assets/css/Card.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Tarjeta({ title, imageUrl, body }) {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="pic">
            <img src={imageUrl} className="img-fluid" alt="" />
          </div>
          <div className="content">
            <p> Departamento en venta en ciudad evita </p>
            <p>El tacuari al 4200</p>
            <hr />
            <a href="" className="btn btn-primary">
              Comprar
            </a>
          </div>
        </div>
      </div>

      

      
    </div>
  );
}
