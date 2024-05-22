
'use client';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '@/utils/motion';
import { TitleText, TypingText } from '../ui/CustomText';
import { features } from '@/utils/constants';
import { FeatureCard } from './FeatureCard';

export const Features = () => (
  <section className='px-3 relative z-10 mt-20 lg:mt-32 overflow-hidden'>
    <motion.div
      variants={staggerContainer(1,0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='px-3 flex flex-col justify-start items-center'
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex flex-col gap-2 justify-center items-center'
      >
        {/* <img
          src="/assets/images/vx.png"
          alt="get-started"
          className="w-[60%] lg:w-[80%] h-[90%] object-contain invert dark:invert-0"
        /> */}
         <TypingText title="| Proyección" />
        <TitleText title={<>Nuestra institución</>} textStyles='text-center' />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex justify-center flex-col gap-y-3 mt-5"
      >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
      </motion.div>
    </motion.div>
  </section>
);