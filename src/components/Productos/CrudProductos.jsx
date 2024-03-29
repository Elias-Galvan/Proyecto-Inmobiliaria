import React, { useState } from "react";
import api from "../../helpers/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { defaultUrl } from "../../constants/types";
import { useEffect } from "react";
import { getProductByIdService } from "../../services/productService";
import useProductos from "../../state/useProductos";

function CrudProductos() {
  const { setProducto } = useProductos();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();

  const getData = async (id) => {
    const getProduct = await getProductByIdService(id);
    setProducto(getProduct);
    setNombre(getProduct.nombre);
    setDescripcion(getProduct.descripcion);
    setPrecio(getProduct.precio);
    setStock(getProduct.stock);
  };

  useEffect(() => {
    if (id) {
      getData(id);
    } else {
      setNombre("");
      setDescripcion("");
      setPrecio(0);
      setStock(0);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      descripcion.trim() === "" ||
      precio <= 0 ||
      stock <= 0
    ) {
      Swal.fire("Warning", "Ningun campo puede estar vacio", "warning");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("descripcion", descripcion);
      formData.append("precio", Number(precio));
      formData.append("stock", Number(stock));
      formData.append("imagen", imagen);

      let response;

      if (id) {
        response = await api.put(`${defaultUrl}/api/v1/producto/${id}`, {
          id,
          nombre,
          descripcion,
          precio,
          stock,
        });
      } else {
        response = await api.post(
          `${defaultUrl}/api/v1/nuevo-producto`,
          formData
        );
      }
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
      Swal.fire(
        "Upps!!",
        "Ha ocurrido un error al agregar el producto",
        "error"
      );
    }
  };

  return (
    <div className="containerPage">
      <h2>
        {pathname.includes("editar") ? "Editar Producto" : "Agregar producto"}
      </h2>
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
            placeholder="Proteina, Barras proteicas, suplementos..."
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

        {pathname.includes("agregar") && (
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
        )}
        <div className="btnfinal">
          <button className="btn btn-primary" type="submit">
            {pathname.includes("editar")
              ? "Editar Producto"
              : "Agregar producto"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CrudProductos;
