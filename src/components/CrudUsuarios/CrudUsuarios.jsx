import React from "react";
import { Table } from "react-bootstrap";
import "../../assets/css/CrudRepositorio.css";
import TableRow from "./TableRow";
import { useNavigate } from "react-router-dom";

const users = [
  {
    id: 1,
    nombreusuario: "Elias",
    email: "elias@gmail.com",
    telefono: "1159083447",
  },
  {
    id: 2,
    nombreusuario: "Seba",
    email: "Seba@gmail.com",
    telefono: "1149667584",
  },
  {
    id: 3,
    nombreusuario: "Maxi",
    email: "maxi@gmail.com",
    telefono: "1189690584",
  },
  {
    id: 4,
    nombreusuario: "Mariano",
    email: "Mariano@gmail.com",
    telefono: "1157858585",
  },
  {
    id: 5,
    nombreusuario: "Luisito",
    email: "luisito@gmail.com",
    telefono: "1145858584",
  },
  {
    id: 6,
    nombreusuario: "Coqui",
    email: "coqui@gmail.com",
    telefono: "1156856858",
  },
];

const CrudUsuarios = () => {
  const navigate = useNavigate();
  return (
    <div fluid className="containerPage">
      <div className="newContact">
        <button className="btn btn-info" onClick={() => navigate("/registro")}>
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
          {users.map((user) => (
            <TableRow key={user.id} {...user} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudUsuarios;
