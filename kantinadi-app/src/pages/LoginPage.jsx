import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Firebase sign-in method
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Simpan email pengguna ke localStorage
      localStorage.setItem("userEmail", user.email);

      // Navigasi ke dashboard
      navigate("/dasbor");
    } catch (error) {
      setError("Email atau password salah");
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="flex h-screen font-baloo">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Selamat Datang
          <br />
          di Kantin <span className="italic">"Adi"</span>
          <br />
          <span className="text-xl font-bold">Universitas Ahmad Dahlan</span>
        </h1>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        <p className="mt-4 text-sm">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
