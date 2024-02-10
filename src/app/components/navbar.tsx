import Logo from './logo';
import { useState } from 'react';

export default function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div
      style={{
        zIndex: 100,
      }}
      className={`${
        color && 'bg-[#22262F] opacity-96'
      } fixed w-full flex items-center justify-between px-[10px] md:px-[75px] py-[20px] text-white`}
    >
      <a href='#'>
        <Logo />
      </a>
      <div>
        <a href='#list-donation'>
          <button className='bg-primary py-2 px-5 rounded hover:bg-green-600'>
            Cari Donasi
          </button>
        </a>
      </div>
    </div>
  );
}
