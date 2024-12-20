import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PaymentsImage from '../assets/images/Paymentsimage.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dasbor', path: '/dasbor' },
    { name: 'Pesanan Baru', path: '/PesananBaru' },
    { name: 'Pelanggan', path: '/pelanggan' },
    { name: 'Insight', path: '/insight' },
  ];

  const settingMenu = [
    { name: 'Dukungan', path: '/dukungan' },
    { name: 'Akun', path: '/akun' },
    { name: 'Pusat Bantuan', path: '/pusat-bantuan' },
    { name: 'Keluar', path: '/keluar' },
  ];

  return (
    <div
    className={`absolute lg:relative top-0 left-0 bg-gray-900 shadow-md w-fit max-w-[250px] h-screen z-50 lg:z-auto transition-transform transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}
    >
      <div className="p-6">
        <img src={PaymentsImage} alt="Payments" className="w-full h-auto mb-4" />
        <h1 className="text-xl font-bold font-baloo text-white">Kantin "Adi" UAD</h1>
        <h2 className="text-2xl font-bold font-baloo text-white">Cashier</h2>
        <h2 className="text-lg font-bold font-baloo text-gray-400 mt-12">Main Menu</h2>
        <nav className="mt-4">
          <ul>
            {menuItems.map((item, idx) => (
              <li key={idx} className="mb-4">
                <NavLink
                  to={item.path}
                  className={`block px-4 py-2 rounded ${
                    location.pathname === item.path
                      ? ' text-white'
                      : 'text-white hover:text-blue-500'
                  }`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-bold font-baloo text-gray-400 mt-3">Pengaturan</h2>
        <nav className="mt-4">
          <ul>
            {settingMenu.map((item, idx) => (
              <li key={idx} className="mb-4">
                <NavLink
                  to={item.path}
                  className={`block px-4 py-2 rounded ${
                    location.pathname === item.path
                      ? ' text-white'
                      : 'text-white hover:text-blue-500'
                  }`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
