import Swal from "sweetalert2";
import useCarrito from "../../../../state/useCarrito";
import { deleteProduct } from "../../../../services/productService";
import "./Card.css";
import { defaultUrl } from "../../../../constants/types";

const Card = ({ id, precio, nombre, descripcion, imagen, stock, isAdmin }) => {
  const { addProduct } = useCarrito();

  const agregarCarrito = () => {
    if (stock <= 0) {
      Swal.fire("Lo sentimos!!", "No se pueden agregar mas productos.", "info");
      return;
    }

    addProduct({ id, precio, nombre, descripcion, imagen, stock });
    Swal.fire("Genial!!", "Producto agregado correctamente.", "success");
  };

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
          <button className="button-64 btnCustom" onClick={agregarCarrito}>
            <span className="text spanCustom"> Agregar al carrito</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
