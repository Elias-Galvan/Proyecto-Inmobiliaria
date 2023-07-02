import React, { useRef } from "react";
import "./Card.css";
import { defaultUrl } from "../../../../store/action/types";

const Card = ({ id, precio, nombre, descripcion, imagen }) => {
  const footerRef = useRef(null);
  const handleMouseOver = () => {
    footerRef.current.style.visibility = "visible";
    footerRef.current.style.opacity = 1;
  };

  const handleMouseDown = () => {
    footerRef.current.style.visibility = "hidden";
    footerRef.current.style.opacity = 0;
  };

  const agregarCarrito = (id) => console.log(id);

  return (
    <div
      className="pepe"
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseDown}
    >
      <div className="divcont">
        <button className="btn btn-warning">Editar</button>
        <button className="btn btn-danger">X</button>
      </div>
      <div className="imgContainer">
        <img
          src={`${defaultUrl}${imagen}`}
          //src={imagen} PRUEBA
          width="150"
          height="150"
          alt="img"
        />
      </div>
      <h3 className="titleCard">{nombre}</h3>
      <div className="containerDescription">
        <p className="descriptionCard">{descripcion}</p>
      </div>

      <div className="cardFooter" /*ref={footerRef}*/>
        <div className="price">${precio}</div>
        <button
          className="button-64 btnCustom"
          onClick={() => {
            agregarCarrito(id);
          }}
        >
          <span className="text spanCustom"> Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
