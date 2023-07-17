import { defaultUrl } from "../../constants/types";
import useCarrito from "../../state/useCarrito";

function ItemCarrito({ producto }) {
  const { addProduct, removeProduct } = useCarrito();
  const { nombre, precio, imagen, id, cantidad } = producto;

  let subtotal = (precio * cantidad).toFixed(2);

  return (
    <tr>
      <th scope="row">
        <img
          src={`${defaultUrl}${imagen}`}
          alt={nombre}
          width={"50px"}
          height={"50px"}
          style={{ borderRadius: "50%" }}
        />
      </th>
      <td>
        <span style={{ fontWeight: "bold" }}>{nombre}</span>
      </td>
      <td>
        <button
          className="btn btn-light"
          onClick={() => removeProduct(id, true)}
        >
          -
        </button>
        <span
          style={{
            margin: "0 10px",
            fontSize: "17px",
            fontWeight: "bold",
            padding: "5px 0",
          }}
        >
          {cantidad}
        </span>
        <button className="btn btn-light" onClick={() => addProduct(producto)}>
          +
        </button>
      </td>
      <td>${subtotal}</td>
    </tr>
  );
}

export default ItemCarrito;
