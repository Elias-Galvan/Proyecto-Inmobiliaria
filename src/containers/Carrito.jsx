import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Carrito.css";

function Carrito() {
  //const { carrito, eliminarCarrito } = useContext(Contexto);

  return (
    <div className="carrito">
      {/* <div className="carrito-listadito1">
          {carrito.map((item) => (
            <ItemCarrito
              {...item}
              key={item.id}
              eliminarCarrito={eliminarCarrito}
            ></ItemCarrito>
          ))}
        </div> 

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>$ {}</strong>
        </div>*/}
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Carrito;
