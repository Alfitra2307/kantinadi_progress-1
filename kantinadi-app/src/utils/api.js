const API_URL = "http://localhost:5000/transactions";

// Ambil semua data transaksi
export const getTransactions = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Tambahkan transaksi baru
export const addTransaction = async (transaction) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });
  return response.json();
};

// Perbarui transaksi
export const updateTransaction = async (id, updatedTransaction) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTransaction),
  });
  return response.json();
};

// Hapus transaksi
export const deleteTransaction = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
