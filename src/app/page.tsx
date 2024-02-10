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
  const [filteredListWebsite, setFilteredListWebsites] = useState<iWebsite[]>(
    []
  );
  const [limit, setLimit] = useState(defaultLimit);

  useEffect(() => {
    const fetchListWebsites = async () => {
      const url =
        'https://script.googleusercontent.com/macros/echo?user_content_key=KqMfylPXKBvSAfMRVE70xJiVen1OYQnsFyRgJSmHPJ1Fl5REVck4qDqJsYVGRUqouDNpTnroRUbMcZWKNW7tcnk5-MEJ0IDym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPuo6OcHLmq-MKTdYTY8LDLoNTfQ-O5kZFXzLs8yjwxjSaJB96yYtke1UgxbvWkfNUEtK1Rnr35nuICaZhYMKfzgmZ2L3tKD69z9Jw9Md8uu&lib=MmHBxpjMDhYgNZTbUjqshrouyVLa1n_tA';

      const list = await fetch(url);
      const listJson: Response = await list.json();

      setListWebsites(listJson.data);
      setFilteredListWebsites(listJson.data);
    };

    fetchListWebsites();
  }, []);

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

        <div className='text-white flex flex-col items-center text-center mt-[250px] 2xl:mt-[300px] md:px-[100px] lg:px-[150px] space-y-[30px]'>
          <span className='text-[30px] md:text-[50px] lg:text-[60px] font-bold md:leading-[75px]'>
            Cari Sumber Donasi Terpercaya untuk Palestina
          </span>

          <a href='#list-donation'>
            <button className='bg-primary rounded px-7 py-2 text-[20px] hover:bg-green-600'>
              Cari Donasi
            </button>
          </a>
        </div>
      </div>

      {/* Conflict Fact */}
      <div className='px-[25px] md:px-[100px] mt-[320px] sm:mt-[400px] md:mt-[300px] space-y-[20px] w-full'>
        <div className='space-y-[10px]'>
          <h1 className='font-bold text-[25px] sm:text-[35px] text-primary-dark'>
            Palestina Butuh Kita
          </h1>
        </div>
        <div className='grid lg:grid-cols-2 gap-[20px]'>
          <div className='relative w-full h-[140px] sm:h-[250px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_1.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 1'
            />
          </div>
          <div className='relative w-full h-[140px] sm:h-[250px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_2.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 2'
            />
          </div>
          <div className='relative w-full h-[140px] sm:h-[250px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]'>
            <Image
              className='rounded-lg'
              src='/images/banner_fact_3.png'
              layout='fill'
              objectFit='cover'
              alt='banner fact 3'
            />
          </div>
          <div className='relative w-full h-[140px] sm:h-[250px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]'>
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
      <div className='w-full px-[25px] md:px-[100px] mt-[15px] text-gray-600'>
        <p>Data dirangkum dari berbagai sumber per 5 November 2023</p>
      </div>

      {/* Middle Promotion Banner */}
      <div className='relative w-full h-[100px] sm:h-[150px] md:h-[200px] xl:h-[300px] my-[50px]'>
        <Image
          className='rounded-lg'
          src='/images/hadits_muslim.png'
          layout='fill'
          objectFit='cover'
          alt='banner fact 4'
        />
      </div>

      <div className='relative w-full h-[100px] sm:h-[200px] md:h-[300px] xl:h-[550px]'>
        <Image
          src='/images/banner_palestine_3.png'
          layout='fill'
          objectFit='cover'
          alt='banner fact 4'
        />
      </div>

      {/* List Donation */}
      <div id='list-donation' />
      <div className='w-full px-[25px] md:px-[100px] space-y-[20px] mt-[25px] md:mt-[100px]'>
        <p className='font-semibold'>Daftar Donasi</p>
        <h1 className='font-extrabold text-4xl'>
          Temukan Sumber Donasi Terpercaya
        </h1>
        <p className='text-gray-600'>
          Kami mengumpulkan berbagai sumber campaign donasi untuk Palestina yang
          terpercaya dan sudah divalidasi keaslian informasinya
        </p>

        <div className='flex flex-col space-y-2'>
          <div className='w-full'>
            <div className='rounded-lg border-2 border-gray-200 float-right w-max bg-white px-2 py-1'>
              <input
                placeholder='Cari...'
                onChange={(e) => {
                  let newListWebsite: iWebsite[] = [];

                  listWebsite.map((l) => {
                    if (
                      l.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                      l.provider
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    ) {
                      newListWebsite.push(l);
                    }
                  });

                  if (!e.target.value) setFilteredListWebsites(listWebsite);
                  else setFilteredListWebsites(newListWebsite);
                }}
                className='outline-none text-gray-500'
              />
            </div>
          </div>

          <div className='relative overflow-x-auto'>
            <table className='w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg'>
              <thead className='text-gray-700 font-bold bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th className='p-2 text-center'>No</th>
                  <th className='p-2'>Penyelenggara</th>
                  <th className='p-2'>Campaign</th>
                  <th className='p-2 text-center'>Aksi</th>
                </tr>
              </thead>

              {filteredListWebsite.length ? (
                <tbody className='text-sm'>
                  {filteredListWebsite.map(
                    (data: iWebsite) =>
                      limit >= data.id && (
                        <tr key={data.id} className='p-1'>
                          <td className='p-2 text-center w-[10%]'>{data.id}</td>
                          <td className='p-2 w-[35%]'>{data.name}</td>
                          <td className='p-2 w-[35%]'>{data.provider}</td>
                          <td className='p-2 w-[20%]'>
                            <div className='flex place-content-center space-x-1'>
                              <button className='text-white text-sm bg-gray-500 hover:bg-gray-400 focus:bg-gray-600 p-2 rounded'>
                                <div
                                  onClick={(event) => {
                                    navigator.clipboard.writeText(data.url);
                                    event.currentTarget.textContent =
                                      'Tersalin';
                                  }}
                                >
                                  <h1>Salin</h1>
                                </div>
                              </button>
                              <a
                                href={`${data.url}`}
                                target='__blank'
                                className='text-white text-sm bg-primary hover:bg-green-600 focus:bg-green-700 p-2 rounded'
                              >
                                Donasi
                              </a>
                            </div>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              ) : (
                <tbody>
                  <tr className='my-3'>
                    <td></td>
                    <td className='py-5'>Loading...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>

        {filteredListWebsite.length > 0 && (
          <div className='w-full flex place-content-center'>
            {limit === defaultLimit && (
              <button
                onClick={() => setLimit(filteredListWebsite.length)}
                className='bg-primary hover:bg-green-600 text-white px-3 py-2 rounded'
              >
                Lihat Selengkapnya
              </button>
            )}
          </div>
        )}
      </div>

      <div className='mt-[50px] bg-[#EDF7F5] text-center w-full space-y-3 md:space-y-5 py-5 px-[10px]'>
        <h1 className='font-bold text-xl md:text-3xl'>
          Sampaikan Umpan Balik Anda
        </h1>
        <p>
          Tiap masukkan, saran, dan kritik anda sangat berarti untuk
          pengembangan kami berikutnya
        </p>
        <div className='pt-[20px] md:pt-0'>
          <a
            href='https://forms.gle/gfWSfnkkKGh3tPsdA'
            target='_blank'
            className='bg-primary hover:bg-green-600 text-white rounded px-7 py-2'
          >
            Beri Feedback
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 w-full flex place-content-between items-center p-7'>
        <div>
          <Logo />
        </div>
        <div className='flex space-x-5'>
          <Link href='#list-donation'>
            <h1 className='text-white'>Daftar Donasi</h1>
          </Link>
        </div>
      </footer>
    </main>
  );
}
