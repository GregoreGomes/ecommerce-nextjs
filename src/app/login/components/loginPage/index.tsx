"use client";
import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="w-full  bg-slate-100 flex items-center justify-center">
        <div className="bg-white p-8 w-96 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-slate-950">Faça login</h2>
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
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-900"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


