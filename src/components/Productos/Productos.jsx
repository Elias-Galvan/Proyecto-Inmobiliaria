import React, { useEffect, useState } from "react";
import Banner from "../../assets/statics/proteina.jpg";
import Card from "./components/Card/Card";
import Filter from "./components/Filters/Filter";
import "../../assets/css/Productos.css";
import { useNavigate } from "react-router-dom";
import { getProductService } from "../../services/getProductService";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const getProductData = await getProductService();
    setProducts(getProductData);
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
        {products && products.map((elem) => <Card key={elem.id} {...elem} />)}
      </div>
    </div>
  );
};

export default Productos;
