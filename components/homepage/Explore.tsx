'use client';

import { motion } from 'framer-motion';

import { staggerContainer } from '@/utils/motion';
import { TitleText, TypingText } from '../ui/CustomText';
import { ExploreCard } from './ExploreCard';

export const Explore = () => {
  return (
    <motion.div
      variants={staggerContainer(1,0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-full mx-auto flex flex-col`}
    >
      <TypingText title="| Innovación y avance tecnológico" textStyles="text-center" />
      <TitleText title={<>CTV - Centro de Tecnología Valvtronic</>} textStyles="text-center" />
      <ExploreCard />
    </motion.div>
  );
};