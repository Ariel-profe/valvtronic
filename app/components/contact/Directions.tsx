"use client"

import { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropright  } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';

const attributes = [
    {
        id: 1,
        title: 'Oficinas comerciales y administración',
        location: 'Buenos Aires - Argentina',
        direction: 'Irala 393 | La Boca (C1163ABG)',
        phone: '+54-911-5772-5464',
        link: 'https://'
    },
    {
        id: 2,
        title: 'Planta industrial y administración',
        location: 'Mendoza - Argentina',
        direction: 'Irala 393 | La Boca (C1163ABG)',
        phone: '+54-911-5772-5464',
        link: 'https://'
    }
];

export const Directions = () => {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <div className='flex flex-col gap-5 w-full mb-20'>
        {attributes.map( attribute => (
            <div key={attribute.id} className='border border-primary-dark-grey p-3 rounded-xl'>
                
                <button
                    className='flex justify-between items-center w-full text-lg lg:text-2xl'
                    onClick={() => setActiveQuestion(activeQuestion === attribute.id ? null : attribute.id)}
                >
                    {attribute.title}
                    <span className='dark:bg-slate-500 text-primary-blue rounded-full lg:text-4xl'>{activeQuestion === attribute.id ? <IoIosArrowDropdown /> : <IoIosArrowDropright /> }</span>    
                </button>

                <AnimatePresence>
                    {activeQuestion === attribute.id && (
                        <motion.div
                            initial={{opacity:0, height: 0}}
                            animate={{opacity:1, height: 'auto'}}
                            exit={{opacity:0, height: 0}}
                            className='flex flex-col gap-y-2 text-slate-400 lg:text-xl'
                        >
                            <span>{attribute.location}</span>
                            <span>{attribute.direction}</span>
                            <span>T/F: {attribute.phone}</span>
                            <a href={attribute.link} target='_blank' className='underline'>Google maps</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        ))}
        </div>
  )
}