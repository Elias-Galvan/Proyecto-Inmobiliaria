import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
  responsive: true,
  maintainAspectRatio: false,
};

var tReservaMusc = 55;
var tReservaCinta = 35;
var tReservaBox = 20;
var data = {
  labels: ["Musculación", "Cinta", "Boxeo"],
  datasets: [
    {
      label: "Total Reserva de actividades",
      data: [tReservaMusc, tReservaCinta, tReservaBox],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Pies() {
  return <Pie data={data} options={options} />;
}
