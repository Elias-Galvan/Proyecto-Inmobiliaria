import React from "react";

const SelectOptionHorario = (horario) => {
  return (
    <option value={horario.idHorario}>
      {horario.dia} - {horario.horaInicio}
    </option>
  );
};

export default SelectOptionHorario;
