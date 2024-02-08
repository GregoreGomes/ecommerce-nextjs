"use client";

import React from 'react';

export default  function RegisterPage() {
  return (
        <div className="flex">
      <div className="w-full bg-slate-100 flex items-center justify-center ">
        <div className="bg-white p-8 w-96 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-slate-950">Registre-se</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              placeholder="Seu nome"
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-900"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>

  );
}

