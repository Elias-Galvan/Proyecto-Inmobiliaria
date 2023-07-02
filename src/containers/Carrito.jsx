import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Carrito.css";

function Carrito() {
  //const { carrito, eliminarCarrito } = useContext(Contexto);

  return (
    <>
      <div className="carrito">
        {/* <div className="carrito-listadito1">
          {carrito.map((item) => (
            <ItemCarrito
              {...item}
              key={item.id}
              eliminarCarrito={eliminarCarrito}
            ></ItemCarrito>
          ))}
        </div> */}

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>$ {}</strong>
        </div>
      </div>
    </>
  );
}

export default Carrito;
