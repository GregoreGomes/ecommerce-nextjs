import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 flex justify-center items-center ">
        <div>
          <p>&copy; {new Date().getFullYear()} E-Commerce. Todos os direitos reservados.</p>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
