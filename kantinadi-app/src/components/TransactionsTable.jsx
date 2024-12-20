import React from 'react';

const TransactionsTable = ({ transactions, onEditTransaction, onDeleteTransaction }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-md">
      <thead>
        <tr className="bg-gray-200 text-lg text-gray-800">
          {['Order ID', 'Status', 'Tanggal', 'Total Harga', 'Metode', 'Aksi'].map((header, idx) => (
            <th key={idx} className="py-3 px-4 border-b text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, idx) => (
          <tr key={idx} className="hover:bg-gray-100">
            <td className="py-3 px-4 border-b text-blue-300 font-bold">{transaction.id}</td>
            <td className="py-3 px-4 border-b">{transaction.status}</td>
            <td className="py-3 px-4 border-b">{transaction.date}</td>
            <td className="py-3 px-4 border-b">{transaction.total}</td>
            <td className="py-3 px-4 border-b">{transaction.metode}</td>
            <td className="py-3 px-4 border-b flex gap-2">
              <button
                onClick={() => onEditTransaction(transaction)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionsTable;
