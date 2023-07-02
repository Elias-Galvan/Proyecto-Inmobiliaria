import React, { useState } from "react";
import api from "../../helpers/axiosInstance";
import { defaultUrl } from "../../store/action/types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CrudProductos() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [imagen, setImagen] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      descripcion.trim() === "" ||
      precio <= 0 ||
      stock <= 0
    ) {
      console.log("no entra");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("descripcion", descripcion);
      formData.append("precio", Number(precio));
      formData.append("stock", Number(stock));
      formData.append("imagen", imagen);

      const response = await api.post(
        `${defaultUrl}/api/v1/nuevo-producto`,
        formData
      );

      if (response.status === 200) {
        Swal.fire("Ok!!!", response.data.mensaje, "success");
        navigate("/tienda");
      } else {
        Swal.fire(
          "Upps!!",
          "Ha ocurrido un error al agregar el producto",
          "error"
        );
      }
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      Swal.fire(
        "Upps!!",
        "Ha ocurrido un error al agregar el producto",
        "error"
      );
    }
  };

  return (
    <div fluid className="containerPage">
      <h2>Agregar Producto</h2>
      <form className="formActividad" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label textLabel"
          >
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput11"
            placeholder="Ej: Musculación"
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea11"
            className="form-label textLabel"
          >
            Descripcion
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea11"
            rows={3}
            defaultValue={""}
            name="descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput162"
            className="form-label textLabel"
          >
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput162"
            placeholder="$"
            name="precio"
            onChange={(e) => setPrecio(e.target.value)}
            value={precio}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput162"
            className="form-label textLabel"
          >
            Stock:
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput162"
            placeholder="$"
            name="stock"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
          />
        </div>
        <br />

        <div className="mb-3">
          <label className="form-label textLabel">
            Imagen:
            <input
              style={{ marginLeft: "12px" }}
              accept="image/*"
              type="file"
              name="imagen"
              onChange={(e) => setImagen(e.target.files[0])}
            />
          </label>
        </div>
        <div className="btnfinal">
          <button className="btn btn-primary" type="submit">
            Agregar producto
          </button>
        </div>
      </form>
    </div>
  );
}

export default CrudProductos;
