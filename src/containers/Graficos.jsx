import React from "react";
import LinesChart from "../components/Graficos/LinesChart";
import BarsChart from "../components/Graficos/BarsChart";
import PiesChart from "../components/Graficos/PiesChart";
import useUsersStore from "../state/useUsersStore";
import { getUsuarios } from "../services/usuarioServices";
import { useEffect } from "react";
import { activeUsers } from "../utils/activeUsers";
import { reservasPorActividad } from "../utils/reservationByActivity";
import { getActividadesService } from "../services/actividadesService";
import useActividades from "../state/useActividades";
import { obtenerReservasPorMes } from "../utils/obtenerReservasPorMes";

const styles = {
  width: "40%",
  height: "290px",
  borderRadius: "10px",
  padding: "10px 0",
};

function Graficos() {
  const { usuarios, setAllUsuarios } = useUsersStore();
  const { actividades, setActividades } = useActividades();
  const { activosxmes, registrosxmes } = activeUsers(usuarios);

  const result = reservasPorActividad(actividades);
  const actividadesxMes = obtenerReservasPorMes(actividades);

  const getDataUsers = async () => {
    const getUsersData = await getUsuarios();
    setAllUsuarios(getUsersData);
  };

  const getDataActivity = async () => {
    const getActivityData = await getActividadesService();
    setActividades(getActivityData);
  };

  useEffect(() => {
    getDataUsers();
    getDataActivity();
  }, []);

  return (
    <section className="splash">
      <div className="container">
        <h1 className="titulo">Gráficas DUO GYM</h1>
        <div>
          <p className="m-2 h5 text-center">
            <b>1: </b>Usuarios registrados:
          </p>
          <div
            className="bg-light mx-auto px-2 border border-2 border-primary"
            style={styles}
          >
            <LinesChart
              activosxmes={activosxmes}
              registrosxmes={registrosxmes}
            />
          </div>
        </div>
        <hr className="mt-3 mb-2" />
        <div>
          <p className="m-2 h5 text-center">
            <b>#2: </b>Reserva de actividades por mes:
          </p>
          <div
            className="bg-light mx-auto px-2 border border-2 border-primary"
            style={styles}
          >
            <BarsChart actividadesxMes={actividadesxMes} />
          </div>
        </div>
        <hr className="mt-3 mb-2" />
        <div>
          <p className="m-2 h5 text-center">
            <b>#3: </b>Total reserva de actividades:
          </p>
          <div
            className="bg-light mx-auto border border-2 border-primary"
            style={styles}
          >
            <PiesChart actividades={result} />
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
