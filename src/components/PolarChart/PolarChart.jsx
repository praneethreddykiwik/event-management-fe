import React, { useMemo } from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = ({ percent = 87 }) => {
  const p = Math.max(0, Math.min(100, Number(percent) || 0));

  const data = useMemo(
    () => ({
      labels: ["Completed", "Remaining"],
      datasets: [
        {
          data: [p, 100 - p],
          borderWidth: 0,

          backgroundColor: [
            "rgba(59, 130, 246, 0.85)",
            "rgba(148, 163, 184, 0.35)",
          ],
        },
      ],
    }),
    [p]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: 0 },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      scales: {
        r: {
          ticks: { display: false },
          grid: { display: false },
          angleLines: { display: false },
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
      animation: { duration: 700 },
    }),
    []
  );

  return <PolarArea data={data} options={options} />;
};

export default PolarChart;
