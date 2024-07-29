import Link from 'next/link';

import { Menu } from './Menu';
import { User } from './User';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = async() => {

return (
  <nav className='container w-full mx-auto flex justify-between items-center p-3'>
    <Menu />
    <Link href={'/'} className="font-extrabold hidden md:flex z-20 h-32">
      <img src="/assets/logo/logo-color.svg" alt="logo-vx" className='w-full' />
    </Link>
    <div className="flex items-center gap-2">
      <Link href="/buscar" className='border p-1 rounded-3xl border-primary-blue '>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </Link>
      <ThemeToggle />
      <User />
    </div>
  </nav>
)

}