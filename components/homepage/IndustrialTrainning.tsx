"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/utils/motion";
import { TypingText, TitleText } from "../ui/CustomText";

const images = [
  'image-1.webp',
  'image-2.webp',
  'image-3.webp',
  'image-4.webp',
  'image-5.webp',
  'image-6.webp',
  'image-1.webp',
  'image-2.webp',
  'image-3.webp'
];

export const IndustrialTrainning = ({
  className,
}: {
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-screen items-start overflow-y-auto w-full my-10 lg:my-20 no-scrollbar", className)} ref={gridRef}>
      <motion.div
        variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`w-full mx-auto flex flex-col`}
      >
        <TypingText title="| Formación industrial" textStyles="text-center" />
        <TitleText
          title={<>Potenciá el conocimiento de tu equipo</>}
          textStyles="text-center"
        />
        </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-10 py-40 px-10" ref={gridRef}>
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={`/assets/homepage/industrial-trainning/${el}`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 "
                alt="imagen"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={`/assets/homepage/industrial-trainning/${el}`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="imagen"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={`/assets/homepage/industrial-trainning/${el}`}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="imagen"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
