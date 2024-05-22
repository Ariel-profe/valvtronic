"use client";

import { exo } from '@/app/fonts';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  id: number;
  imgUrl: string | undefined;
  title: string;
  subtitle?: string;
  href?: string;
}

export const DiscoverCard:FC<Props> = ({ id, imgUrl, title, subtitle = '', href = '' }) => {

  if(href){
    return (
      <Link href={href} className="relative w-full flex flex-col items-center justify-center group transition-all bg-gradient-to-r from-primary-blue from-10% via-blue-900/50 via-30% to-primary-purple to-90%">
      <img src={imgUrl} alt={title} className='w-full object-cover opacity-100 md:group-hover:opacity-35 transition-all' />

      <div className='absolute inset-0 hidden md:group-hover:flex flex-col gap-y-4 items-center justify-center h-full max-w-[600px] mx-auto text-white transition-all'>
        <h3 className={`text-4xl ${exo.className}`}>{title}</h3>
        <p className='text-xl'>{subtitle}</p>
      </div>
    </Link>
    )
  }

  return (
  <div className="relative w-full flex flex-col items-center justify-center group transition-all bg-gradient-to-br from-primary-blue from-5% via-primary-blue via-30% to-primary-purple to-95%">
      <img src={imgUrl} alt={title} className='w-full object-cover opacity-100 md:group-hover:opacity-35 transition-all' />

      <div className='absolute inset-0 hidden md:group-hover:flex flex-col gap-y-4 items-center justify-center h-full max-w-[600px] mx-auto text-white transition-all'>
        <h3 className={`text-4xl ${exo.className}`}>{title}</h3>
        <p className='text-xl'>{subtitle}</p>
      </div>
  </div>
  )

}
  