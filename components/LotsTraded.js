"use client"
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components for Pie Chart
ChartJS.register(ArcElement, Tooltip, Legend);

const LotsTraded = () => {
  const data = {
    labels: ['EUR/USD', 'USD/JPY', 'GBP/USD', 'Others'],
    datasets: [
      {
        label: '# of Lots Traded',
        data: [40, 30, 20, 10], // Example data
        backgroundColor: [
          '#6c63ff', // Color for EUR/USD
          '#ff6384', // Color for USD/JPY
          '#36a2eb', // Color for GBP/USD
          '#ffcd56', // Color for Others
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw} lots`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 w-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default LotsTraded;
