import { cn } from '@client/lib/cn';
import * as fonts from '@client/app/fonts';
import './styles/global.css';

export const metadata = {
  title: 'App',
  description: 'Cymatic Visulaization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'w-full h-screen relative overflow-hidden',
          fonts.walsheimBlack.variable,
          fonts.walsheimBold.variable,
          fonts.walsheimMedium.variable,
          fonts.walsheimRegular.variable,
          fonts.walsheimLight.variable,
          fonts.walsheimUltraLight.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
