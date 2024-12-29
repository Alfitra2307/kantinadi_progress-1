const Keluar = () => {
    return (
      <div className="w-full h-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keluar</h2>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <p className="text-gray-700 mb-4">
            Apakah Anda yakin ingin keluar?
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Keluar
          </button>
        </div>
      </div>
    );
  };
  
  export default Keluar;
  