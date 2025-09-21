import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

const Login = () => <div>Página de Login</div>;
const Cadastro = () => <div>Página de Cadastro</div>;
const Home = () => <div>Página Inicial</div>;
const Blog = () => <div>Página do Blog</div>;

const LoginAdmin = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@blog.com' && password === 'admin123') {
      localStorage.setItem('adminUser', 'true');
      onLogin();
      navigate('/admin');
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login de Administrador</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

const Dashboard = ({ onLogout }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Posts</h1>
      <button 
        onClick={onLogout} 
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600"
      >
        Sair
      </button>
      <div className="mt-8">
        <p>Conteúdo do Dashboard de Admin vai aqui.</p>
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('adminUser');

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('adminUser')
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
      <Route 
        path="/admin/login" 
        element={<LoginAdmin onLogin={handleLogin} />} 
      />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <Dashboard onLogout={handleLogout} />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;