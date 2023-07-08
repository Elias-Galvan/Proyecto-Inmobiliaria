import useCarrito from "../state/useCarrito";
import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Carrito.css";
import { Link } from "react-router-dom";

function Carrito() {
  const { carrito } = useCarrito();

  console.log("Productos del carrito: ", carrito);

  return (
    <div className="carrito">
      {carrito.length === 0 ? (
        <div className="alert alert-info w-75">
          <h4 className="text-dark text-center">
            Su carrito se encuentra vacio.
          </h4>
          <Link className="btn btn-secondary" to={"/tienda"}>
            Ir a Tienda
          </Link>
        </div>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              <ItemCarrito key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Carrito;
