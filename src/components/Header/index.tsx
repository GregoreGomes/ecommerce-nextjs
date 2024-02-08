import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="bg-white text-black shadow-md py-8 px-16 flex justify-between items-center absolute w-full">

      <div className="flex items-center">
        <span className="font-bold text-lg">MyWebsite</span>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" passHref>
              <span 
                className={hoveredItem === 'home' ? 'hovered-link' : ''}
                onMouseEnter={() => setHoveredItem('home')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span 
                className={hoveredItem === 'about' ? 'hovered-link' : ''}
                onMouseEnter={() => setHoveredItem('about')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                About
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex space-x-4 gap-6">
          <li>
            <Link href="/login" passHref>
              <span 
                className={hoveredItem === 'login' ? 'hovered-link' : ''}
                onMouseEnter={() => setHoveredItem('login')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Login
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cart" passHref>
              <span 
                className={hoveredItem === 'cart' ? 'hovered-link' : ''}
                onMouseEnter={() => setHoveredItem('cart')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Cart
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <style jsx>{`
        .hovered-link {
          position: relative;
        }
        .hovered-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: #000;
        }
      `}</style>
    </header>
  );
}
