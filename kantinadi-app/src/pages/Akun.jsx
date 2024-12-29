const Akun = () => {
    return (
      <div className="w-full h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Informasi Akun</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Profil
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Avatar"
              className="w-24 h-24 rounded-full border"
            />
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">johndoe@example.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-gray-600">Role</h4>
              <p className="text-gray-800">Admin</p>
            </div>
            <div>
              <h4 className="text-gray-600">Tanggal Bergabung</h4>
              <p className="text-gray-800">10 Januari 2022</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Akun;
  