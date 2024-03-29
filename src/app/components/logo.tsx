import Image from 'next/image';

export default function Logo() {
  return (
    <div className='flex items-center'>
      <Image
        src='https://raw.githubusercontent.com/rrafids/bantupalestina/master/public/images/bp_navbar.png'
        alt='palestine mini map'
        width={175}
        height={175}
      />
    </div>
  );
}
