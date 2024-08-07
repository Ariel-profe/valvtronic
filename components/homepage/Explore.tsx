'use client';

import { motion } from 'framer-motion';
import { ImEye } from 'react-icons/im';
import { GoGear } from 'react-icons/go';
import { FiCodesandbox } from 'react-icons/fi';
import { IoIosCloudOutline } from 'react-icons/io';

import { TitleText, TypingText } from '../ui/CustomText';
import { ExploreCard } from '../ui/ExploreCard';
import { staggerContainer } from '@/utils/motion';

export const Explore = () => {
  return (
    <motion.div
      variants={staggerContainer(1,0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-full mx-auto flex flex-col mt-10 lg:mt-0 lg:h-[60vh]`}
    >
      <TypingText title="| Innovación y avance tecnológico" textStyles="text-center" />
      <TitleText title={<>CTV - Centro de Tecnología Valvtronic</>} textStyles="text-center" />
      
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-20">
        <ExploreCard title="I+D Investigación y desarrollo" subtitle="Innovación tecnológica" icon={ImEye} />
        <ExploreCard title="Ingeniería de detalles" subtitle="Planos y cálculos" icon={GoGear} />
        <ExploreCard title="Desarrollo de productos" subtitle="Válvulas, actuadores, sistemas de control" icon={FiCodesandbox} />
        <ExploreCard title="VAC | Centro de automatización" subtitle="Sector de fabricación" icon={IoIosCloudOutline} />
      </div>
    </motion.div>
  );
};