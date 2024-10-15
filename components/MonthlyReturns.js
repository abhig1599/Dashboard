"use client"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the bar chart components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '% Per Month',
      data: [5, 8, 3, 6, 9, 4, 7],
      backgroundColor: 'purple',
    },
  ],
};

const MonthlyReturns = () => {
  return <Bar data={data} />;
};

export default MonthlyReturns;
