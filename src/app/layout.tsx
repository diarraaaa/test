import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '../components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Senoris - Entreprise tech au Sénégal',
  description:
    "SENORIS, entreprise tech basée au Sénégal : création de sites web, applications mobiles, cybersécurité, audit et formation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
