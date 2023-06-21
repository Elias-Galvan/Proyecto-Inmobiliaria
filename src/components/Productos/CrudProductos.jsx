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
      formData.append("precio", precio);
      formData.append("stock", stock);
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
      // Manejar el error de alguna manera apropiada
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ margin: "100px auto", width: "50%" }}
    >
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Descripción:
        <input
          type="text"
          name="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </label>
      <br />
      <label>
        Precio:
        <input
          type="number"
          name="precio"
          value={precio}
          onChange={(e) => setPrecio(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Stock:
        <input
          type="number"
          name="stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Imagen:
        <input
          accept="image/*"
          type="file"
          name="imagen"
          onChange={(e) => setImagen(e.target.files[0])}
        />
      </label>
      <br />
      <button type="submit">Agregar producto</button>
    </form>
  );
}

export default CrudProductos;
