import React, { useState } from 'react';

const PesananBaru = () => {
  const [pesananData, setPesananData] = useState([
    {
      id: 1,
      namaPesanan: 'Pesanan A',
      namaMakanan: 'Pizza',
      status: 'Sedang Dikerjakan',
    },
    {
      id: 2,
      namaPesanan: 'Pesanan B',
      namaMakanan: 'Burger',
      status: 'Pesanan Masuk',
    },
    {
      id: 3,
      namaPesanan: 'Pesanan C',
      namaMakanan: 'Sushi',
      status: 'Selesai',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedData = pesananData.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setPesananData(updatedData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Pesanan Baru</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Pesanan ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Nama Pesanan</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Nama Makanan</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pesananData.map((pesanan) => (
            <tr key={pesanan.id} className="border-t border-gray-200">
              <td className="px-6 py-4 text-sm text-gray-700">{pesanan.id}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{pesanan.namaPesanan}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{pesanan.namaMakanan}</td>
              <td className="px-6 py-4">
                <select
                  value={pesanan.status}
                  onChange={(e) => handleStatusChange(pesanan.id, e.target.value)}
                  className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm"
                >
                  <option value="Sedang Dikerjakan">Sedang Dikerjakan</option>
                  <option value="Selesai">Selesai</option>
                  <option value="Pesanan Masuk">Pesanan Masuk</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm">
                  Aksi
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PesananBaru;
