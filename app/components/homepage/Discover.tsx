"use client";

import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../ui/CustomText";
import { DiscoverCard } from "./DiscoverCard";

export const Discover = () => {
  return (
    <motion.div
      variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`px-3 lg:px-6 w-full flex flex-col`}
      >
        <TypingText title="| Ferias internacionales" textStyles="text-center" />
        <TitleText
          title={<>Conectados con el futuro de cada industria</>}
          textStyles="text-center mb-20"
        />

        <div className="grid md:grid-cols-2 gap-10">
            <DiscoverCard
              id={0}
              imgUrl={"/assets/images/feria-1.jpg"}
              title={"OIL & GAS"}
              subtitle="Considerada una de las principales ferias de la industria de los hidrocarburos en la región. En Valvtronic hemos sido parte de numerosas ediciones, como uno de los principales lideres en este mercado."
            />
            <DiscoverCard
              id={1}
              imgUrl={"/assets/images/feria-2.jpg"}
              title={"ARMINERA"}
              subtitle="Evento en el cual se reúnen los principales referentes de la industria minera. En Valvtronic somos parte de cada edición con algunos avances de nuestra compañía en materia de tecnología e innovación."
            />
            
        </div>
    </motion.div>
  )
}