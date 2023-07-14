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
        <button onClick={() => removeProduct(id, true)}>-1</button>
        <span style={{ margin: "0 10px" }}> {cantidad}</span>
        <button onClick={() => addProduct(producto)}>+1</button>
      </td>
      <td>${subtotal}</td>
    </tr>
  );
}

export default ItemCarrito;
