'use client';

import { motion } from 'framer-motion';

import { planetVariants, staggerContainer, fadeIn } from '@/utils/motion';
import { TitleText, TypingText } from './CustomText';
import { identities } from '@/utils/constants';
import { styles } from '@/utils/styles';
import { NewFeatures } from './NewFeatures';

export const WhatsNew = () => (
  <section className='py-12 mt-12 mb-20 relative z-10 overflow-hidden'>
    <TitleText title={<>Identidad</>} textStyles="text-center" />
    <motion.div
      variants={staggerContainer(1,1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='sm:px-16 px-6 mx-auto flex lg:flex-row flex-col gap-8'
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <div className="mt-[48px] flex flex-col lg:flex-row items-center justify-center gap-10">
          {identities.map((identity:any) => (
            <NewFeatures key={identity.id} identity={identity} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/assets/images/identity.png"
          alt="get-started"
          className="w-[100%] h-[90%] object-cover animate-pulse"
        />
      </motion.div>
    </motion.div>
  </section>
);
