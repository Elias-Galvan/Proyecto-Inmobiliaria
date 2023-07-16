import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var ReservaMusc = [72, 56, 34, 36, 80, 53, 54, 87, 54, 76, 12, 60];
var ReservaCinta = [32, 43, 20, 36, 34, 40, 23, 12, 23, 43, 54, 34];
var ReservaBox = [43, 76, 76, 36, 80, 54, 30, 20, 25, 30, 17, 66];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var misoptions = {
  responsive: true,
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
    x: {
      ticks: {},
    },
  },
};

export default function Bars() {
  var midata = {
    labels: meses,
    datasets: [
      {
        label: "Musculación",
        data: ReservaMusc,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Cinta",
        data: ReservaCinta,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(345, 49, 432)",
        backgroundColor: "rgba(345, 49, 432, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(345, 49, 432)",
        pointBackgroundColor: "rgba(345, 49, 432)",
      },
      {
        label: "Boxeo",
        data: ReservaBox,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 206, 86)",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 206, 86)",
        pointBackgroundColor: "rgba(255, 206, 86)",
      },
    ],
  };

  return <Bar data={midata} options={misoptions} />;
}
