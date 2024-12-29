import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Simulasi menyimpan user baru ke JSON server
      await axios.post("http://localhost:5000/users", { username, email, password });

      // Menyimpan data ke localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("username", username);

      navigate("/login");
    } catch (err) {
      setError("Terjadi kesalahan saat registrasi.");
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen font-baloo">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Registrasi Pengguna</h1>
        <form className="w-full max-w-sm" onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Kata Sandi</label>
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Daftar
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        <p className="mt-4 text-sm">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Masuk di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
