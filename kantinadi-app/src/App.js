import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DasborPage from './pages/Dasbor';
import Stockmakanan from './pages/Stock';
import InsightPage from './pages/InsightPage';
import Akun from './pages/Akun';
import Dukungan from './pages/Dukungan';
import Keluar from './pages/Keluar';
import PusatBantuan from './pages/PusatBantuan';
import Pelanggan from './pages/Pelanggan';
import MainLayout from './components/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute untuk Login dan Register */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rute untuk halaman dengan MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dasbor" element={<DasborPage />} />
          <Route path="stock" element={<Stockmakanan />} />
          <Route path="insight" element={<InsightPage />} />
          <Route path="akun" element={<Akun />} />
          <Route path="dukungan" element={<Dukungan />} />
          <Route path="keluar" element={<Keluar />} />
          <Route path="pusat-bantuan" element={<PusatBantuan />} />
          <Route path="pelanggan" element={<Pelanggan />} />
        </Route>

        {/* Rute fallback */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
