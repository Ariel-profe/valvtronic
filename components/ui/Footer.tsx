'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { motion, useScroll, useTransform } from 'framer-motion';

import { socialMedia } from '@/utils/socialMedia';
import AnimatedLink from './AnimatedLink';
import { useRouter } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';

export const Footer = () => {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  return (
  <footer ref={container} className='container mx-auto px-3 relative'>
    <Divs scrollProgress={scrollYProgress} />
  </footer>
)};

const Divs = ({scrollProgress}:{scrollProgress: any}) => {
  
  const {push} = useRouter();
  const y = useTransform(scrollProgress, [0, 1], [-400, 0]);
  const year = new Date().getFullYear();  
  return (

    <div className='container mx-auto overflow-hidden'>
      <motion.div className='flex flex-col md:flex-row justify-between gap-3 mt-14 w-full' style={{y}}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
          <div className='flex flex-col gap-y-3 w-full'>
            <Link href="/" className='self-center'>
              <img src="/assets/logo/vx-color.svg" alt="logo-vx" className='w-28' />
            </Link>

            <div className='flex flex-col items-center gap-y-3 text-primary-blue dark:text-slate-300'>
              <FaGoogle className='border border-blue-900 dark:border-slate-300 p-2 rounded-full text-4xl text-primary-blue dark:text-slate-300' />
              <a href="https://www.google.com/maps/place/VALVTRONIC+SA/@-33.0116512,-68.8577285,17z/data=!4m8!3m7!1s0x967e0b2af28f0889:0x9f58ffac4ea42040!8m2!3d-33.0113013!4d-68.8569814!9m1!1b1!16s%2Fg%2F11bwnbcbfh?entry=ttu" target='_blank' className='flex items-center justify-center gap-x-2 underline'>
                <p className='text-md md:hover:scale-105 transition'>RESEÑAS EN GOOGLE</p>
                <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
                <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
                <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
                <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
                <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
              </a>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start w-full gap-1 md:border-l-2 md:pl-10 border-blue-800 dark:border-slate-500 uppercase'>
            <Link href="/nosotros" className='text-blue-900 dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
              <AnimatedLink title={"Nosotros"} textStyles="text-lg lg:text-xl" /></Link>
            <Link href="/productos" className='text-blue-900 dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
              <AnimatedLink title={"Productos"} textStyles="text-lg lg:text-xl" /></Link>
            <Link href="/servicios" className='text-blue-900 dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
              <AnimatedLink title={"Servicios"} textStyles="text-lg lg:text-xl" /></Link>
            <Link href="/ctv" className='text-blue-900 dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
              <AnimatedLink title={"CTV"} textStyles="text-lg lg:text-xl" /></Link>
            <Link href="/contacto" className='text-blue-900 dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
              <AnimatedLink title={"Contacto"} textStyles="text-lg lg:text-xl" /></Link>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-2 items-center lg:w-[80%]'>
          <Link href="/contacto" className='flex items-center gap-x-3 group text-primary-blue md:hover:bg-primary-blue md:hover:text-white w-fit px-3 py-2 rounded-full transition-all'>
            <span className='text-xl md:group-hover:text-white transition'>HABLEMOS</span>
            <IoIosArrowForward />
          </Link>

          <div className="flex justify-center items-center gap-2 mt-4">
          {socialMedia.map(({href, icon: Icon, id}) => (
            <a key={id} href={href} target='_blank' className='relative lg:hover:scale-125 border border-primary-blue dark:border-slate-300 text-primary-blue dark:text-slate-300 md:hover:bg-gradient-to-r from-primary-blue to-primary-blue md:hover:text-white p-1 rounded-full transition-all'>
              <Icon size={25} />
            </a>
          ))}
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center w-full mt-10 md:my-20 text-primary-dark-grey dark:text-slate-300">
        <div className="flex flex-col items-center justify-center text-center gap-4 mt-5">
          <p> Copyright © {year} Valvtronic. Todos los derechos reservados. </p>
          <p className='w-full text-center'>Desarrollado por <a className='underline cursor-pointer md:hover:text-purple-500 transition' href="https://www.amn.com.ar" target='_blank'>AMN Consultora Informática</a> </p>
        </div>
      </div>
  </div>
  )
}