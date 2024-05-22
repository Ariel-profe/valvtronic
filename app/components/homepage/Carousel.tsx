"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { exo } from '@/app/fonts';

const headers = [
  "Experiencia en movimiento",
  "Para un mercado competitivo"
];

const subheaders = [
  "Productos de alta calidad, recursos humanos profesionales y respaldo internacional para tu próximo proyecto.",
  "VX participa en la realización de proyectos de diferentes mercados: Oil&Gas, Industrias, Agua y Saneamiento y Minería."
];

const Data = ['/products/740-knife-gate-2.png', '/products/mc-canna-lug.png', '/products/v-bellow-seal.png']

export const Carousel = () => {
 const [FlowDirection, setFlowDirection] = useState(true);
 const [CenterId, setCenterId] = useState(0);
 const [LeftId, setLeftId] = useState(Data.length - 1);
 const [RightId, setRightId] = useState(1);
 const [index, setIndex] = useState(0);
 
 const screenWidth = window.screen.width;

 const nextBtn = () => {
  if (LeftId === Data.length - 1) {
   setLeftId(0)
  } else {
   setLeftId(LeftId + 1)
  }
  if (CenterId === Data.length - 1) {
   setCenterId(0)
  } else {
   setCenterId(CenterId + 1)
  }

  if (RightId === Data.length - 1) {
   setRightId(0)
  } else {
   setRightId(RightId + 1)
  }
  setFlowDirection(true)
 }
 const prevBtn = () => {
  setFlowDirection(false)
  if (LeftId === 0) {
   setLeftId(Data.length - 1)
  } else {
   setLeftId(LeftId - 1)
  }
  if (CenterId === 0) {
   setCenterId(Data.length - 1)
  } else {
   setCenterId(CenterId - 1)
  }
  if (RightId === 0) {
   setRightId(Data.length - 1)
  } else {
   setRightId(RightId - 1)
  }
 };

  useEffect(() => {
    let interval:any;

    interval = setInterval(() => {
      setIndex(function (prev):any {
        if (prev === 1) {
          setIndex(0);
        } else {
          setIndex(prev + 1);
        }
      });
    }, 6000);

    const timerId = setInterval(() => nextBtn(), 6000);
    return () => {
      clearInterval(timerId)
      interval && clearInterval(interval);
    };
  });

 const variants = {
  center: {
   x: '0rem',
   y: screenWidth > 1000 ? "3rem" : "1.4rem",
   opacity: 1,
   scale: screenWidth > 1000 ? 1.5 : 0.8,
   zIndex: '5',
   filter: "brightness(100%)",
   backgroundImage: 'url(' + Data[CenterId] + ')',
   transition: {
    type: 'spring',
    duration: 1,
   },
  },
  left: {
   x: screenWidth > 1000 ? "-6.5rem" : "-5rem",
   y: '-5rem',
   opacity: 1,
   filter: "brightness(80%)",
   scale: screenWidth > 1000 ? 1 : 0.7,
   backgroundImage: 'url(' + Data[LeftId] + ')',
   zIndex: '4',
   boxShadow: 'unset',
   transition: {
    type: 'spring',
    duration: 1,
   },
  },
  right: {
   backgroundImage: 'url(' + Data[RightId] + ')',
   x: screenWidth > 1000 ? "6.5rem" : "5rem",
   y: '-3rem',
   opacity: 1,
   filter: "brightness(80%)",
   scale: screenWidth > 1000 ? 1.2 : 0.6,
   boxShadow: 'unset',
   zIndex: '3',
   transition: {
    type: 'spring',
    duration: 1,
   },
  },
  rightHidden: {
   x: '8rem',
   scale: 0,
   opacity: 0
  },
  leftHidden: {
   x: '-8rem',
   scale: 0,
   opacity: 0
  },
 }
 return (
  <>

<motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full lg:w-2/3 px-3"
    >
      <div className={`flex flex-col relative z-10 lg:mt-20 ${exo.className}`} >
        <h1 className='text-4xl xl:text-8xl mb-5 text-primary-blue'>{headers[index]}</h1>
        <p className='text-lg lg:text-3xl text-primary-dark-grey max-w-[600px]'>{subheaders[index]}</p>
      </div>
    </motion.div>
  
  <motion.div className="herocarousel-wrapper">
   <motion.div className="herocarousel-content">
    <AnimatePresence initial={false}>
     <motion.div
      key={LeftId}
      variants={variants}
      initial={FlowDirection ? 'center' : 'leftHidden'}
      animate="left"
      exit={'leftHidden'}
      className="herocarousel-item"
     ></motion.div>
     <motion.div
      variants={variants}
      key={CenterId}
      initial={FlowDirection ? 'right' : 'left'}
      animate="center"
      className="herocarousel-item"
     ></motion.div>
     <motion.div
      key={RightId}
      variants={variants}
      initial={FlowDirection ? 'rightHidden' : 'center'}
      animate="right"
      exit={'rightHidden'}
      className="herocarousel-item"
     ></motion.div>
    </AnimatePresence>
   </motion.div>
  </motion.div>
  </>
 )
}