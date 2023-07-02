import { useState, useEffect } from "react";
import Card from "../components/CardAct";
import { useNavigate } from "react-router-dom";
import { getActividadService } from "../services/getActividadService";
import "../assets/css/Actividades.css";
import useUserStore from "../state/useUserStore";

export default function Actividades() {
  const [actividades, setActividades] = useState([]);
  const { usuario } = useUserStore();
  const navigate = useNavigate();

  const isAdmin = usuario.authorities.some(
    (el) => el.authority === "ROLE_ADMIN"
  );

  const getData = async () => {
    const getActividadData = await getActividadService();
    setActividades(getActividadData);
  };

  useEffect(() => {
    getData();
  }, []);

  const isAuthenticated = localStorage.getItem("token") !== null;

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
        {isAdmin && (
          <div className="newContact">
            <button
              className="btn btn-info"
              onClick={() => navigate("/agregar-actividad")}
            >
              Nuevo Actividad
            </button>
          </div>
        )}
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
