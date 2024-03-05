"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { AdminNavItem } from './AdminNavItem';
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from 'react-icons/md';

export const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className='container mx-auto w-full shadow-sm top-20 border-b pt-4'>
        <div className='flex items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap'>
          <Link href="/admin">
            <AdminNavItem label='Summary' icon={MdDashboard} selected={pathname === '/admin'} />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavItem label='Add Products' icon={MdLibraryAdd} selected={pathname === '/admin/add-products'} />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavItem label='Manage Products' icon={MdDns} selected={pathname === '/admin/manage-products'} />
          </Link>
          <Link href="/admin/manage-orders">
            <AdminNavItem label='Manage Orders' icon={MdFormatListBulleted} selected={pathname === '/admin/manage-orders'} />
          </Link>
        </div>
    </div>
  )
}
