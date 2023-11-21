import Image from 'next/image';

export default function Logo() {
  return (
    <div className='flex items-center'>
      <Image
        src='/images/logo.png'
        alt='palestine mini map'
        width={175}
        height={175}
      />
    </div>
  );
}
