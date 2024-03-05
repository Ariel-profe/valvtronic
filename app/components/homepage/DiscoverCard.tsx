"use client";

import { FC } from 'react';
import styles from './explore.module.css'
import { exo } from '@/app/fonts';

interface Props {
  id: number;
  imgUrl: string;
  title: string;
  subtitle: string;
}

export const DiscoverCard:FC<Props> = ({ id, imgUrl, title, subtitle }) => (
  <div className={styles['card-container']} key={id}>
    <div className={styles.card}>
      <div className={styles['img-content']}>
        <img src={imgUrl} alt="imagen" />
      </div>
      <div className={styles.content}>
        <h4 className={`text-primary-purple lg:text-white text-3xl lg:text-5xl my-10 lg:mt-0 ${exo.className} `}>{title}</h4>
        <p className='text-xl lg:text-2xl font-normal text-primary-dark-grey lg:text-white'>{subtitle}</p>
      </div>
    </div>
  </div>
);