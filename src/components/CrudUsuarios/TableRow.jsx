import React from "react";
import Swal from "sweetalert2";
import {
  altaUsuarioService,
  bajaUsuarioService,
  renovarUsuarioService,
} from "../../services/usuarioServices";

const TableRow = ({ user, action1, action2 }) => {
  const { id, nombreUsuario, email, telefono } = user;

  const handleDelete = async () => {
    await bajaUsuarioService(id);
    Swal.fire(
      "OK!!",
      `El usuario '${nombreUsuario.toUpperCase()}' fue dado de baja con exito!!`,
      "success"
    );
  };

  const handleSuccess = async () => {
    if (action2 === "Dar de alta") {
      await altaUsuarioService(id);
      Swal.fire(
        "OK!!",
        `El usuario '${nombreUsuario.toUpperCase()}' fue dado de alta con exito!!`,
        "success"
      );
    } else {
      await renovarUsuarioService(id);
      Swal.fire(
        "OK!!",
        `El usuario '${nombreUsuario}' pago con exito`,
        "success"
      );
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreUsuario}</td>
      <td>{email}</td>
      <td>{telefono}</td>
      <td className="containerButtons">
        {action1 && (
          <button
            className="btnCrud btn btn-danger"
            size="sm"
            onClick={handleDelete}
          >
            {action1}
          </button>
        )}
        <button
          className={`btnCrud btn btn-success ${
            action2 === "Dar de alta" && "w-50"
          }`}
          onClick={handleSuccess}
        >
          {action2}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
