import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', uv: 3 },
  { name: 'February', uv: 4 },
  { name: 'March', uv: 7 },
  { name: 'April', uv: 2 },
  { name: 'May', uv: 2 },
  { name: 'June', uv: 2 },
  { name: 'July', uv: 5 },
  { name: 'August', uv: 7 },
  { name: 'September', uv: 8 },
  { name: 'October', uv: 2 },
];

export default function MonthlyReturnsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#7b2cbf" />
      </BarChart>
    </ResponsiveContainer>
  );
}
