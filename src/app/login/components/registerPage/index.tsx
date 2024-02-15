import React, { useState } from 'react';

import { auth, database} from '@/firebase/firebase';
import {
  useCreateUserWithEmailAndPassword
}from "react-firebase-hooks/auth"

import {  push, ref, set } from "firebase/database";

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    createUserWithEmailAndPassword(email, password)
    try {
      const usersRef = ref(database, "Client");
      const newDataRef = push(usersRef);
      set(newDataRef, {
        name: name,
        email: email,
        password: password
      })
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    } catch (error) {
      alert(error)
    }
  };

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error
] = useCreateUserWithEmailAndPassword(auth);

const verificationPasswaord = () =>{
  if (password === "") {
    return false;
  }
  if (password == confirmPassword) {
    return true;
  }
  else{
    return false;
  }
}


  return (
    <div className="flex">
      <div className="w-full bg-slate-100 flex items-center justify-center ">
        <div className="bg-white p-8 w-96 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-slate-950">Registre-se</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                placeholder="Seu nome"
                value={name}
                onChange={(e)=> setName(e.target.value) }
              />
            </div>
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
                onChange={(e)=> setEmail(e.target.value) }
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
                placeholder="Sua senha com 6 caracteres"
                value={password}
                onChange={(e)=> setPassword(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-600 text-sm font-medium mb-2">
                Confirme a Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border rounded"
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value) }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded scale-100 ease-out duration-300 disabled:opacity-25 disabled:scale-95"
              disabled={verificationPasswaord() ? false : true}
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
