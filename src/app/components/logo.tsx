import Image from 'next/image';

export default function Logo() {
  return (
    <div className='flex items-center'>
      <Image
        src='/images/palestine_mini_map.png'
        alt='palestine mini map'
        width={35}
        height={35}
      />
      <div className='text-white text-[18px]'>
        <h1>Support</h1>
        <h1>Palestine.info</h1>
      </div>
    </div>
  );
}
