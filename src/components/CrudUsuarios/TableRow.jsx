import React from "react";
import Swal from "sweetalert2";
import {
  altaUsuarioService,
  bajaUsuarioService,
  renovarUsuarioService,
} from "../../services/usuarioServices";
import { useNavigate } from "react-router-dom";

const DAR_ALTA = "Dar de alta";
const PAGAR = "Pagar";

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
    handleRedirect(" dado de baja exitosamente!");
  };

  const handleSuccess = async () => {
    if (action2 === DAR_ALTA) {
      await altaUsuarioService(id);
      handleRedirect();
    } else if (action2 === PAGAR) {
      await renovarUsuarioService(id);
      handleRedirect("editado correctamente!!");
    } else {
      navigate(`/registro`, { state: { user } });
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
            (action2 === "Dar de alta" || action2 === "Editar") && "w-75"
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
