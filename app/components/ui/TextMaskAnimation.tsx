'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const TextMaskAnimation = ({phrases} : {phrases: string[]}) => {

  const animation:{initial: any; enter: (i:any)=>{}} = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 1.5, ease: [0.53, 1, 0.98, 1],  delay: 0.095 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.95,
    triggerOnce: true
  });

  return(
    <div ref={ref} className="text-xl text-center lg:text-start lg:text-4xl my-16">
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className="overflow-hidden">
            <motion.p 
                custom={index}
                variants={animation}
                initial="initial"
                animate={inView ? "enter" : ""}
                className='m-0 font-bold py-1'
            >
                {phrase}
            </motion.p>
          </div>
        })
      }
    </div>
  )
}