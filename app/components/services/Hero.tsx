'use client';

import { motion } from 'framer-motion';
import { exo } from '@/app/fonts';

import { fadeIn, staggerContainer } from '@/utils/motion';

export const Hero = () => {

  return (
  <section className={`flex flex-col items-center justify-center mt-10`}>
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mb-10 lg:mb-20"
    >
      <h1 className={`text-6xl xl:text-8xl mb-5 text-center text-primary-blue ${exo.className}`}>Servicios</h1>
    </motion.div>

    <div className='h-screen w-full relative'>
      <div className='services-hero-img' />
      <p className={`absolute left-5 lg:left-20 bottom-0 max-w-[800px] py-20 text-white text-3xl lg:text-6xl font-bold ${exo.className}`}>
        Comprender <br /> una necesidad <br /> <span className='font-normal'>requiere</span>
      </p>
    </div>
   
  </section>)
};