// components/Dashboard.js
export default function Dashboard() {
  return (
    <div className="p-">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Deposit Card */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold">Deposit</h3>
          <p className="text-2xl">0</p>
          <p className="text-sm">0% This Week</p>
        </div>
        {/* Profit/Loss Card */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold">Profit/Loss</h3>
          <p className="text-2xl">0</p>
          <p className="text-sm">0% This Week</p>
        </div>
        {/* Total Balance Card */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold">Total Balance</h3>
          <p className="text-2xl">0</p>
          <p className="text-sm">0% This Week</p>
        </div>
        {/* Account Information Card */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold">Sebastian Adamson</h3>
          <p>MT5 account: 590754</p>
          <p className="text-sm">Login: Abcd123@@</p>
        </div>
      </div>

      {/* Additional dashboard content (e.g., charts, graphs, etc.) */}
      
    </div>
  );
}
