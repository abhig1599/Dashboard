"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BalanceChart = () => {
  const data = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [
      {
        label: 'Balance Overview',
        data: [10, 20, 30, 25, 40],
        borderColor: '#6c63ff',
        backgroundColor: 'rgba(108, 99, 255, 0.5)',
        tension: 0.3, // For smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overview of your balance',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BalanceChart;
