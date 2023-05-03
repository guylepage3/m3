import localFont from 'next/font/local';
import { Open_Sans, Karla } from 'next/font/google';

export const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const karla = Karla({
  subsets: ['latin'],
  display: 'swap'
});

export const abcdiatype = localFont({
  src: [
    {
      path: './fonts/abcdiatype-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/abcdiatype-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/abcdiatype-medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/abcdiatype-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const abcdiatypemono = localFont({
  src: [
    {
      path: './fonts/abcdiatype-mono-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});