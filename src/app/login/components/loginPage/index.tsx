"use client";
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase/firebase';
import { redirect } from 'next/navigation';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import ForgotPassword from '../forgotPassword/index';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [SignInUserWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SignInUserWithEmailAndPassword(email, password)
  };

  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      setLoginError("Email ou senha inválido");
    }
  }, [error]);

  return (
    <div className="flex">
      <div className="w-full  bg-slate-100 flex items-center justify-center animaTranslateX">
        <div className="bg-white p-8 w-96 shadow-sm ">
          <h2 className="text-2xl font-semibold mb-4 text-slate-950">Faça login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded hover:bg-gray-900"
            >
              Login
            </button>
            {loginError && <div className="text-red-500 mt-2">{loginError}</div>}
            <div className="mt-4 text-center">
              <ForgotPassword email={email} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
