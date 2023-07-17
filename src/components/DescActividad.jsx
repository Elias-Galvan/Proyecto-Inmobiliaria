import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useActividades from "../state/useActividades";
import { getActividadById } from "../services/actividadesService";
import api from "../helpers/axiosInstance";
import { defaultUrl } from "../constants/types";
import "../assets/css/DescActividad.css";
import { mappedToDays } from "../utils/mappedToDays";

function DescActividad() {
  const isAdmin = sessionStorage.getItem("isAdmin");
  const navigate = useNavigate();
  const { id } = useParams();
  const { actividad, setActividad } = useActividades();
  const {
    cupoMaximo,
    nombre,
    descripcion,
    horarios,
    precio,
    instructor,
    imagen,
  } = actividad;
  const isAuthenticated = sessionStorage.getItem("token") !== null;
  let fechaParaReserva = mappedToDays(horarios);

  const getData = async (id) => {
    const getActividadData = await getActividadById(id);
    setActividad(getActividadData);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const handleTurnOfActivity = async () => {
    if (isAuthenticated) {
      const response = await api.post(`${defaultUrl}/api/v1/nueva-reserva`, {
        nombreUsuario: sessionStorage.getItem("nombreUsuario"),
        idActividad: Number(id),
        idHorario: Number(fechaParaReserva.idHorario),
      });

      if (response.status === 200) {
        Swal.fire("Ok!!!", "Reservaste tu turno con exito!", "success");
        navigate("/");
      } else {
        Swal.fire(
          "Upps!!",
          "Ha ocurrido un error al agregar intentar realizar la reserva",
          "error"
        );
      }
    } else {
      Swal.fire("Upps!!", "Debes loguearte para realizar la reserva.", "error");
      navigate(`/login`);
    }
  };

  return (
    <section className="splash">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text">
              <h1 style={{ fontSize: "60px" }}>{nombre}</h1>
              <div>
                <p style={{ fontSize: "22px" }}>{descripcion}</p>
              </div>
              <div>
                <p>
                  <strong>Instructor/a</strong>: {instructor}
                </p>
              </div>
              <div>
                <p>
                  <strong>Horarios:</strong>
                </p>
                <div>
                  <ul>
                    {horarios &&
                      horarios
                        .sort((a, b) => a.idHorario - b.idHorario)
                        .map((horario) => (
                          <li className="form-check" key={horario.idHorario}>
                            <p>
                              {horario.dia} {horario.horaInicio}
                            </p>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "30px" }}>
                  <strong style={{ marginRight: "10px" }}>Precio:</strong>$
                  {precio}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="card-img-top rounded"
              src={`${defaultUrl}${imagen}`}
              alt={`Imagen ${nombre}`}
              width={"400px"}
              height={"400px"}
            />
          </div>
          <div className="col-md-12">
            <div className="reserva-turnos">
              <p>
                <strong style={{ marginRight: "10px" }}>Próxima clase:</strong>
                {`${fechaParaReserva?.dia} ${fechaParaReserva?.horaInicio}`}
              </p>
              <p>
                <strong>Cupos disponibles:</strong> {cupoMaximo}
              </p>
              {isAdmin === "ROLE_USER" && (
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleTurnOfActivity}
                  >
                    Reserva una clase
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescActividad;
