"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdDns } from 'react-icons/md';

import { AdminNavItem } from './AdminNavItem';

export const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className='container mx-auto w-full shadow-sm top-20 border-b pt-4'>
        <div className='flex items-center justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap' >
          <Link href="/admin/administrar-clientes">
            <AdminNavItem label='Usuarios' icon={MdDns} selected={pathname === '/admin/administrar-clientes'} />
          </Link>
        </div>
    </div>
  )
}
