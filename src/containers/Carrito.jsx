import useCarrito from "../state/useCarrito";
import DetalleCarrito from "../components/Carrito/DetalleCarrito";
import AlertaCarrito from "../components/Carrito/AlertaCarrito";
import "../assets/css/Carrito.css";

function Carrito() {
  const { carrito } = useCarrito();

  const getTotalPrice = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const getCheckoutData = carrito.map((producto) => {
    return {
      productoId: producto.id,
      cantidad: producto.cantidad,
    };
  });

  const finalizarCompra = () => {
    // En el log de abajo es la forma que tengo que enviar en el endpoint para finalizar la compra
    console.log({
      cartItems: getCheckoutData,
      nombreUsuario: sessionStorage.getItem("nombreUsuario"),
    });
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
