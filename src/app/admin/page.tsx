'use client'

import { useEffect, useState } from "react";
import { push, ref, set } from "firebase/database";
import { database } from '@/firebase/firebase';
import TableProduct from "./components/TableProduts";

export default function Admin() {

  const [ codigoProduto, setCodigoProduto ] = useState('')
  const [ titleProduct, setTitleProduct ] = useState('')
  const [ valueProduct, setValueProduct ] = useState('')
  const [ descriptionProduct, setDescriptionProduct ] = useState('')
  const [ submitOk, setSubmitOk ] = useState(false)


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    try {
      const usersRef = ref(database, "Produtos");
      const newDataRef = push(usersRef);
      set(newDataRef, {
        codigoProduto: codigoProduto,
        titleProduct: titleProduct,
        valueProduct: valueProduct,
        descriptionProduct: descriptionProduct,
      })
      setSubmitOk(true)
      setCodigoProduto('')
      setTitleProduct('')
      setValueProduct('')
      setDescriptionProduct('')
    } catch (error) {
      alert(error)
    }
  };

  return (
    <>
    <div className="flex gap-40">
      <div className=" flex justify-center items-center h-screen w-2/6 flex-col">
      <form onSubmit={handleSubmit} className="w-full mx-auto p-16">
        <div className="relative z-0 w-full mb-5 group">
            <input 
            type="text" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "
            required 
            value = {codigoProduto}
            onChange={(e) => (setCodigoProduto(e.target.value))}
            />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Código do produto
            </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input 
            type="text" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "
            required
            value = {titleProduct}
            onChange={(e) => (setTitleProduct(e.target.value))}
            />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Título do produto
            </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input 
            type="text" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=""
            required 
            value={valueProduct}
            onChange={(e) => (setValueProduct(e.target.value))}
            />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Valor do produto
            </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input 
            type="text" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "
            required 
            value={descriptionProduct}
            onChange={(e) => (setDescriptionProduct(e.target.value))}
            />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Descrição do produto
            </label>
        </div>
        {submitOk && (<div className="text-green-500 mt-2 mb-4">{`Produto adicionado com sucesso`}</div>)}
        <button 
        type="submit" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
          </button>
      </form>
      </div>
      <div className="flex justify-center items-left flex-col w-full m-14">
        <TableProduct />
      </div>
    </div>
    </>
  );
}