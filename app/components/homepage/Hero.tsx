'use client';

import { motion } from 'framer-motion';

import { staggerContainer } from '@/utils/motion';
import { Carousel } from './Carousel';
import { exo } from '@/app/fonts';

export const Hero = () => {

  return (
  <section className={`container flex flex-col md:flex-row items-center justify-center mx-auto mt-10 px-3`}>
    <motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full lg:w-1/2 px-3 lg:px-6"
    >
      <div className={`flex  flex-col relative z-10 lg:mt-20 ${exo.className}`} >
        <h1 className='text-4xl xl:text-8xl mb-5 text-primary-purple'>Experiencia <br /> en <br /> movimiento</h1>
        <p className='text-lg lg:text-3xl text-primary-dark-grey'>Productos de alta calidad, recursos humanos profesionales y respaldo internacional para tu próximo proyecto.</p>
      </div>
    </motion.div>

    <motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full lg:w-1/2"
    >
        <Carousel />
    </motion.div>
  </section>)
};