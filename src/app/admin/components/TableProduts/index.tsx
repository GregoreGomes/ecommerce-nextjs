'use client'

import {  ref, set, remove  } from 'firebase/database';
import { useObject } from 'react-firebase-hooks/database';
import { database } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import { TrashIcon } from '@/components/Icons/cart';
import { DownloadFile } from '../DownloadFile';

interface PropsDataProducts {
  id: string;
  codigoProduto: string;
  descriptionProduct: string;
  titleProduct: string;
  valueProduct: string;
  imageURL: string;
}

export default function TableProduct() {

  const [ snapshot, loading, error ] = useObject(ref(database, 'Produtos'));
  const [ data, setData ] = useState<PropsDataProducts[]>([]);

  function deleteProduct(id: string) {
    const productRef = ref(database, `Produtos/${id}`);

    remove(productRef)
  }
  
  useEffect(() => {
    if (snapshot && snapshot.exists() && snapshot.hasChildren()) {
      const tempChildDataArray: PropsDataProducts[] = [];
    
      snapshot.forEach((childSnapshot) => {
        const id = childSnapshot.key;
        const data = childSnapshot.val();
        const dataWithId = { ...data, id };
        tempChildDataArray.push(dataWithId);
      });
      setData(tempChildDataArray);
    }
  }, [ snapshot ]);

  return (
    <>
    
      <>
        <div className="rounded-lg border border-gray-200 h-full bg-white p-10 relative w-full">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-left text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Código do Produto</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Descrição do Produto</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Produto</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Valor do produto</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
              {data && data.map((e, index) => (
                <>
                <tr>
                  <td className="whitespace-nowrap px-4 py-5 font-medium text-gray-900">{e.codigoProduto}</td>
                  <td className="whitespace-nowrap px-4 py-5 text-gray-700">{e.descriptionProduct}</td>
                  <td className="whitespace-nowrap px-4 py-5 text-gray-700">{e.titleProduct}</td>
                  <td className="whitespace-nowrap px-4 py-5 text-gray-700">R$ {e.valueProduct}</td>
                  <td className="whitespace-nowrap px-4 text-gray-700 flex justify-center"><DownloadFile nameFile={e.titleProduct}/></td>
                  <td className="whitespace-nowrap px-4 py-5 text-gray-700">R$ {e.imageURL}</td>
                  <div className='py-5'>
                    <TrashIcon onClick={() => deleteProduct(e.id)} />
                  </div>
                </tr>
                </>
                 ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </>

    </>
);

}