"use client";
import React, { useEffect, useState } from 'react';
import { CartIcon } from '../Icons/cart/index';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import './styles.css';
import Link from 'next/link';


const Header = () => {

  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const pathname = window.location.pathname;
  
    if (pathname === '/about') {
      setActiveTab('about');
    }
    if (pathname.startsWith('/login')) {
      setActiveTab('login');
    }
    if (pathname === '/') {
      setActiveTab('home');
    }
  }, []);

  const userAdmin = true;
  
  return (
    <header className="bg-gray-200 p-10 px-24 flex justify-between items-center">
      <div className="flex items-center">
        {userAdmin && (
          <Link href="/admin" className={`mr-8  hover:cursor-pointer ${activeTab === 'Admin' ? 'nav-link' : ''}`}>Admin</Link>
        )}
        <Link href="/" className={`mr-8  hover:cursor-pointer ${activeTab === 'home' ? 'nav-link' : ''}`}>Home</Link>
        <Link href="/about" className={`hover:cursor-pointer ${activeTab === 'about' ? 'nav-link' : ''}`}>About</Link>
      </div>
      
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={200} height={40} />
      </div>
      
      <div className="flex items-center gap-5">
        <Link href="/login" className={`mr-8  hover:cursor-pointer ${activeTab === 'login' ? 'nav-link' : ''}`}>Login</Link>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
