import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ dataMonth, dataRevenue }) => {
  const data = {
    labels: dataMonth,
    datasets: [
      {
        label: "Sales",
        data: dataRevenue, // Dữ liệu trục y tương ứng
        fill: true, // Không fill màu dưới đường line
        borderColor: "#3B82F6", // Màu của đường line
        tension: 0.1, // Độ cong của đường
      },
    ],
  };

  const options = {
    responsive: true, // Chart tự co giãn theo kích thước màn hình
    maintainAspectRatio: false, // Bỏ tỉ lệ cố định
    plugins: {
      legend: {
        position: "top", // Vị trí của chú thích
      },
    },
  };

  return <Line className="w-full" data={data} options={options} />;
};

export default LineChart;
