import React, { useRef } from "react";
import "./Card.css";
import { defaultUrl } from "../../../../store/action/types";

const Card = ({ precio, nombre, descripcion, imagen }) => {
  const footerRef = useRef(null);
  const handleMouseOver = () => {
    footerRef.current.style.visibility = "visible";
    footerRef.current.style.opacity = 1;
  };

  const handleMouseDown = () => {
    footerRef.current.style.visibility = "hidden";
    footerRef.current.style.opacity = 0;
  };
  return (
    <div
      className="pepe"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseDown}
    >
      <div className="descuento">x</div>
      <div className="imgContainer">
        <img
          src={`${defaultUrl}${imagen}`}
          width="150"
          height="150"
          alt="img"
        />
      </div>
      <h3 className="titleCard">{nombre}</h3>
      <p className="descriptionCard">{descripcion}</p>
      <div className="cardFooter" ref={footerRef}>
        <div className="price">${precio}</div>
        <div className="buttonPrice">Comprar</div>
      </div>
    </div>
  );
};

export default Card;
