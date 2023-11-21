'use client';

import Image from 'next/image';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {/* Header & Banner */}
      <div className='w-full'>
        <div
          style={{
            zIndex: -1,
          }}
          className='absolute w-full h-[722px]'
        >
          <Image
            src='/images/banner_palestine_1.png'
            layout='fill'
            objectFit='cover'
            alt='banner palestine 1'
          />
        </div>
        <Navbar />

        <div className='text-white flex flex-col items-center text-center mt-[200px] 2xl:mt-[300px] px-[150px] space-y-[15px]'>
          <span className='text-[60px] font-bold leading-[75px]'>
            Satu Sumber Donasi Terpercaya untuk Palestina
          </span>
          <h1 className='text-[25px]'>
            Bersama Membantu Palestina Atas Nama Kemanusiaan
          </h1>

          <button className='bg-primary rounded px-7 py-2 text-[20px]'>
            Cari Donasi
          </button>
        </div>
      </div>

      {/* About Palestine */}
      <div className='mt-[150px] bg-primary-semidark'>
        <div className='flex flex-col place-content-center py-[40px] px-[50px] space-y-[15px] text-center text-white'>
          <h1 className='font-bold text-[30px]'>
            Palestina, Negeri yang Terjajah
          </h1>
          <p>
            Lebih dari 70 tahun, Palestina hidup di bawah bayang-bayang zionis
            Israel. Kota suci bagi 3 agama kembali lagi terusik. Banyak warga
            Palestina yang harus kehilangan tanah, rumah, bahkan kehilangan
            keluarga tercinta di negara mereka sendiri. Dunia seakan-akan
            menutup mata akan tragedi yang mereka rasakan.
          </p>
        </div>
      </div>

      {/* Conflict Fact */}
      <div className='px-[100px] mt-[50px] space-y-[20px]'>
        <div className='space-y-[10px]'>
          <h1 className='font-bold text-[35px] text-primary-dark'>
            Fakta dalam Konflik
          </h1>
          <p>
            Selama konflik, korban meninggal, luka-luka, bahkan pengungsi kian
            bertambah akibat perang yang terjadi. Selain itu, banyak kebutuhan
            pokok seperti air, makanan, dan obat-obatan yang sulit diakses
          </p>
        </div>
        <div className='grid grid-cols-2 gap-[20px]'>
          <div className='relative w-full h-[250px] 2xl:h-[300px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_1.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 1'
            />
          </div>
          <div className='relative w-full h-[250px] 2xl:h-[300px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_2.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 2'
            />
          </div>
          <div className='relative w-full h-[250px] 2xl:h-[300px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_3.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 3'
            />
          </div>
          <div className='relative w-full h-[250px] 2xl:h-[300px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_4.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 4'
            />
          </div>
        </div>
      </div>
      <div className='w-full px-[100px] mt-[15px] text-gray-600'>
        <p>Data dirangkum dari berbagai sumber per 5 November 2023</p>
      </div>

      {/* Middle Promotion Banner */}
      <div className='relative w-[1000px]  h-[200px] 2xl:h-[250px] my-[50px]'>
        <Image
          className='rounded-lg'
          src='/images/hadits_muslim.png'
          layout='fill'
          objectFit='cover'
          alt='banner fact 4'
        />
      </div>

      <div className='relative w-full h-[400px] 2xl:h-[550px]'>
        <Image
          src='/images/banner_palestine_3.png'
          layout='fill'
          objectFit='cover'
          alt='banner fact 4'
        />
      </div>

      {/* List Donation */}
      <div className='w-full px-[120px] mt-[50px] space-y-[20px]'>
        <p className='font-semibold'>Daftar Donasi</p>
        <h1 className='font-extrabold text-4xl'>
          Temukan Donasi yang Terpercaya
        </h1>
        <p className='text-gray-600'>
          Kami mengumpulkan berbagai sumber campaign donasi untuk Palestina yang
          terpercaya dan sudah divalidasi keaslian informasinya
        </p>
      </div>

      {/* About Us */}
      <div>About Us</div>

      <div>Umpan Balik</div>

      {/* Footer */}
      <footer>Footer</footer>
    </main>
  );
}
