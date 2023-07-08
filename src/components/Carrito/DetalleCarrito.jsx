import React from "react";
import ItemCarrito from "./ItemCarrito";

const DetalleCarrito = ({ carrito }) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((producto) => (
          <ItemCarrito key={producto.id} producto={producto} />
        ))}
      </tbody>
    </table>
  );
};

export default DetalleCarrito;
