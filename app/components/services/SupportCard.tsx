"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  title: string;
  companyName?: string;
  projectName?: string;
  desc: string;
  img: string;
};

export const SupportCard:FC<Props> = ({desc, img, companyName = "", projectName="", title}) => {
  
  const [isExpaned, setIsExpaned] = useState(false);

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3, duration: 2 },
    initial: { opacity: 0 },
  };

  return (
    <motion.div
      className="flex flex-col w-full relative group bg-slate-400 min-h-[300px] max-w-[300px] md:hover:shadow-xl md:hover:-translate-y-2 transition-all duration-500"
      layout
      onClick={() => {
        setIsExpaned(!isExpaned);
      }}
    >
      <motion.img src={img} alt="demo image" className={`${isExpaned ? "h-0" : "h-auto lg:max-h-[300px]"} object-cover w-full`} />
      <motion.h3 layout="position" className={`absolute ${isExpaned ? "top-3" : "bottom-12"} left-5 text-white text-2xl`} >{title}</motion.h3>
      <motion.span layout="position" className={`absolute ${isExpaned ? "top-10" : "bottom-7"} left-5 text-white text-xl`} >{companyName}</motion.span>
      <motion.span layout="position" className={`absolute ${isExpaned ? "top-16" : "bottom-3"} left-5 text-white text-xl`} >{projectName}</motion.span>
      <motion.button
            className={`absolute bottom-6 right-5 text-white text-3xl border border-white rounded-full`}
              onClick={() => {
                setIsExpaned(!isExpaned);
              }}
            >
              {isExpaned ? <IoCloseOutline/> : <IoIosArrowForward /> }
            </motion.button>

      {isExpaned && (
          <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 2}}} className="mt-32 mb-10 ml-5 text-white">{desc} </motion.p>
      )}
    </motion.div>
  );
};