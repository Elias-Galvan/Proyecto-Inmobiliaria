import { Link, useNavigate } from "react-router-dom";
import { defaultUrl } from "../constants/types";
import { deleteActividad } from "../services/actividadesService";
import Swal from "sweetalert2";
import "../assets/css/Actividades.css";

export default function Card({ id, nombre, imagen, descripcion }) {
  const navigate = useNavigate();
  const isAdmin = sessionStorage.getItem("isAdmin");

  const deleteActividadById = async (id) => {
    const resp = await deleteActividad(id);

    Swal.fire("Ok.", resp.mensaje, "success");
    navigate("/");
  };

  return (
    <div className="card text-center bg-dark">
      {isAdmin === "ROLE_ADMIN" && (
        <div className="divcont">
          <button
            className="btn btn-warning"
            onClick={() => navigate(`/editar-actividad/${id}`)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteActividadById(id)}
          >
            X
          </button>
        </div>
      )}
      <div className="overflow">
        <img
          src={`${defaultUrl}${imagen}`}
          alt="imagen actividad"
          className="card-img-top img-act"
          width="150"
          height="250"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title ">{nombre}</h4>
        <p className="card-text text-secondary">{descripcion}</p>
        <Link to={`/actividad/${id}`} className="btn btn-secondary rounded-0 ">
          Ver mas...
        </Link>
      </div>
    </div>
  );
}
