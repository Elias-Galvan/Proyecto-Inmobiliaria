import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import TableRow from "./TableRow";
import { useNavigate } from "react-router-dom";
import useUsersStore from "../../state/useUsersStore";
import { getUsuarios } from "../../services/usuarioServices";
import { useState } from "react";
import "../../assets/css/CrudRepositorio.css";

const CrudUsuarios = () => {
  const [filter, setFilter] = useState(false);
  const { usuarios, setAllUsuarios } = useUsersStore();
  const navigate = useNavigate();

  const getData = async () => {
    const getUsersData = await getUsuarios();
    setAllUsuarios(getUsersData);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterUsersIsPrimary = usuarios.filter(
    (user) => user.esPrimeraVez | !user.activo
  );
  const filterUsersIsActive = usuarios.filter((user) => user.activo);

  console.log(usuarios);

  return (
    <div className="containerPage">
      <div className="newContact">
        <button
          className="btn btn-info mx-2"
          onClick={() => setFilter(!filter)}
        >
          {filter ? "Usuarios activos" : " Tabla de Altas"}
        </button>
        <button
          className="btn btn-info  mx-2"
          onClick={() => navigate("/registro")}
        >
          Nuevo Contacto
        </button>
      </div>
      <Table striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre de usuario</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {filter
            ? filterUsersIsPrimary.map((user) => (
                <TableRow key={user.id} user={user} action2={"Dar de alta"} />
              ))
            : filterUsersIsActive.map((user) => (
                <TableRow
                  key={user.id}
                  user={user}
                  action1={"Dar de baja"}
                  action2={"Pagar"}
                />
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudUsuarios;
