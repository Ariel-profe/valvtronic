"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../ui/CustomText"
import { fadeIn, staggerContainer } from "@/utils/motion";
import { SupportCard } from './SupportCard';

export const Meetings = () => {
  return (
    <motion.div
    variants={staggerContainer(1,0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className='flex flex-col items-center gap-5 w-full mt-20 px-3'
>
    <TypingText title="| Charlas técnicas" textStyles="text-center" />
    <TitleText title={<>Charlas personalizadas que unen conceptos</>} textStyles="text-center" />

    <motion.p
    variants={fadeIn('up', 'tween', 0.2, 1)}
    className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey max-w-[850px] font-medium"
    >
        Resolución de problemas técnicos, reparaciones, mantenimiento y asesoramiento para garantizar el funcionamiento adecuado del producto.
    </motion.p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <SupportCard title={"SMURFIT KAPA"} companyName="Empresa Hola" projectName="Proyecto tanto" desc={"Lorem ipsum dolor"} img={"/assets/images/capa-2.webp"} />
      <SupportCard title={"SMURFIT KAPA"} companyName="Empresa Hola" projectName="Proyecto tanto" desc={"Lorem ipsum dolor"} img={"/assets/images/capa-1.webp"}/>
      <SupportCard title={"SMURFIT KAPA"} companyName="Empresa Hola" projectName="Proyecto tanto" desc={"Lorem ipsum dolor"} img={"/assets/images/capa-3.webp"}/>
      <SupportCard title={"SMURFIT KAPA"} companyName="Empresa Hola" projectName="Proyecto tanto" desc={"Lorem ipsum dolor"} img={"/assets/images/capa-4.webp"}/>
    </div>
    </motion.div>
  )
}