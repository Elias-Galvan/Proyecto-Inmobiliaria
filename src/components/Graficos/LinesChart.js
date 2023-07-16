import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// var registrosxmes = [0, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
// var activosxmes = [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25];
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

export default function LinesChart({ activosxmes, registrosxmes }) {
  var midata = {
    labels: meses,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Registrados",
        data: registrosxmes,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "activos",
        borderColor: "rgb(345, 49, 432)",
        data: activosxmes,
      },
    ],
  };
  //Trabaja en la grafica
  var misoptions = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
  };
  return <Line data={midata} options={misoptions} />;
}
