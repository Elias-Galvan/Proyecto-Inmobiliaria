import React from "react";
import Carrousel from "../components/Carrousel";
// import img1 from "../assets/statics/img1.jpg";
// import img2 from "../assets/statics/img2.jpg";
// import img3 from "../assets/statics/img3.jpg";
// import img4 from "../assets/statics/img4.jpg";
import "../assets/css/DescActividad.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useActividades from "../state/useActividades";
import { getActividadById } from "../services/getActividadesService";
import { defaultUrl } from "../store/action/types";

// const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

function DescActividad() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { actividad, setActividad } = useActividades();
  const isAuthenticated = localStorage.getItem("token") !== null;

  const {
    cupoMaximo,
    nombre,
    descripcion,
    horarios,
    precio,
    instructor,
    imagen,
  } = actividad;

  const getData = async (id) => {
    const getActividadData = await getActividadById(id);
    setActividad(getActividadData);
  };

  useEffect(() => {
    getData(id);
  }, []);

  console.log("Actividad: ", actividad);

  const handleTurnOfActivity = () => {
    if (isAuthenticated) {
      // Realiza la redirección si el usuario está autenticado
      console.log("reserva de turno: ");
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
              {horarios.map((horario) => (
                <div className="form-check" key={horario.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
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
