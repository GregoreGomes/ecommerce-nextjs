'use client'

import { useEffect, useState } from 'react';
import { ref as storageRef } from 'firebase/storage';
import { useDownloadURL  } from 'react-firebase-hooks/storage';
import { storage } from '@/firebase/firebase';

interface UploadProps { 
  imageName: string
}

export default function DownloadFile( { imageName }: UploadProps ): any {

  const [ value, loading, error ] = useDownloadURL(storageRef(storage, `produtos/${imageName}`));  
  const [ urlImage, setUrlImage ] = useState<string>()

  useEffect(() => {
    if(!loading) {
      setUrlImage(value)
      console.log(urlImage)
    }
  }, [ imageName ]);

  return (
    <>
    <img src={value} alt="" />
    </>
  );
}