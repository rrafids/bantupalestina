import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Support Palestine',
  description: 'Sumber informasi donasi terpercaya untuk Palestina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='shortcut icon'
          href='https://raw.githubusercontent.com/rrafids/bantupalestina/master/public/images/bp_logo.png'
        />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
