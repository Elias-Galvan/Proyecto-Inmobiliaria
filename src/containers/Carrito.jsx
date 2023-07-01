import React, { useContext } from "react";
import "../assets/css/Carrito.css";
import ItemCarrito from "../components/ItemCarrito";
import Contexto from "../context/Context";
function Carrito() {
  const { carrito, eliminarCarrito } = useContext(Contexto);

  // debugger
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito1">
          {carrito.map((item) => (
            <ItemCarrito
              {...item}
              key={item.id}
              eliminarCarrito={eliminarCarrito}
            ></ItemCarrito>
          ))}
        </div>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>$ {}</strong>
        </div>
      </div>
    </>
  );
}

export default Carrito;
