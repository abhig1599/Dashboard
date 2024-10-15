// pages/index.js
import Navbar from '@/components/Navbar';
import DashboardCards from '@/components/DashboardCards';
import BalanceChart from '@/components/BalanceChart';
import LotsTraded from '@/components/LotsTraded';  // Updated to include the Pie Chart
import TopPerformers from '@/components/TopPerformers';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen ml-56">
      {/* flex-1 bg-gray-100 min-h-screen p-6 ml-64 */}
      <Navbar name="Dashboard" />
      <div className="p-6">
        <DashboardCards />

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Balance Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Balance Chart</h3>
            <BalanceChart />
          </div>

          {/* Lots Traded Pie Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Lots Traded per Instrument</h3>
            <LotsTraded />
          </div>

        </div>

        {/* Top Performers Section */}
        <TopPerformers />
        
      </div>
    </div>
  );
}
