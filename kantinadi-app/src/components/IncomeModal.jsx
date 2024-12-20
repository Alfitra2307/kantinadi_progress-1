import React, { useState, useEffect } from 'react';

const IncomeModal = ({ isOpen, onClose, onAddIncome, editingTransaction, onUpdateIncome }) => {
  const [incomeData, setIncomeData] = useState({
    id: '',
    status: 'Berhasil',
    date: '',
    total: '',
    metode: '',
  });

  useEffect(() => {
    if (editingTransaction) {
      setIncomeData(editingTransaction);
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (incomeData.id && incomeData.date && incomeData.total && incomeData.metode) {
      if (editingTransaction) {
        onUpdateIncome(incomeData); // Update transaction
      } else {
        onAddIncome(incomeData); // Add new transaction
      }
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md w-96">
          <h2 className="text-lg font-bold mb-4">{editingTransaction ? 'Edit Pemasukan' : 'Tambah Pemasukan'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Order ID (6 digit)"
              className="w-full mb-4 px-3 py-2 border rounded"
              maxLength={6}
              value={incomeData.id}
              onChange={(e) => setIncomeData({ ...incomeData, id: e.target.value })}
            />
            <input
              type="date"
              className="w-full mb-4 px-3 py-2 border rounded"
              value={incomeData.date}
              onChange={(e) => setIncomeData({ ...incomeData, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Total Harga"
              className="w-full mb-4 px-3 py-2 border rounded"
              value={incomeData.total}
              onChange={(e) => setIncomeData({ ...incomeData, total: e.target.value })}
            />
            <select
              className="w-full mb-4 px-3 py-2 border rounded"
              value={incomeData.metode}
              onChange={(e) => setIncomeData({ ...incomeData, metode: e.target.value })}
            >
              <option value="">Pilih Metode</option>
              <option value="Cash">Cash</option>
              <option value="Qris">Qris</option>
            </select>
            <div className="flex justify-end gap-4">
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
                Batal
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {editingTransaction ? 'Perbarui' : 'Simpan'}
              </button>
              </div>
          </form>
        </div>
      </div>
    )
  );
};

export default IncomeModal;
