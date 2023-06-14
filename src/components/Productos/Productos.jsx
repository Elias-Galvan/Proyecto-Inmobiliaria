import React from "react";
import "../../assets/css/Productos.css";
import Banner from "../../assets/statics/proteina.jpg";
import Card from "./components/Card/Card";
import protein from "../../assets/statics/protein_mix.png";
import Filter from "./components/Filters/Filter";

const Productos = () => {
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
      <div className="containerFiltros">
        <Filter handleSearch={handleSearch} />
      </div>
      <div className="containerCard">
        {[1, 2, 3, 4].map((elem) => (
          <Card key={elem} srcImage={protein} title="Proteina" />
        ))}
      </div>
    </div>
  );
};

export default Productos;
