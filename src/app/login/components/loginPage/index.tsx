"use client";
import React, { useEffect, useState } from 'react';
import { auth, database } from '@/firebase/firebase';
import { redirect } from 'next/navigation';
import { ref } from 'firebase/database';
import { useObject } from 'react-firebase-hooks/database';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from "react-firebase-hooks/auth"

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [SignInUserWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [snapshot, Emailloading, Emailerror] = useObject(ref(database, 'Client'));
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (snapshot && snapshot.exists() && snapshot.hasChildren()) {
      const tempChildDataArray: any[] = [];
      snapshot.forEach((childSnapshot) => {
        tempChildDataArray.push(childSnapshot.val());
      });
      setData(tempChildDataArray);
    }
  }, [snapshot]);

  const [sendPasswordResetEmail, resetEmail, resetError] = useSendPasswordResetEmail(auth);

  const handleForgotPassword = async () => {
    if (data.some(item => item.email === email)) {
      sendPasswordResetEmail(email);
      displayAlert("Redefinição de senha enviada para o seu e-mail");
    } else {
      displayAlert("Digite um e-mail existente!");
    }
  };

  const displayAlert = (message: string) => {
    const alertElement = document.createElement("div");
    alertElement.className = `fixed top-0 left-0 w-full h-full flex items-start justify-center mt-32`;
    alertElement.innerHTML = `
    <div class="bg-black  w-80 p-8 text-center animAlert transform transition-transform duration-200 ease-in">
    <p class="text-xl text-white">${message}</p>
  </div>
    `;
    document.body.appendChild(alertElement);
    setTimeout(() => {
      alertElement.remove();
    }, 2000);
  };

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
      <div className="w-full  bg-slate-100 flex items-center justify-center">
        <div className="bg-white p-8 w-96 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-slate-950">Faça login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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
            <div className="mb-4">
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
              <button className="text-blue-500 hover:underline" onClick={handleForgotPassword}>
                Esqueceu sua senha?
              </button>
            </div>
            {resetEmail && <div className="text-green-500 mt-2">Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail.</div>}
          </form>
        </div>
      </div>
    </div>
  );
};
