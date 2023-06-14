import React from "react";
import { Table } from "react-bootstrap";
import TableRow from "./TableRow";

const TablaUsuarios = ({ users }) => {
  return (
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
  );
};

export default TablaUsuarios;
