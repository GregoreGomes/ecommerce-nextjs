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

  return (

    <div className="flex items-center justify-center w-full">
     
    </div> 
);

}