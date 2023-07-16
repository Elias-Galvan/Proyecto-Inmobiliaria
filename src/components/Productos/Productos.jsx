import React, { useEffect } from "react";
import Banner from "../../assets/statics/proteina.jpg";
import Card from "./components/Card/Card";
import Filter from "./components/Filters/Filter";
import { useNavigate } from "react-router-dom";
import { getProductService } from "../../services/productService";
import useProductos from "../../state/useProductos";
import "../../assets/css/Productos.css";

const Productos = () => {
  const { productos, setProductos } = useProductos();
  const navigate = useNavigate();
  const isAdmin = sessionStorage.getItem("isAdmin");

  const getData = async () => {
    const getProductData = await getProductService();
    setProductos(getProductData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <div className="containerProduct">
      <div className="header">
        <h1 className="title">
          <img src={Banner} alt="icon banner" />
        </h1>
      </div>
      {isAdmin === "ROLE_ADMIN" && (
        <div className="btn-add-product">
          <button
            className="button-64"
            onClick={() => navigate("/agregar-producto")}
          >
            <span className="text">Agregar producto</span>
          </button>
        </div>
      )}
      <div className="containerFiltros">
        <Filter handleSearch={handleSearch} />
      </div>
      <div className="containerCard">
        {productos && productos.map((elem) => <Card key={elem.id} {...elem} />)}
      </div>
    </div>
  );
};

export default Productos;
