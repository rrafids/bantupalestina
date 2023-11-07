import Link from 'next/link';
import Logo from './logo';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between px-[75px] py-[20px] text-white'>
      <Logo />
      <div className='flex items-center space-x-[35px]'>
        <Link href='/'>
          <h1 className='h-[30px] underline underline-offset-2 font-bold'>
            Beranda
          </h1>
        </Link>
        <Link href='/'>
          <h1 className='h-[30px]'>Daftar Donasi</h1>
        </Link>
        <Link href='/'>
          <h1 className='h-[30px]'>Tentang Kami</h1>
        </Link>
      </div>
      <div>
        <button className='bg-primary py-2 px-5 rounded'>Cari Donasi</button>
      </div>
    </div>
  );
}
