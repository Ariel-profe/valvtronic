'use client';

import { motion } from 'framer-motion';

import { staggerContainer } from '@/utils/motion';
import { TitleText, TypingText } from '../ui/CustomText';
import { values } from '@/utils/constants';
import { ExploreCard } from './ExploreCard';

export const Explore = () => {

  return (
    <section className={`px-3 lg:px-6 lg:py-10 overflow-hidden py-20 lg:mt-32`} id="explore">
      <motion.div
        variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`w-full mx-auto flex flex-col`}
      >
        <TypingText title="| Innovación y avance tecnológico" textStyles="text-center" />
        <TitleText
          title={<>CTV - Centro de Tecnología Valvtronic</>}
          textStyles="text-center"
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5 items-center w-full justify-center">
          {values.map(({id, subtitle, title, img}) => (
            <ExploreCard key={id} title={title} desc={subtitle} img={img} titleStyles='text-xl lg:text-2xl' subtitleStyles={'lg:text-xl'} iconStyles='text-4xl' />
          ))}
        </div>
      </motion.div>
    </section>
  );
};