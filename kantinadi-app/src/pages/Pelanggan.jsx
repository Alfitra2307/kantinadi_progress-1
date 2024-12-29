const Pelanggan = () => {
    const customers = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+62 812 3456 7890",
        status: "Aktif",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+62 811 2345 6789",
        status: "Nonaktif",
      },
      {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        phone: "+62 813 5678 1234",
        status: "Aktif",
      },
    ];
  
    return (
      <div className="h-full w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Daftar Pelanggan</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="table-auto w-full text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-gray-600 font-semibold">Nama</th>
                <th className="px-6 py-3 text-gray-600 font-semibold">Email</th>
                <th className="px-6 py-3 text-gray-600 font-semibold">Nomor Telepon</th>
                <th className="px-6 py-3 text-gray-600 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-6 py-4 text-gray-800">{customer.name}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.email}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.phone}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        customer.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Pelanggan;
  