'use client';

import { motion } from 'framer-motion';

import { TypingText, TitleText } from '../ui/CustomText';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { VerticalCarousel } from './VerticalCarousel';
import { departments } from '@/utils/departments';

export const Deparments = () => {

  return (
    <motion.div
        variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='container mx-auto flex flex-col items-center gap-5 w-full mt-20'
      >
        <TypingText title="| Talento humano" textStyles="text-center" />
        <TitleText title={<>Quienes se animan a marcar la diferencia</>} textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey max-w-[850px] font-medium"
        >
          Las personas son lo que hacen valiosa a una compañía. Aportan habilidades, creatividad, ideas, trayectoria y experiencias que impulsan el éxito y la innovación en las diferentes etapas de cada propuesta.
        </motion.p>
          
        <VerticalCarousel data={departments.slides} leadingText={departments.leadingText} />
    </motion.div>
)}