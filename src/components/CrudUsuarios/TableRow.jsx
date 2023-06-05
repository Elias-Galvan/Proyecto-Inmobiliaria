import React from "react";

const TableRow = ({ id, nombreusuario, email, telefono }) => {
  const handleDelete = () => {
    console.log(`El usuario eliminado es: ${id} - ${nombreusuario}`);
  };

  const handleSuccess = () => {
    const user = { id, nombreusuario, email, telefono };
    console.log(user);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreusuario}</td>
      <td>{email}</td>
      <td>{telefono}</td>
      <td className="containerButtons">
        <button
          className="btnCrud btn btn-danger"
          size="sm"
          onClick={handleDelete}
        >
          Eliminar
        </button>
        <button
          className="btnCrud btn btn-success"
          size="sm"
          onClick={handleSuccess}
        >
          Alta
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
