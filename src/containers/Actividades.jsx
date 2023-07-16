import { useEffect } from "react";
import Card from "../components/CardAct";
import { useNavigate } from "react-router-dom";
import { getActividadesService } from "../services/actividadesService";
import "../assets/css/Actividades.css";
import useActividades from "../state/useActividades";

export default function Actividades() {
  const { actividades, setActividades } = useActividades();
  const navigate = useNavigate();

  const isAuthenticated = sessionStorage.getItem("token") !== null;
  const isAdmin = sessionStorage.getItem("isAdmin");

  const getData = async () => {
    const getActividadData = await getActividadesService();
    setActividades(getActividadData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/actividad/${id}`);
  };

  return (
    <div className="actividades">
      <div className="container justify-content-center align-items-center">
        <h2>Actividades</h2>
        {isAuthenticated && isAdmin === "ROLE_ADMIN" && (
          <div className="newContact">
            <button
              className="btn btn-info"
              onClick={() => navigate("/agregar-actividad")}
            >
              Nueva Actividad
            </button>
          </div>
        )}
        <hr className="linea" />
        <div className="row">
          {actividades &&
            actividades.map(({ nombre, imagen, descripcion, id }) => (
              <div className="col-md-4" key={id}>
                <Card
                  id={id}
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
