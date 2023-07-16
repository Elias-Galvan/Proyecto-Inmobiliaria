import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUsuarios } from "../../services/usuarioServices";
import { useState } from "react";
import { compareDate } from "../../utils/compareDate";
import useUsersStore from "../../state/useUsersStore";
import TableRow from "./TableRow";
import ListaVaciaUsuarios from "./ListaVaciaUsuarios";

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
    (user) =>
      user.esPrimeraVez | !user.activo | !compareDate(user.fechaExpiracionCuota)
  );
  const filterUsersIsActive = usuarios.filter(
    (user) => user.activo && compareDate(user.fechaExpiracionCuota)
  );

  const usuariosRender = filter
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
      ));

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
      <h3 className="text-white">
        {filter ? "Usuarios para Alta" : "Usuarios Activos"}
      </h3>
      <div className="table-container">
        {usuariosRender.length > 0 ? (
          <Table striped bordered hover variant="dark" className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre de usuario</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Exp. Cuota</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>{usuariosRender}</tbody>
          </Table>
        ) : (
          <ListaVaciaUsuarios />
        )}
      </div>
    </div>
  );
};

export default CrudUsuarios;
