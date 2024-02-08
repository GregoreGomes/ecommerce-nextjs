"use client";
import React, { useState, ChangeEvent } from 'react';
import useFetch from "@/useHook/UseFetch";
import { useEffect } from "react";

export default function LoginPage() {

  const { data, error, request } = useFetch();
  const [email, setEmail] = useState('');

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Email digitado:', email);
  };
  
  useEffect(() => {
    request({
      url: 'https://commerce-api-mte6.onrender.com',
      method: 'POST'
    });
  }, [request]);

  return (
    <div className="flex">
      <div className="w-full  bg-slate-100 flex items-center justify-center">
        <div className="bg-white p-8 w-96 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-slate-950">Faça login</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
            htmlFor="email" 
            className="block text-gray-600 text-sm font-medium mb-2"
            onChange={handleChangeEmail}
            >
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
          </form>
        </div>
      </div>
    </div>
  );
};


