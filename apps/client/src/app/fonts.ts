import localFont from 'next/font/local';

export const walsheimBlack = localFont({
  weight: '900',
  style: 'normal',
  display: 'swap',
  src: '/fonts/GT-Walsheim-Pro-Black.ttf',
  variable: '--font-walsheim-black',
});

export const walsheimBold = localFont({
  weight: '700',
  style: 'normal',
  display: 'swap',
  src: '/GT-Walsheim-Pro-Bold.ttf',
  variable: '--font-walsheim-bold',
});

export const walsheimMedium = localFont({
  weight: '500',
  style: 'normal',
  display: 'swap',
  src: '/fonts/GT-Walsheim-Pro-Medium.ttf',
  variable: '--font-walsheim-medium',
});

export const walsheimRegular = localFont({
  weight: '400',
  style: 'normal',
  display: 'swap',
  src: '/fonts/GT-Walsheim-Pro-Regular.ttf',
  variable: '--font-walsheim-regular',
});

export const walsheimLight = localFont({
  weight: '300',
  style: 'normal',
  display: 'swap',
  src: '/fonts/GT-Walsheim-Pro-Light.ttf',
  variable: '--font-walsheim-light',
});

export const walsheimUltraLight = localFont({
  weight: '200',
  style: 'normal',
  display: 'swap',
  src: '/fonts/GT-Walsheim-Pro-Ultra-Light.ttf',
  variable: '--font-walsheim-ultraLight',
});
