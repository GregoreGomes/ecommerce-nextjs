'use client'

import { ref } from 'firebase/database';
import { useObject } from 'react-firebase-hooks/database';
import { database } from '@/firebase/firebase';
import { useEffect, useState } from 'react';

interface PropsDataProducts {
  codigoProduto: string;
  descriptionProduct: string;
  titleProduct: string;
  valueProduct: string;
}

export default function TableProduct() {
  
  const [snapshot, loading, error] = useObject(ref(database, 'Produtos'));
  const [ data, setData ] = useState<PropsDataProducts[]>([]);
  
  useEffect(() => {
    if (snapshot && snapshot.exists() && snapshot.hasChildren()) {
      
      const tempChildDataArray: PropsDataProducts[] = [];
    
      snapshot.forEach((childSnapshot) => {
          tempChildDataArray.push(childSnapshot.val());
      });
      setData(tempChildDataArray);
    }
  }, [snapshot]);

  console.log(data)
    

  return (
    <>
    {data && data.map((e, index) => (
      <>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-col">
          {e.titleProduct}
        </th>
        <td className="px-6 py-4">
          {e.descriptionProduct}
        </td>
        <td className="px-6 py-4">
          {e.titleProduct}
        </td>
        <td className="px-6 py-4">
          ${e.valueProduct}
        </td>
      </>
      ))}
    </>
);

}