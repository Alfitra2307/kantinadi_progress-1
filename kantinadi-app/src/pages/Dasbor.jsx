import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Stats from '../components/Stats';
import TransactionsTable from '../components/TransactionsTable';
import IncomeModal from '../components/IncomeModal';

const Dasbor = () => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      navigate('/dasbor');
      return;
    }
    setUser({ name: 'Retno', email: userEmail });
    setTransactions([]); 
  }, [navigate]);

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
  };

  const stats = useMemo(() => {
    const totalIncome = transactions.reduce((sum, t) => sum + parseInt(t.total), 0);
    const totalSales = transactions.length;
    const avgIncome = (totalIncome / (totalSales || 1)).toFixed(3);

    return {
      avgIncome: `Rp ${avgIncome}`,
      totalSales,
    };
  }, [transactions]);

  const filteredTransactions = transactions.filter((transaction) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      transaction.id.toLowerCase().includes(lowerCaseQuery) ||
      transaction.date.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex-1 p-6 ml-16 lg:ml-0">
        <Header user={user} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
          transactions={filteredTransactions}
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
    </div>
  );
};

export default Dasbor;
