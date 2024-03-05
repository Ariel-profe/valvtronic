'use client';

import { FC, useRef } from 'react';
import Image from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import styles from './departmentCard.module.css';

interface Props {
  id: number;
  title: string;
  description: string;
  src: string;
  url?: string;
  color: string;
  progress: MotionValue;
  range: any;
  targetScale: number;
}

export const DepartmentCard:FC<Props> = ({id, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${id * 25}px)`}}
        className={`${styles.card} border border-purple-800`}
      >
        <h2 className='text-2xl lg:text-4xl text-primary-blue font-bold'>{title}</h2>

        <div className="relative flex flex-col items-center justify-center lg:flex-row gap-3 mt-5 h-full">
          <p className='text-lg lg:text-2xl text-primary-dark-grey w-1/3'>{description}</p>


          <div className="relative h-full rounded-md overflow-hidden w-2/3">
            <motion.div
              className="w-full h-full "
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/assets/images/${src}`}
                alt="image"
                className='object-cover'
                placeholder="blur"
                blurDataURL={`/assets/images/${src}`}
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}