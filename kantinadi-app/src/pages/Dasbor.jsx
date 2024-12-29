import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Stats from '../components/Stats';
import TransactionsTable from '../components/TransactionsTable';
import IncomeModal from '../components/IncomeModal';
import axios from 'axios';

const Dasbor = () => {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const navigate = useNavigate();
  const API_URL = 'http://localhost:5000/transactions'; // Endpoint JSON Server

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(API_URL);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const addTransaction = async (newTransaction) => {
    try {
      const response = await axios.post(API_URL, newTransaction);
      setTransactions((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const updateTransaction = async (updatedTransaction) => {
    try {
      const response = await axios.put(`${API_URL}/${updatedTransaction.id}`, updatedTransaction);
      setTransactions((prev) =>
        prev.map((transaction) =>
          transaction.id === updatedTransaction.id ? response.data : transaction
        )
      );
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const stats = useMemo(() => {
    const totalIncome = transactions.reduce((sum, t) => sum + parseInt(t.total), 0);
    const totalSales = transactions.length;
    const avgIncome = (totalIncome / (totalSales || 1)).toFixed(2);

    return {
      avgIncome: `Rp ${avgIncome}`,
      totalSales,
    };
  }, [transactions]);

  return (
    <div className="p-6 ml-16 lg:ml-0">
      <button
        onClick={() => {
          setEditingTransaction(null);
          setIsModalOpen(true);
        }}
        className="bg-green-500 text-white px-4 py-2 mb-4 rounded-md"
      >
        Tambah Pemasukan
      </button>
      <Stats avgIncome={stats.avgIncome} totalSales={stats.totalSales} />
      <TransactionsTable
        transactions={transactions}
        onEditTransaction={(transaction) => {
          setEditingTransaction(transaction);
          setIsModalOpen(true);
        }}
        onDeleteTransaction={deleteTransaction}
      />
      <IncomeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddIncome={addTransaction}
        editingTransaction={editingTransaction}
        onUpdateIncome={updateTransaction}
      />
    </div>
  );
};

export default Dasbor;
