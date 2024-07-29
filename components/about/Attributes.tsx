"use client";

import { motion } from "framer-motion";

import { TypingText, TitleText } from "../ui/CustomText"
import { fadeIn, staggerContainer } from "@/utils/motion";
import { AttributeCard } from "./AttributeCard";

export const Attributes = () => {
  return (
    <motion.div
      variants={staggerContainer(1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='container mx-auto flex flex-col items-center gap-5 w-full mt-10 lg:mt-20'
    >
      <TypingText title="| Atributos" textStyles="text-center" />
      <TitleText title={<>La base de nuestra compañía</>} textStyles="text-center" />
      
      <motion.p
        variants={fadeIn('up', 'tween', 0.1,1)}
        className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey max-w-[850px] font-medium"
      >
        Crecimiento es sinónimo transformación. Tener la capacidad de adaptarse y contar con equipos capacitados que posean la habilidad para enfrentar creativamente cada nuevo desafío.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <AttributeCard
          title={"Flexibles"}
          desc={"Trabajamos para lograr la superioridad en cada uno de los productos y servicios que ofrecemos a nuestros clientes. Nos adaptamos a nuevos escenarios, animándonos a buscar nuevos caminos e intercambiando conocimiento y experiencia con colegas. La calidad esta en la experiencia conjunta"}
          img={"/assets/about/check.svg"}
          titleStyles={"text-2xl lg:text-4xl"}
          subtitleStyles={"lg:text-2xl"}
          iconStyles='text-5xl'
        />

        <AttributeCard
          title={"Cercanía humana"}
          desc={"Sabemos que el talento y el profesionalismo son claves a la hora de encarar proyectos de cualquier índole. Por eso priorizamos el saber y la capacitación de nustro capital humano, como así tambien la habilidad de estos para exteriorizarlo a nuestros clientes cada vez que estos lo requieran"}
          img={"/assets/about/choque-manos.svg"}
          titleStyles={"text-2xl lg:text-4xl"}
          subtitleStyles={"lg:text-2xl"}
          iconStyles='text-5xl'
        />

        <AttributeCard
          title={"Conocimiento"}
          desc={"Nos da una gran satisfacción crear lazos cercanos con las personas con las que interactuamos y creemos que esa es la mejor forma de llegar a entender y empatizar con cada una de sus problemáticas y la de sus empresas. Los vínculos que construimos son la base de las soluciones que brindamos"}
          img={"/assets/about/foco.svg"}
          titleStyles={"text-2xl lg:text-4xl"}
          subtitleStyles={"lg:text-2xl"}
          iconStyles='text-5xl'
        />
      </div>
    </motion.div>
  )
};