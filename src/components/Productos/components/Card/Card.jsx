import Swal from "sweetalert2";
import useCarrito from "../../../../state/useCarrito";
import { deleteProduct } from "../../../../services/productService";
import { defaultUrl } from "../../../../constants/types";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, precio, nombre, descripcion, imagen, stock }) => {
  const { addProduct } = useCarrito();
  const navigate = useNavigate();
  const isAdmin = sessionStorage.getItem("isAdmin");

  const agregarCarrito = () => {
    if (stock <= 0) {
      Swal.fire("Lo sentimos!!", "No se pueden agregar mas productos.", "info");
      return;
    }

    addProduct({ id, precio, nombre, descripcion, imagen, stock });
    Swal.fire("Genial!!", "Producto agregado correctamente.", "success");
  };

  const deleteProductById = async (id) => {
    const resp = await deleteProduct(id);
    Swal.fire("Ok.", resp.mensaje, "success");
    navigate("/");
  };

  return (
    <div className="pepe">
      {isAdmin === "ROLE_ADMIN" && (
        <div className="divcont">
          <button
            className="btn btn-warning"
            onClick={() => navigate(`/editar-producto/${id}`)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProductById(id)}
          >
            X
          </button>
        </div>
      )}
      <div className="imgContainer">
        <img
          src={`${defaultUrl}${imagen}`}
          width="150"
          height="150"
          alt="img"
        />
      </div>
      <h3 className="titleCard">{nombre}</h3>
      <div className="containerDescription">
        <p className="descriptionCard">{descripcion}</p>
      </div>

      <div className={isAdmin === "ROLE_USER" ? "cardFooter" : "text-center"}>
        <div className="price">
          <strong>${precio}</strong>
        </div>
        {isAdmin === "ROLE_USER" && (
          <button className="button-64 btnCustom" onClick={agregarCarrito}>
            <span className="text spanCustom"> Agregar al carrito</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
