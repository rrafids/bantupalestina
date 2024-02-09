import Link from 'next/link';
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
      } fixed w-full flex items-center justify-between px-[75px] py-[20px] text-white`}
    >
      <Logo />
      <div>
        <button className='bg-primary py-2 px-5 rounded'>Cari Donasi</button>
      </div>
    </div>
  );
}
