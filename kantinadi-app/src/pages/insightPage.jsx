import React, { useEffect, useState } from "react";

const InsightPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        const income = data.reduce((sum, t) => {
          const amount = parseInt(t.total.replace(/[^\d]/g, ""), 10);
          return t.status === "Sukses" ? sum + amount : sum;
        }, 0);
        setTotalIncome(income);
      });
  }, []);

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Insight Transaksi</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Pendapatan</h3>
          <p className="text-2xl font-bold text-green-600">Rp{totalIncome.toLocaleString()}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-600">Total Transaksi</h3>
          <p className="text-2xl font-bold text-yellow-600">{transactions.length}</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-600">Transaksi Sukses</h3>
          <p className="text-2xl font-bold text-blue-600">
            {transactions.filter((t) => t.status === "Sukses").length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightPage;
