import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { generateRandomColors } from "../../utils/generateRandomColors";

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default function Pies({ actividades }) {
  let activityTitle = Object.keys(actividades);
  let activityValue = Object.values(actividades);

  let actLength = Object.keys(actividades).length;
  let colors = generateRandomColors(actLength);

  var data = {
    labels: activityTitle,
    datasets: [
      {
        label: "Total Reserva de actividades",
        data: activityValue,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} options={options} />;
}
