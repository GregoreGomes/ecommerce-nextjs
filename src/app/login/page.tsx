"use client";
import React, { useState } from 'react';
import Header from '../../components/Header';
import LoginPage from './components/loginPage/index';
import RegisterPage from './components/registerPage/index';

export default function Login() {
  const [showLogin, setShowLogin] = useState(true);

  const buttonText = showLogin ? "Não tem uma conta? Crie agora." : "Voltar para Login";

  const handleRegisterSuccess = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Header />
      <div className="h-screen bg-gray-300 flex flex-col justify-center items-center">
        {showLogin ? <LoginPage /> : <RegisterPage onRegisterSuccess={handleRegisterSuccess} />}
        <button
          onClick={() => setShowLogin(!showLogin)}
          className={`text-slate-950 p-4`}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
