import Swal from "sweetalert2";
import { deleteProduct } from "../../../../services/getProductService";
import { defaultUrl } from "../../../../store/action/types";
import "./Card.css";

const Card = ({ id, precio, nombre, descripcion, imagen, isAdmin }) => {
  const agregarCarrito = (id) => console.log(id);

  const deleleProductById = async (id) => {
    const resp = await deleteProduct(id);

    Swal.fire("Ok.", resp.mensaje, "success");
  };

  return (
    <div className="pepe">
      {isAdmin && (
        <div className="divcont">
          <button className="btn btn-warning">Editar</button>
          <button
            className="btn btn-danger"
            onClick={() => deleleProductById(id)}
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

      <div className={!isAdmin ? "cardFooter" : "text-center"}>
        <div className="price">${precio}</div>
        {!isAdmin && (
          <button
            className="button-64 btnCustom"
            onClick={() => {
              agregarCarrito(id);
            }}
          >
            <span className="text spanCustom"> Agregar al carrito</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
