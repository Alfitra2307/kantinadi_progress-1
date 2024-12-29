const Header = ({ user, searchQuery, setSearchQuery }) => (
  <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
    <input
      type="text"
      placeholder="🔍 Pencarian"
      className="w-full sm:w-2/3 lg:w-1/3 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
    />
    <div className="flex items-center gap-6">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="material-icons">notifications</span>
      </div>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <div className="hidden lg:block ml-3">
          <h3 className="text-sm font-semibold text-gray-800">{user?.name}</h3>
          <p className="text-xs text-gray-600">{user?.email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header