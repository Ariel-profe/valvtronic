'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './industrialTrainning.module.css'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import { TypingText, TitleText } from '../ui/CustomText';
import { staggerContainer } from '@/utils/motion';

const images = [
  'formacion-industrial-1.webp',
  'formacion-industrial-2.webp',
  'formacion-industrial-3.webp',
  'formacion-industrial-4.webp',
  'formacion-industrial-5.webp',
  'formacion-industrial-6.webp',
  'formacion-industrial-7.webp',
  'formacion-industrial-8.webp',
  'formacion-industrial-9.webp'
];

export const IndustrialTrainning = () => {

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis();

    const raf = (time:number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    };

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, []);

  return (
    <motion.div
        variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`w-full mx-auto flex flex-col`}
      >
      <div className={styles.spacer}></div>
        <TypingText title="| Formación industrial" textStyles="text-center" />
        <TitleText
          title={<>Potenciá el conocimiento de tu equipo</>}
          textStyles="text-center mb-20"
        />

      <div className='md:hidden flex flex-col items-center justify-center gap-4 px-3'>
        {
          images.slice(0,3).map(img => (
            <img key={img} src={`/assets/homepage/industrial-trainning/${img}`} alt={img} className='object-cover w-full' />
          ))
        }
      </div>

      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
      </div>
      <div className={styles.spacer}></div>

    </motion.div>
  )
}

const Column = ({images, y}:{images:string[], y:MotionValue}) => {
  return (
    <motion.div
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <img
              src={`assets/homepage/industrial-trainning/${src}`}
              alt={src}
              className='object-cover w-full h-full'
            />
          </div>
        })
      }
    </motion.div>
  )
}