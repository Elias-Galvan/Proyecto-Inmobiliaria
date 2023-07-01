import React, { useEffect, useState, useContext } from "react";
import Banner from "../../assets/statics/proteina.jpg";
import Card from "./components/Card/Card";
import Filter from "./components/Filters/Filter";
import "../../assets/css/Productos.css";
import { Link, useNavigate } from "react-router-dom";
import Contexto from "../../context/Context";
import "../../assets/statics/Sup1.jpeg";
import iconoCarrito from "../../assets/statics/iconocarrito.png";

const Productos = () => {
  const { listameProductos, productos } = useContext(Contexto);
  useEffect(() => {
    listameProductos();
  }, []);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  /*const getData = async () => {
    const getProductData = await getProductService();
    setProducts(getProductData);
  };

  useEffect(() => {
    getData();
  }, []);*/

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <div className="containerProduct">
      <div className="item">
        <Link to="/carrito">
          <img src={iconoCarrito} alt="" />
        </Link>
      </div>
      <div className="header">
        <h1 className="title">
          <img src={Banner} alt="icon banner" />
        </h1>
      </div>

      <div className="btn-add-product">
        <button
          className="button-64"
          onClick={() => navigate("/agregar-producto")}
        >
          <span className="text">Agregar producto</span>
        </button>
      </div>
      <div className="containerFiltros">
        <Filter handleSearch={handleSearch} />
      </div>
      <div className="containerCard">
        {productos.map((elem) => (
          <Card key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
