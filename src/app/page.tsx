'use client';

import Image from 'next/image';
import Navbar from './components/navbar';
import Logo from './components/logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Response {
  data: iWebsite[];
}

interface iWebsite {
  id: number;
  name: string;
  url: string;
  provider: string;
}

export default function Home() {
  const defaultLimit = 5;
  const [listWebsite, setListWebsites] = useState<iWebsite[]>([]);
  const [limit, setLimit] = useState(defaultLimit);

  useEffect(() => {
    const fetchListWebsites = async () => {
      const url =
        'https://script.googleusercontent.com/macros/echo?user_content_key=FiRKr7qyfH94kB1aFJcRBgVyLlQ1nFmA_FviSK8b3WCOZdTQppzVip5QqVqZfW5--rKaw238pYK9I2qgEdWoYwNBE68A_i6am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO6IIApaP4NLpbWvPJ-2E73cg4em5h2VZogOMsWsvX0k4rfwTzegdLd9viB1PEh5aZKAzIga5PSpCiiUOqhdWPpLGe6w3eg_m9z9Jw9Md8uu&lib=MmHBxpjMDhYgNZTbUjqshrouyVLa1n_tA';

      const list = await fetch(url);
      const listJson: Response = await list.json();

      console.log('response', listJson.data);

      setListWebsites(listJson.data);
    };

    fetchListWebsites();
  }, [listWebsite]);

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

        <div className='text-white flex flex-col items-center text-center mt-[250px] 2xl:mt-[300px] px-[150px] space-y-[30px]'>
          <span className='text-[60px] font-bold leading-[75px]'>
            Cari Sumber Donasi Terpercaya untuk Palestina
          </span>

          <button className='bg-primary rounded px-7 py-2 text-[20px]'>
            Cari Donasi
          </button>
        </div>
      </div>

      {/* Conflict Fact */}
      <div className='px-[100px] mt-[300px] space-y-[20px] w-full'>
        <div className='space-y-[10px]'>
          <h1 className='font-bold text-[35px] text-primary-dark'>
            Fakta dalam Konflik
          </h1>
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
      <div className='w-full px-[100px] mt-[50px] space-y-[20px]'>
        <p className='font-semibold'>Daftar Donasi</p>
        <h1 className='font-extrabold text-4xl'>
          Temukan Donasi yang Terpercaya
        </h1>
        <p className='text-gray-600'>
          Kami mengumpulkan berbagai sumber campaign donasi untuk Palestina yang
          terpercaya dan sudah divalidasi keaslian informasinya
        </p>

        <div className='flex flex-col space-y-2'>
          <div className='w-full'>
            <div className='rounded border-2 border-gray-200 float-right w-max px-2 py-1'>
              <input placeholder='Cari...' />
            </div>
          </div>

          <table className='w-full'>
            <thead className='bg-[#EDF7F5] text-left'>
              <th className='p-2'>No</th>
              <th className='p-2'>Campaign</th>
              <th className='p-2'>Penyelenggara</th>
              <th className='p-2 text-center'>Aksi</th>
            </thead>

            <tbody>
              {listWebsite.map(
                (data: iWebsite) =>
                  limit >= data.id && (
                    <tr key={data.id} className='p-1'>
                      <td className='p-2'>{data.id}</td>
                      <td className='p-2'>{data.name}</td>
                      <td className='p-2'>{data.provider}</td>
                      <td className='p-2'>
                        <div className='flex place-content-center space-x-1'>
                          <button className='text-white text-sm bg-primary p-2 rounded'>
                            <div>
                              <h1>Salin</h1>
                            </div>
                          </button>
                          <a
                            href={`${data.url}`}
                            target='__blank'
                            className='text-white text-sm bg-primary p-2 rounded'
                          >
                            Donasi
                          </a>
                        </div>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>

        <div className='w-full flex place-content-center'>
          {limit === defaultLimit && (
            <button
              onClick={() => setLimit(listWebsite.length)}
              className='bg-primary text-white px-3 py-2 rounded'
            >
              Lihat Selengkapnya
            </button>
          )}
        </div>
      </div>

      {/* About Us */}
      <div className='mt-[50px] pl-[30px]'>
        <div className='grid grid-cols-2 items-center gap-3'>
          <div className='p-3 space-y-4'>
            <h1 className='text-4xl font-extrabold'>
              Satu Sumber Donasi Terpercaya untuk Palestina
            </h1>
            <div className='bg-[#EDF7F5] p-3 space-y-3'>
              <div className='font-extrabold text-green-800 text-lg flex space-x-2'>
                <Image
                  src='/images/visi.png'
                  width={30}
                  height={10}
                  alt='visi icon'
                />
                <h1>Visi Kami</h1>
              </div>
              <p className='text-sm'>
                Menyediakan informasi sumber-sumber donasi terpercaya untuk
                Palestina
              </p>
            </div>
            <div className='bg-[#EDF7F5] p-3 space-y-3'>
              <div className='font-extrabold text-green-800 text-lg flex space-x-2'>
                <Image
                  src='/images/visi.png'
                  width={30}
                  height={20}
                  alt='visi icon'
                />
                <h1>Misi Kami</h1>
              </div>
              <p className='text-sm'>
                Menghasilkan platform yang menghimpun beragam donasi untuk
                Palestina yang bersifat open source
              </p>
            </div>
          </div>
          <div>
            <div className='relative w-full h-[400px] 2xl:h-[550px]'>
              <Image
                className='rounded-l-lg'
                src='/images/rakyat_pl.png'
                layout='fill'
                objectFit='cover'
                alt='banner fact 4'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[50px] bg-[#EDF7F5] text-center w-full space-y-5 py-5'>
        <h1 className='font-bold text-3xl'>Sampaikan Umpan Balik Anda</h1>
        <p>
          Tiap masukkan, saran, dan kritik anda sangat berarti untuk
          pengembangan kami berikutnya
        </p>
        <button className='bg-primary text-white rounded px-5 py-2'>
          Beri Feedback
        </button>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 w-full flex place-content-between items-center p-7'>
        <div>
          <Logo />
        </div>
        <div className='flex space-x-5'>
          <Link href=''>
            <h1 className='text-white'>Daftar Donasi</h1>
          </Link>
        </div>
      </footer>
    </main>
  );
}
