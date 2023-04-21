import React from "react";
import CardEmprendimiento from "../components/CardEmprendimiento";
import img3 from "../assets/statics/img3.webp";
import "../assets/css/Emprendimientos.css"

export default function Emprendimientos() {
  return (
    <>
      <div className="cont">
        <div className="container">
          <h2>Emprendimientos</h2>
          <hr className="linea" />
          <CardEmprendimiento
            dir="Capital federal, Argentina"
            imgUrl={img3}
            titulo="Lavalleja 1200"
            adrress="Lavalleja 1200"
            descripcion="
        El edificio se eleva en una esquina tradicional de la
        ciudad, en el cruce de Av. Cordoba y Lavalleja, ante un lote
        irregular, en el comienzo del proyecto tuvimos que
        considerar las reglamentaciones vigentes aplicadas por el
        gobierno de la ciudad autonoma de buenos aires, en lo
        referente a volumen constructivo permitido y alturas
        maximas. Con esa premisa llegamos a la conclusion de generar
        unidades de un ambiente, un ambiente divisible
      "
            datos="dfgdfg"
          ></CardEmprendimiento>

<CardEmprendimiento
            dir="Capital federal, Argentina"
            imgUrl={img3}
            titulo="Lavalleja 1200"
            adrress="Lavalleja 1200"
            descripcion="
        El edificio se eleva en una esquina tradicional de la
        ciudad, en el cruce de Av. Cordoba y Lavalleja, ante un lote
        irregular, en el comienzo del proyecto tuvimos que
        considerar las reglamentaciones vigentes aplicadas por el
        gobierno de la ciudad autonoma de buenos aires, en lo
        referente a volumen constructivo permitido y alturas
        maximas. Con esa premisa llegamos a la conclusion de generar
        unidades de un ambiente, un ambiente divisible
      "
            datos="dfgdfg"
          ></CardEmprendimiento>
        </div>
      </div>
    </>
  );
}
