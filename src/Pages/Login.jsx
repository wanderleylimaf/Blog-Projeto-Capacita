import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/arcade-bg.png";

export default function Login() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const HandleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'senha') {
      setSenha(value);
    }
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    if (!email || !senha) {
      setError('Preencha os campos obrigatórios');
    } else {
      console.log('Login com:', { email, senha });
      setError('');
      navigate('/home'); // redirecionamento correto
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={HandleSubmit}
        className="bg-[#1d1d1d] text-white border-1 border-[#0e7a3f] rounded-xl shadow-[0_0_20px_#43CD80] hover:shadow-[0_0_30px_#43CD80] transition-shadow duration-300 flex flex-col gap-6 p-8 w-full max-w-md"
      >
        <h2 className="text-center font-bold text-2xl font-mono">Login</h2>

        <input
          type="text"
          name="email"
          value={email}
          onChange={HandleChange}
          placeholder="user@email.com"
          className="bg-gray-200 border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43CD80] text-black placeholder-gray-500"
        />

        <input
          type="password"
          name="senha"
          value={senha}
          onChange={HandleChange}
          placeholder="********"
          className="bg-gray-200 border border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43CD80] text-black placeholder-gray-500"
        />

        <button
          onClick={() => navigate('/home')}
          className="text-white bg-[#43CD80] text-center rounded-lg px-4 py-2 hover:bg-green-500 transition-colors font-bold"
        >
          Login
        </button>

        {error && (
          <p className="text-red-500 text-sm font-medium">Ocorreu um erro: {error}</p>
        )}

        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-[#43CD80] border border-[#43CD80] rounded-lg px-4 py-2 hover:bg-[#43CD80] hover:text-black transition-colors"
        >
          Não tem conta?
        </button>
      </form>
    </div>
  );
}
