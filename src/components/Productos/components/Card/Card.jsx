import { defaultUrl } from "../../../../store/action/types";
import "./Card.css";

const Card = ({ id, precio, nombre, descripcion, imagen }) => {
  const agregarCarrito = (id) => console.log(id);

  return (
    <div className="pepe">
      <div className="divcont">
        <button className="btn btn-warning">Editar</button>
        <button className="btn btn-danger">X</button>
      </div>
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

      <div className="cardFooter">
        <div className="price">${precio}</div>
        <button
          className="button-64 btnCustom"
          onClick={() => {
            agregarCarrito(id);
          }}
        >
          <span className="text spanCustom"> Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
