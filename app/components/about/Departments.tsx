'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

import { departments } from '@/utils/departments';
import { TypingText, TitleText } from '../ui/CustomText';
import Lenis from '@studio-freight/lenis';
import { DepartmentCard } from './DepartmentCard';
import { VerticalCarousel } from './VerticalCarousel';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { exo } from '@/app/fonts';

export const Deparments = () => {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis();

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  });

  return (
    <motion.div
        variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col items-center gap-5 w-full mt-20 px-3'
      >
        <TypingText title="| Nuestro talento humano" textStyles="text-center" />
        <TitleText title={<>Un recurso que se anima a marcar la diferencia</>} textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey max-w-[850px] font-medium"
        >
            Las personas son las que hacen valiosa a una compañía. Aportan habilidades, creatividad, ideas, trayectoria y experiencias que impulsan el éxito y la innovación en las diferentes etapas de cada propuesta.
          </motion.p>

        <div className='flex flex-col lg:flex-row gap-3 items-center justify-center w-full mt-5'>
          <h3 className={`w-full lg:w-1/3 text-xl md:text-4xl text-primary-dark-grey ${exo.className}`}>Encargado de hacer cosas del depósito, guardar, ordenar, stock, etc.</h3>
          <VerticalCarousel />
        </div>
    </motion.div>
)}