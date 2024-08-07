import './globals.css';
import type { Metadata } from 'next'
import { montserrat } from './fonts';
import { ButtonToTop } from '@/components/ui/ButtonToTop';
import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';
import { Providers } from './providers/providers';

export const metadata: Metadata = {
  title: 'Valvtronic',
  description: 'Valvtronic Mendoza'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
      <link rel="icon" href="/assets/logo/vx-blanco.svg" sizes="any" />
      <body className={`${montserrat.className} bg-slate-100 dark:bg-gray-900 text-primary-blue max-w-[1990px] mx-auto`}>
        <Providers>
          <div className='relative flex flex-col'>
            <Navbar />
            <main className='flex-grow shadow-[0_15px_10px_-15px_rgba(0,0,0,0.3)] pb-20 h-full px-3 lg:px-6'>
              {children}
            </main>
            <ButtonToTop />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}