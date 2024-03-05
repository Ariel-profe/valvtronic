'use client';

import { motion } from 'framer-motion';

import { staggerContainer } from '@/utils/motion';
import { markets } from '@/utils/constants';
import { MarketCard } from './MarketCard';

export const Markets = () => (
  <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
    <motion.div
      variants={staggerContainer(1,1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='sm:px-16 px-6 mx-auto flex flex-col'
    >
      <div className="mt-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {markets.map((item, index) => (
          <MarketCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);
