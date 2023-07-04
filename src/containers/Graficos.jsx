import React from "react";
import LinesChart from "../components/Graficos/LinesChart";
import BarsChart from "../components/Graficos/BarsChart";
import PiesChart from "../components/Graficos/PiesChart";

function Graficos() {
  return (
    <section className="splash">
      <div className="container">
        {/* Aquí incluiré las gráficas (un componente por cada ejemplo). */}
        <h1 className="titulo">Gráficas DUO GYM</h1>
        <div>
          <p className="m-2">
            <b>#1: </b>Usuarios registrados:
          </p>
          <div
            className="bg-light mx-auto px-2 border border-2 border-primary"
            style={{ width: "50%", height: "290px" }}
          >
            <LinesChart />
          </div>
        </div>
        <hr className="mt-3 mb-2" />
        <div>
          <p className="m-2">
            <b>#2: </b>Reserva de actividades por mes:
          </p>
          <div
            className="bg-light mx-auto px-2 border border-2 border-primary"
            style={{ width: "50%", height: "280px" }}
          >
            <BarsChart />
          </div>
        </div>
        <hr className="mt-3 mb-2" />
        <div>
          <p className="m-2">
            <b>#3: </b>Total reserva de actividades:
          </p>
          <div
            className="bg-light mx-auto border border-2 border-primary"
            style={{ width: "50%", height: "270px", padding: "5px" }}
          >
            <PiesChart />
            <div
              style={{ width: "100%", height: "100%", padding: "10px 0" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Graficos;
