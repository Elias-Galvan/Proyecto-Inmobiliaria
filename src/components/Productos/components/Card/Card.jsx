import React, { useRef } from "react";
import "./Card.css";
const Card = ({ srcImage, title }) => {
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
      <div className="descuento">30%</div>
      <div className="imgContainer">
        <img src={srcImage} width="150" height="150" alt="img" />
      </div>
      <h3 className="titleCard">{title}</h3>
      <div className="cardFooter" ref={footerRef}>
        <div className="price">$11234</div>
        <div className="buttonPrice">Comprar</div>
      </div>
    </div>
  );
};

export default Card;
