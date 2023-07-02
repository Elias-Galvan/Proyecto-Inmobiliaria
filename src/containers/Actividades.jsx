import React, { useEffect } from "react";
import Card from "../components/CardAct";
import "../assets/css/Actividades.css";
import img3 from "../assets/statics/img2.jpg";
import img2 from "../assets/statics/img3.jpg";
import img1 from "../assets/statics/img1.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getActividadService } from "../services/getActividadService";

const cards = [
  {
    id: 1,
    title: "Musculacion",
    desc: "sdfsdfsdfsd",
    img: img1,
  },
  {
    id: 2,
    title: "Cinta",
    desc: "sdfsdfsdfsdf",
    img: img2,
  },
  {
    id: 3,
    title: "Boxeo",
    desc: "dfstgdfgdfgdfg",
    img: img3,
  },
];
export default function Actividades() {
  const [actividades, setActividades] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const getActividadData = await getActividadService();
    setActividades(getActividadData);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(actividades);
  const isAuthenticated = localStorage.getItem("token") !== null; // Obtén el estado de autenticación aquí

  const handleCardClick = (id) => {
    if (isAuthenticated) {
      // Realiza la redirección si el usuario está autenticado
      navigate(`/desc-act/${id}`);
    } else {
      // Ejecuta una acción alternativa si el usuario no está autenticado
      navigate(`/login`);
    }
  };

  return (
    <div className="actividades">
      <div className="container justify-content-center align-items-center">
        <h2>Actividades</h2>
        <div className="newContact">
          <button
            className="btn btn-info"
            onClick={() => navigate("/agregar-actividad")}
          >
            Nuevo Actividad
          </button>
        </div>
        <hr className="linea" />
        <div className="row">
          {actividades &&
            actividades.map(({ nombre, imagen, descripcion, id }) => (
              <div className="col-md-4" key={id}>
                <Card
                  nombre={nombre}
                  imagen={imagen}
                  descripcion={descripcion}
                  onClick={() => handleCardClick(id)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
