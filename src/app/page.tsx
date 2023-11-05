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

        <div className='text-white flex flex-col items-center text-center mt-[100px] px-[100px] space-y-[20px]'>
          <h1 className='text-[26px]'>
            Sumber Informasi Donasi untuk Palestina
          </h1>
          <h1 className='text-[70px] font-bold leading-[75px]'>
            Bersama Membantu Palestina Atas Nama Kemanusiaan
          </h1>
          <h1 className='text-[39px]'>Bersama Kita Selamatkan Palestina</h1>

          <button className='bg-primary rounded px-5 py-2 text-[20px]'>
            Berdonasi Sekarang
          </button>
        </div>
      </div>

      {/* About Palestine */}
      <div className='mt-[180px] grid grid-cols-2 items-center'>
        <div className='relative h-[500px]'>
          <Image
            src='/images/banner_palestine_2.png'
            layout='fill'
            alt='banner palestine 2'
          />
        </div>
        <div className='flex flex-col place-content-center p-[30px] space-y-[15px]'>
          <h1 className='font-semibold text-[35px]'>
            Palestina, Negeri yang Terjajah
          </h1>
          <p>
            Lebih dari 70 tahun, Palestina hidup di bawah bayang-bayang zionis
            Israel. Kota suci bagi 3 agama kembali lagi terusik. Banyak warga
            Palestina yang harus kehilangan tanah, rumah, bahkan kehilangan
            keluarga tercinta di negara mereka sendiri. Dunia seakan-akan
            menutup mata akan tragedi yang mereka rasakan
          </p>
        </div>
      </div>

      {/* Conflict Fact */}
      <div>Conflict Fact</div>

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
