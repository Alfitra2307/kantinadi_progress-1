import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = () => {
      const userEmail = localStorage.getItem("userEmail");
      const username = localStorage.getItem("username");

      if (!userEmail || !username) {
        navigate("/login");
        return;
      }

      setUser({ name: username, email: userEmail });
    };

    getUserData();
  }, [navigate]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-16 lg:ml-0">
        <Header user={user} />
        <Outlet /> {/* Komponen ini akan digantikan oleh konten halaman */}
      </div>
    </div>
  );
};

export default MainLayout;
