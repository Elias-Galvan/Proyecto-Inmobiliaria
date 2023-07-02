import React, { useContext } from "react";
import "./Card.css";
import { defaultUrl } from "../../../../store/action/types";
import Contexto from "../../../../context/Context";

const Card = ({ precio, nombre, descripcion, imagen, id }) => {
  //const footerRef = useRef(null);
  /*const handleMouseOver = () => {
    footerRef.current.style.visibility = "visible";
    footerRef.current.style.opacity = 1;
  };

  const handleMouseDown = () => {
    footerRef.current.style.visibility = "hidden";
    footerRef.current.style.opacity = 0;
  };*/

  const { agregarCarrito } = useContext(Contexto);

  return (
    <div
      className="pepe"
      //onMouseOver={handleMouseOver}
      //onMouseOut={handleMouseDown}
    >
      <div className="divcont"><button className="btn btn-warning">Editar</button><button className="btn btn-danger">X</button></div>
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
      <p className="descriptionCard">{descripcion}</p>

      <div className="cardFooter" /*ref={footerRef}*/>
        <div className="price">${precio}</div>
        <button
          className="button-64"
          onClick={() => {
            agregarCarrito(id);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
