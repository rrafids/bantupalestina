import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Support Palestine',
  description: 'Sumber informasi donasi terpercaya untuk Palestina',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://raw.githubusercontent.com/rrafids/bantupalestina/master/public/images/favicon.ico',
        href: 'https://raw.githubusercontent.com/rrafids/bantupalestina/master/public/images/favicon.ico',
      },
    ],
  },
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
          rel='icon'
          href='https://raw.githubusercontent.com/rrafids/bantupalestina/master/public/images/favicon.ico'
          sizes='any'
        />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
