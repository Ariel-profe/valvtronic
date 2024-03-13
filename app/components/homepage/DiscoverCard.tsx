"use client";

import { exo } from '@/app/fonts';
import { FC } from 'react';

interface Props {
  id: number;
  imgUrl: string;
  title: string;
  subtitle: string;
}

export const DiscoverCard:FC<Props> = ({ id, imgUrl, title, subtitle }) => (
  <div className="relative w-full flex flex-col items-center justify-center group transition-all bg-gradient-to-r from-primary-blue to-primary-purple">
    <img src={imgUrl} alt={title} className='w-full object-cover opacity-100 md:group-hover:opacity-35' />

    <div className='absolute inset-0 hidden md:group-hover:flex flex-col gap-y-4 items-center justify-center h-full max-w-[600px] mx-auto text-white'>
      <h3 className={`text-4xl ${exo.className}`}>{title}</h3>
      <p className='text-xl'>{subtitle}</p>
    </div>
  </div>
);