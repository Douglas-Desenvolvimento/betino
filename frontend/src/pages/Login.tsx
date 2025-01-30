import React, { useState } from "react";
import axios from "axios";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
        console.log("Enviando dados:", { email, password });
      const res = await axios.post("http://192.168.225.26:3131/api/auth/login", {
        email,
        password,
      });
      console.log("Usuário logado:", res.data);
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error.message);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="p-2 border mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="p-2 border mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
        Entrar
      </button>
    </div>
    </>
  );
}
