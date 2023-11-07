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

        <div className='text-white flex flex-col items-center text-center mt-[100px] px-[100px] space-y-[15px]'>
          <h1 className='text-[70px] font-bold leading-[75px]'>
            Satu Sumber Donasi Terpercaya untuk Palestina
          </h1>
          <h1 className='text-[30px]'>
            Bersama Membantu Palestina Atas Nama Kemanusiaan
          </h1>

          <button className='bg-primary rounded px-7 py-2 text-[20px]'>
            Cari Donasi
          </button>
        </div>
      </div>

      {/* About Palestine */}
      <div className='mt-[275px] grid grid-cols-2 items-center'>
        <div className='relative h-[500px]'>
          <Image
            src='/images/banner_palestine_2.png'
            layout='fill'
            alt='banner palestine 2'
          />
        </div>
        <div className='flex flex-col place-content-center p-[30px] space-y-[15px]'>
          <h1 className='font-bold text-[35px] text-primary-dark'>
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
      <div className='px-[35px] mt-[50px] space-y-[20px]'>
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
          <div className='relative w-full h-[220px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_1.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 1'
            />
          </div>
          <div className='relative w-full h-[220px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_2.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 2'
            />
          </div>
          <div className='relative w-full h-[220px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_3.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 3'
            />
          </div>
          <div className='relative w-full h-[220px]'>
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

      {/* Middle Promotion Banner */}
      <div>Bersama Kita Kembalikan Senyum untuk Masa Depan Palestina</div>

      {/* List Donation */}
      <div>Temukan donasi</div>

      {/* About Us */}
      <div>About Us</div>

      {/* Footer */}
      <footer>Footer</footer>
    </main>
  );
}
