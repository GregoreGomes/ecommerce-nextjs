import React from 'react';
import CartIcon from '../Icons/cart/index';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-200 p-10 px-24 flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" className="mr-4">Home</a>
        <a href="#" className="mr-4">About</a>
      </div>
      
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={200} height={40} />
      </div>
      
      <div className="flex items-center gap-5">
        <a href="#" className="mr-4">Login</a>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
