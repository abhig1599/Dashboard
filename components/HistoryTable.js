"use client"

import { useState } from 'react';

const data = [
  // Add more data rows as needed
  {
    id: '1555422',
    symbol: 'XAUUSD',
    status: 'Buy',
    openTime: '13 May 2024 18:42',
    openPrice: '0.88589',
    closeTime: '13 May 2024 22:42',
    closePrice: '0.88591',
    volume: '1.00',
    commission: '-5$',
    pnl: '30.04$',
  },
  {
    id: '1555422',
    symbol: 'XAUUSD',
    status: 'Buy',
    openTime: '13 May 2024 18:42',
    openPrice: '0.88589',
    closeTime: '13 May 2024 22:42',
    closePrice: '0.88591',
    volume: '1.00',
    commission: '-5$',
    pnl: '30.04$',
  },
  {
    id: '1555422',
    symbol: 'XAUUSD',
    status: 'Buy',
    openTime: '13 May 2024 18:42',
    openPrice: '0.88589',
    closeTime: '13 May 2024 22:42',
    closePrice: '0.88591',
    volume: '1.00',
    commission: '-5$',
    pnl: '30.04$',
  },
];

const HistoryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3; // Control how many rows are displayed per page

  // Pagination logic
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startRow = (currentPage - 1) * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const paginatedData = data.slice(startRow, endRow);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="border border-purple-400 rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">History Closed Positions</h3>
      <table className="w-full text-left table-auto">
        <thead className="text-sm uppercase text-gray-600 border-b border-gray-300">
          <tr>
            <th className="py-2">Position ID</th>
            <th>Symbol</th>
            <th>Status</th>
            <th>Open Time</th>
            <th>Open Price</th>
            <th>Close Time</th>
            <th>Close Price</th>
            <th>Volume</th>
            <th>Commission</th>
            <th>PnL</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="py-2">{row.id}</td>
              <td>{row.symbol}</td>
              <td className="text-green-500">{row.status}</td>
              <td>{row.openTime}</td>
              <td>{row.openPrice}</td>
              <td>{row.closeTime}</td>
              <td>{row.closePrice}</td>
              <td>{row.volume}</td>
              <td>{row.commission}</td>
              <td className="text-green-500">{row.pnl}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="py-1 px-3 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="flex items-center space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`py-1 px-3 rounded-md ${
                currentPage === i + 1
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="py-1 px-3 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HistoryTable;
