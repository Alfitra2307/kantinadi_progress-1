import React from 'react';

const Stats = ({ avgIncome, totalSales }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-gray-700">Rata-rata Pendapatan</h3>
      <p className="text-xl text-green-500">{avgIncome}</p>
    </div>
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-gray-700">Total Penjualan</h3>
      <p className="text-xl text-green-500">{totalSales}</p>
    </div>
  </div>
);

export default Stats;
