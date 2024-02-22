"use client";
import React, { useEffect, useState } from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { ref } from 'firebase/database';
import { database } from '@/firebase/firebase';
import Image from 'next/image';

interface Product {
  codigoProduto: string;
  descriptionProduct: string;
  titleProduct: string;
  valueProduct: string;
}

const ProductCard = ({ codigoProduto, titleProduct, valueProduct }: Product) => {
  const [isHovered, setIsHovered] = useState(false);

  const effectImage = () => {
    setIsHovered(true);
  };
  const resetEffect = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center mb-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
      <div className="bg-gray-200 shadow-xl overflow-hidden flex flex-col justify-center items-center mx-3 cursor-pointer duration-200 hover:bg-gray-300" onMouseOver={effectImage} onMouseOut={resetEffect}>
        <div className={`md:flex-shrink-0 w-full py-16 duration-500 ${isHovered ? 'transform scale-110 transition-transform' : ''}`}>
          <Image src="/product1.png" alt="Imagem do Produto" width={600} height={800} />
        </div>
        <div className="mt-6 w-full flex flex-col h-12 justify-around px-6 pb-8">
          <div className="uppercase tracking-wide text-xs sm:text-sm text-gray-500 font-semibold">{codigoProduto}</div>
          <div className="mt-2 flex items-center justify-between">
            <h1 className="text-gray-900 text-sm font-bold syncopate-regular">{titleProduct}</h1>
            <p className="text-gray-900 font-bold text-lg sm:text-xl syncopate-regular">{valueProduct}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

  const ProductList = () => {
    const [snapshot, loading, error] = useObject(ref(database, 'Produtos'));
    const [data, setData] = useState<Product[]>([]);
  
    useEffect(() => {
      if (snapshot && snapshot.exists() && snapshot.hasChildren()) {
        const tempChildDataArray: Product[] = [];
  
        snapshot.forEach((childSnapshot) => {
          tempChildDataArray.push(childSnapshot.val());
        });
        setData(tempChildDataArray);
      }
    }, [snapshot]);
  
    return (
      <div className="flex flex-wrap justify-center">
        {data.map((product, index) => (
          <ProductCard
            key={index}
            codigoProduto={product.codigoProduto}
            descriptionProduct={product.descriptionProduct}
            titleProduct={product.titleProduct}
            valueProduct={product.valueProduct}
          />
        ))}
      </div>
    );
  }

export default ProductList;
