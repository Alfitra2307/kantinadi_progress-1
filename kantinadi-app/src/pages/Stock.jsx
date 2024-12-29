import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodStock = () => {
  const [foods, setFoods] = useState([]);

  // Ambil data stok makanan dari db.json
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:5000/foods');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  // Fungsi untuk menambah stok makanan
  const handleIncrease = async (id) => {
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        food.stock += 1;
      }
      return food;
    });
    setFoods(updatedFoods);

    try {
      await axios.put(`http://localhost:5000/foods/${id}`, {
        ...updatedFoods.find((food) => food.id === id),
      });
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  // Fungsi untuk mengurangi stok makanan
  const handleDecrease = async (id) => {
    const updatedFoods = foods.map((food) => {
      if (food.id === id && food.stock > 0) {
        food.stock -= 1;
      }
      return food;
    });
    setFoods(updatedFoods);

    try {
      await axios.put(`http://localhost:5000/foods/${id}`, {
        ...updatedFoods.find((food) => food.id === id),
      });
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-center">Stok Makanan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div key={food.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
            <p className="text-gray-600 mb-4">Stok: {food.stock}</p>
            
            {/* Button untuk menambah dan mengurangi stok */}
            <div className="flex gap-4">
              <button
                onClick={() => handleIncrease(food.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Tambah
              </button>
              <button
                onClick={() => handleDecrease(food.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Kurang
              </button>
            </div>

            {/* Alert jika stok hampir habis */}
            {food.stock <= 1 && (
              <div className="mt-4 text-red-500 text-sm font-bold">
                Stok hampir habis!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodStock;
