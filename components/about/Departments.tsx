'use client';

import { motion } from 'framer-motion';

import { TypingText, TitleText } from '../ui/CustomText';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { StickyScroll } from './StickyScrollReveal';
import { useState } from 'react';

const content = [
  {
    title: "Marketing y Comunicación",
    description:
      "Encargado de la comunicación institucional interna y externa de la empresa.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Marketing y Comunicación
      </div>
    ),
  },
  {
    title: "Calidad, seguridad y ambiente",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/assets/images/capa-1.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Programación",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Programación
      </div>
    ),
  },
  {
    title: "Depósito",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Depósito
      </div>
    ),
  },
  {
    title: "Centro de Tecnología Valvtronic",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="/assets/images/capa-1.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Administración",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Administración
      </div>
    ),
  }
];

export const Deparments = () => {

  const [photoSelected, setPhotoSelected] = useState(0);

  return (
    <motion.div
        variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col items-center gap-5 w-full mt-10 lg:mt-20 px-3 lg:px-6'
      >
        <TypingText title="| Talento humano" textStyles="text-center" />
        <TitleText title={<>Quienes se animan a marcar la diferencia</>} textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-3 sm:text-[32px] text-[20px] text-center text-primary-dark-grey dark:text-slate-300 max-w-[850px] font-medium"
        >
          Las personas son las que hacen valiosa a una compañía. Aportan habilidades, creatividad, ideas, trayectoria y experiencias que impulsan el éxito y la innovación en las diferentes etapas de cada proyecto.
        </motion.p>
          
        <div className="max-w-[85rem] py-10 lg:py-14 mx-auto">
          <div className="relative">
          
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-primary-blue font-bold text-xl lg:text-5xl dark:text-neutral-200">Departamentos</h2>

                <nav className="grid grid-cols-2 gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                  <button onClick={()=> setPhotoSelected(0)} type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                    <span className="flex gap-x-6">
                      <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                      <span className="grow">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Marketing</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Quis enim nostrud magna fugiat quis cillum duis consequat in voluptate cupidatat aliquip velit.</span>
                      </span>
                    </span>
                  </button>

                  <button onClick={()=> setPhotoSelected(1)} type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                    <span className="flex gap-x-6">
                      <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                      <span className="grow">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Programacion</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Quis enim nostrud magna fugiat quis cillum duis consequat in voluptate cupidatat aliquip velit.</span>
                      </span>
                    </span>
                  </button>

                  <button onClick={()=> setPhotoSelected(2)} type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                    <span className="flex gap-x-6">
                      <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                      <span className="grow">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Administración</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Quis enim nostrud magna fugiat quis cillum duis consequat in voluptate cupidatat aliquip velit.</span>
                      </span>
                    </span>
                  </button>
                </nav>
              </div>
           

              <div className="lg:col-span-6">
                <div className="relative">
                
                  <div>
                    {
                      photoSelected === 0 ? (
                        <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                        <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="/assets/images/vx-1.webp" alt="Features Image"/>
                      </div>
                      ) : photoSelected === 1 ? (
                        <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                        <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="/assets/images/vx-2.webp" alt="Features Image"/>
                      </div>
                      ) : (
                        <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                        <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="/assets/images/vx-3.webp" alt="Features Image"/>
                      </div>
                      )
                    }
                  </div>                 
                </div>
              </div>
              
            </div>


            
            <div className="absolute inset-0 grid grid-cols-12 size-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
            </div>
            
          </div>
        </div>
      
    </motion.div>
)}