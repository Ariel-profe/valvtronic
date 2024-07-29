'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '@/utils/motion';
import HoverCard from '../ui/HoverCard';

export const Feedback = () => (
  <motion.div
      variants={staggerContainer(1,1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='mx-auto flex lg:flex-row flex-col gap-6 overflow-hidden'
    >
    <HoverCard backgroundColor='#aeacb3' direction='flex-col' left='0'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px]">
          Federico Ceschin
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px]">
            Director Valvtronic VX
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px]">
          “Esperamos convertirnos en su socio estratégico para la concreción de sus proyectos y brindarles la mejor experiencia de compra.”
        </p>
      </motion.div>
      </HoverCard>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <HoverCard backgroundColor='#aeacb3' direction='flex-col' left='0' >
        <img
          src="/assets/images/slider.webp"
          alt="valvtronic"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        </HoverCard>
        
      </motion.div>
    </motion.div>
   
);


