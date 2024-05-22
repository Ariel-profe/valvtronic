"use client"

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { IoIosArrowDropright, IoIosArrowDropdown  } from "react-icons/io";
import { staggerContainer } from '@/utils/motion';

const attributes = [
    {
        id: 1,
        title: 'soluciones inteligentes',
        desc: 'Trabajamos para lograr la superioridad en cada uno de los productos y servicios que ofrecemos a nuestros clientes. Nos adaptamos a nuevos escenarios, animándonos a buscar nuevos caminos e intercambiando conocimiento y experiencia con colegas. La calidad está en la experiencia conjunta.'
    },
    {
        id: 2,
        title: 'personalizadas',
        desc: 'Id dolore sunt et eu irure ut consequat aliqua ex id nostrud. Labore do enim dolor cillum commodo ea fugiat excepteur veniam laborum.'
    },
    {
        id: 3,
        title: 'empresas',
        desc: 'Exercitation laboris eu nulla sunt minim ad reprehenderit. Labore do enim dolor cillum commodo ea fugiat excepteur veniam laborum.'
    },
    {
        id: 4,
        title: 'desarrollar y mejorar',
        desc: 'Exercitation laboris eu nulla sunt minim ad reprehenderit. Labore do enim dolor cillum commodo ea fugiat excepteur veniam laborum.'
    },
    {
        id: 5,
        title: 'control de fluidos',
        desc: 'Exercitation laboris eu nulla sunt minim ad reprehenderit. Labore do enim dolor cillum commodo ea fugiat excepteur veniam laborum.'
    },
];

export const Accordion = () => {

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
        <motion.div
            variants={staggerContainer(1,1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='container mx-auto flex flex-col gap-y-5 w-full'
        >
            {attributes.map( attribute => (
                <div key={attribute.id} className='border-2 border-primary-dark-grey/40 px-6 py-3 rounded-xl'>
                    <button
                        className='flex justify-between items-center w-full capitalize text-xl lg:text-4xl text-primary-blue'
                        onClick={() => setActiveQuestion(activeQuestion === attribute.id ? null : attribute.id)}
                    >
                        {attribute.title}
                        <span className='p-2 dark:bg-slate-500 text-primary-blue text-2xl lg:text-4xl rounded-full'>{activeQuestion === attribute.id ? <IoIosArrowDropdown /> : <IoIosArrowDropright /> }</span>
                    </button>
                    <AnimatePresence>
                        {
                            activeQuestion === attribute.id && (
                                <motion.div
                                    initial={{opacity:0, height: 0}}
                                    animate={{opacity:1, height: 'auto'}}
                                    exit={{opacity:0, height: 0}}
                                    className='lg:text-xl text-primary-dark-grey max-w-[80%]'
                                >
                                    {attribute.desc}
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            ))}
        </motion.div>
  )
}