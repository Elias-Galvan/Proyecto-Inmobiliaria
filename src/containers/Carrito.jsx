import useCarrito from "../state/useCarrito";
import DetalleCarrito from "../components/Carrito/DetalleCarrito";
import AlertaCarrito from "../components/Carrito/AlertaCarrito";
import api from "../helpers/axiosInstance";
import { defaultUrl } from "../constants/types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../assets/css/Carrito.css";

function Carrito() {
  const { carrito } = useCarrito();
  const navigate = useNavigate();

  const getTotalPrice = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const getCheckoutData = carrito.map((producto) => {
    return {
      productoId: producto.id,
      cantidad: producto.cantidad,
    };
  });

  const finalizarCompra = async () => {
    // En el log de abajo es la forma que tengo que enviar en el endpoint para finalizar la compra
    // console.log({
    //   cartItems: getCheckoutData,
    //   nombreUsuario: sessionStorage.getItem("nombreUsuario"),
    // });

    const resp = await api.post(`${defaultUrl}/api/v1/finalizar-compra`, {
      cartItems: getCheckoutData,
      nombreUsuario: sessionStorage.getItem("nombreUsuario"),
    });

    if (resp.status === 200) {
      Swal.fire(
        "Felicitaciones!",
        "Tu compra se realizo de forma exitosa.",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      Swal.fire("Error!", "Tu compra fallo.", "error");
    }
  };

  return (
    <div className="carrito">
      {carrito.length === 0 ? (
        <AlertaCarrito />
      ) : (
        <>
          <DetalleCarrito carrito={carrito} />
          <div
            className="w-100 py-4"
            style={{ display: "grid", placeItems: "center" }}
          >
            <div>
              <h4>
                Total: <strong>${getTotalPrice.toFixed(2)}</strong>
              </h4>
            </div>
            <button onClick={finalizarCompra} className="btn btn-success">
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
