import Link from 'next/link';

import { Menu } from './Menu';
import { User } from './User';
import { ThemeToggle } from './ThemeToggle';
import { SearchBar } from './SearchBar';

export const Navbar = () => {

return (
  <nav className='container w-full mx-auto flex justify-between items-center p-3'>
    <Menu />
    <Link href={'/'} className="font-extrabold text-[24px] leading-[30.24px] text-slate-800 dark:text-slate-300 hidden md:flex z-20">
      <img src="/assets/logo/logo-color.svg" alt="logo-vx" className='w-full' />
    </Link>
      <div className="flex items-center gap-2">
        <SearchBar />
        <ThemeToggle />
        <User />
      </div>
  </nav>
)

}