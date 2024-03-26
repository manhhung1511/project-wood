
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Thống kê truy cập",
      backgroundColor: "#C25406",
      borderColor: "#C25406",
      data: [200, 400, 300, 800, 250, 500, 1400],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;