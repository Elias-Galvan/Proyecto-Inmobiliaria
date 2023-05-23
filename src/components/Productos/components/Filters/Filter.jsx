import React from "react";
import "./Filter.css";
import { ReactComponent as Search } from "../../../../assets/statics/search.svg";
const Filter = ({ handleSearch }) => {
  const onChangeSearch = ({ target }) => {
    if (handleSearch) handleSearch(target.value);
  };
  return (
    <div className="containerInput">
      <input type="text" className="inputFilter" onChange={onChangeSearch} />
      <label>Buscar articulo</label>
      <Search />
    </div>
  );
};

export default Filter;
