import './globals.css';
import type { Metadata } from 'next'
import { montserrat } from './fonts';

import { Footer } from './components/ui/Footer';
import { Navbar } from './components/ui/Navbar';
import { Toaster } from 'react-hot-toast';
import { ButtonToTop } from './components/ui/ButtonToTop';
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
    <html lang="es">
      <body className={montserrat.className}>
      <link rel="icon" href="/assets/logo/vx-blanco.svg" sizes="any" />
        <Providers>
          <div className='bg-gradient-to-br from-[#D6DEE5] dark:from-slate-900 via-[#E4EAEF] dark:via-slate-800 to-[#F8FAFC] dark:to-slate-700 text-primary-blue dark:text-slate-200'>
            <Toaster toastOptions={{
              style: {
                background: 'rgb(51 65 85)',
                color: '#fff'
              }
            }} />
              <div className='relative flex flex-col'>
                <Navbar />
                <main className='flex-grow shadow-md pb-20 h-full'>
                  {children}
                </main>
                <ButtonToTop />
                <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}