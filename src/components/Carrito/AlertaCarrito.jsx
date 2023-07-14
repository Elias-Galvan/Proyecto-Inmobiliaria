import React from "react";
import { Link } from "react-router-dom";

const AlertaCarrito = () => {
  return (
    <div className="alert alert-info w-75">
      <h4 className="text-dark text-center">Su carrito se encuentra vacio.</h4>
      <Link className="btn btn-secondary" to={"/tienda"}>
        Ir a Tienda
      </Link>
    </div>
  );
};

export default AlertaCarrito;
