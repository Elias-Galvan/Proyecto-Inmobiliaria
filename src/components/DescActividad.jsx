import { useState } from "react";
// import Carrousel from "../components/Carrousel";
import "../assets/css/DescActividad.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useActividades from "../state/useActividades";
import { getActividadById } from "../services/getActividadesService";
import { defaultUrl } from "../store/action/types";
import useUserStore from "../state/useUserStore";
import api from "../helpers/axiosInstance";

// const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

function DescActividad() {
  const [selectedId, setSelectedId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { actividad, setActividad } = useActividades();
  const { usuario } = useUserStore();
  const { nombreUsuario } = usuario;
  const {
    cupoMaximo,
    nombre,
    descripcion,
    horarios,
    precio,
    instructor,
    imagen,
  } = actividad;
  const isAuthenticated = localStorage.getItem("token") !== null;

  const getData = async (id) => {
    const getActividadData = await getActividadById(id);
    setActividad(getActividadData);
  };

  useEffect(() => {
    getData(id);
  }, []);

  const handleOptionChange = (event) => {
    const selectedId = event.target.value;
    setSelectedId(selectedId);

    // Buscar el objeto correspondiente al ID seleccionado
    const selectedHorario = horarios.find(
      (horario) => horario.id === selectedId
    );
  };

  const handleTurnOfActivity = async () => {
    if (isAuthenticated) {
      const response = await api.post(`${defaultUrl}/api/v1/nueva-reserva`, {
        nombreUsuario,
        idActividad: Number(id),
        idHorario: Number(selectedId),
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
              <h1>{nombre}</h1>
              <br />
              <p>{descripcion}</p>
              <br />
              <p>Horarios:</p>
              {horarios &&
                horarios.map((horario) => (
                  <div className="form-check" key={horario.idHorario}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={selectedId}
                      id={`flexRadioDefault${horario.idHorario}`} // Asignar un ID único para cada input radio
                      value={horario.idHorario}
                      onChange={handleOptionChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexRadioDefault${horario.idHorario}`}
                    >
                      {horario.dia} {horario.horaInicio}
                    </label>
                  </div>
                ))}

              <p>Instructor: {instructor}</p>

              <p>Precio: ${precio}</p>

              <p>Cupos disponibles: {cupoMaximo}</p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleTurnOfActivity}
              >
                Reserva una clase
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-fluid">
              {/* <Carrousel img={images} /> */}
              <img
                src={`${defaultUrl}${imagen}`}
                alt={`Imagen ${nombre}`}
                width={"400px"}
                height={"400px"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescActividad;
