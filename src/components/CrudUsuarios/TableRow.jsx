import React from "react";
import Swal from "sweetalert2";
import {
  altaUsuarioService,
  bajaUsuarioService,
  renovarUsuarioService,
} from "../../services/usuarioServices";
import { useNavigate } from "react-router-dom";

const TableRow = ({ user, action1, action2 }) => {
  const { id, nombreUsuario, email, telefono, fechaExpiracionCuota } = user;
  const navigate = useNavigate();

  const handleRedirect = (mensaje = ` dado de alta con exito!!`) =>
    Swal.fire(
      "OK!!",
      `El usuario '${nombreUsuario.toUpperCase()}' fue ${mensaje}`,
      "success"
    ).then((result) => {
      if (result.isConfirmed) navigate("/");
    });

  const handleDelete = async () => {
    await bajaUsuarioService(id);
    handleRedirect(" fue dado de baja exitosamente!");
  };

  const handleSuccess = async () => {
    if (action2 === "Dar de alta") {
      await altaUsuarioService(id);
      handleRedirect();
    } else {
      await renovarUsuarioService(id);
      handleRedirect(" fue editado correctamente!!");
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreUsuario}</td>
      <td>{email}</td>
      <td>{telefono}</td>
      <td>{fechaExpiracionCuota}</td>
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
