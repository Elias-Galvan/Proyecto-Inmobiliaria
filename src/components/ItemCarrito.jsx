import React, { useState } from "react";
import "../assets/css/ItemCarrito.css";
import borrar from "../assets/statics/borrar.png";
function ItemCarrito({ nombre, precio, img, id, quantity, eliminarCarrito }) {
  const [valor, setValor] = useState(1);

  const handleBorrar = () => {
    eliminarCarrito(id);
  };

  const sumar = () => {
    if (valor < quantity) {
      setValor(valor + 1);
    }
  };
  const reestablecer = () => {
    setValor(1);
  };

  return (
    <div className="carrito-item">
      <img src={img} alt="" className="carrito-item-img" />
      <div className="carrito-txt">
        <h1 className="carrito-item-titulo">{nombre}</h1>
        <h3 className="carrito-item-precio">${precio * quantity}</h3>
      </div>
      <div className="contador">
        <p className="contar">Cantidad: {quantity}</p>
        <div className="bo">
          <button
            className="incr"
            id="incr"
            onClick={sumar}
            disabled={valor >= quantity}
          >
            +
          </button>
          <button className="decr" id="decr" onClick={reestablecer}>
            x
          </button>
        </div>
      </div>
      <img
        src={borrar}
        alt=""
        className="carrito-item-borrar"
        onClick={handleBorrar}
      />
    </div>
  );
}

export default ItemCarrito;
