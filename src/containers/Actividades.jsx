import React from "react";
import Card from "../components/CardAct";
import "../assets/css/Actividades.css";
import img3 from "../assets/statics/img2.jpg";
import img2 from "../assets/statics/img3.jpg";
import img1 from "../assets/statics/img1.jpg";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
          {cards.map(({ title, desc, img, id }) => (
            <div className="col-md-4" key={id}>
              <Card
                imgUrl={img}
                titulo={title}
                descripcion={desc}
                onClick={() => handleCardClick(id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
