'use client'

import { useState } from 'react';
import { ref as storageRef } from 'firebase/storage';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { storage } from '@/firebase/firebase';
import Image from 'next/image';

interface UploadProps { 
  imageName: string
}

export default function UploadFile( { imageName }: UploadProps ) {

  // const [uploadFile, uploading, snapshot, error] = useUploadFile();
  // const [imageUrl, setImageUrl] = useState<string | null>(null);


  // const ref = storageRef(storage, `produtos/${imageName}`);
  // const [selectedFile, setSelectedFile] = useState<File>();

  // const upload = async () => {
  //   if (selectedFile) {
  //     const result = await uploadFile(ref, selectedFile, {
  //       contentType: 'image/png'
  //     });
  //     if( result ) console.log(snapshot?.ref);
      
  //   }
  // }

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setSelectedFile(file);
    
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSelectedFile(null)
    }
  };

  return (

    <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200 ">
        {!imageUrl && (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          )}
          <input 
          id="dropzone-file" 
          type="file" 
          className="hidden" 
          onChange={handleFileChange}
          />
          {imageUrl && (
            <>
            <Image src={imageUrl} alt="Uploaded" width={400} height={400}/>
           </>
          )}
      </label>
    </div> 
);

}