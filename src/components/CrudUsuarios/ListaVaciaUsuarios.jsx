import React from "react";

const ListaVaciaUsuarios = () => {
  return (
    <div className="alert alert-info w-75 h-100 d-flex justify-content-center align-items-center">
      <div className="text-center w-75 h-100 d-flex justify-content-center align-items-center">
        <h4 className="text-dark">No hay Usuarios en la lista</h4>
      </div>
    </div>
  );
};

export default ListaVaciaUsuarios;
