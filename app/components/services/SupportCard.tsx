"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { exo } from "@/app/fonts";

interface Props {
  title: string;
  companyName?: string;
  projectName?: string;
  desc: string;
  img: string;
};

export const SupportCard:FC<Props> = ({desc, img, companyName = "", projectName="", title}) => {
  
  const [isExpaned, setIsExpaned] = useState(false);

  return (
    <motion.div
      className={`
        flex flex-col w-full relative group min-h-[600px] md:hover:shadow-xl md:hover:-translate-y-2 transition-all duration-500 
        ${exo.className}
        ${isExpaned ? "bg-gradient-to-b from-primary-blue to-primary-purple pl-5" : "bg-gradient-to-b from-purple-100 to-blue-100"}
      `}
      layout
      onClick={() => {setIsExpaned(!isExpaned)}}
    >
      <motion.img src={img} alt="image" className={`${isExpaned ? "h-0" : "absolute size-full object-cover "}`} />
      <motion.h3 layout="position" className={`absolute ${isExpaned ? "top-10 ml-5" : "bottom-20 ml-5"} left-5 text-white lg:text-3xl max-w-[250px]`} >{title}</motion.h3>
      <motion.p layout="position" className={`absolute ${isExpaned ? "top-28 ml-5" : "bottom-7 ml-5"} left-5 text-white mt-5 lg:text-2xl`} >{companyName}</motion.p>
      <motion.p layout="position" className={`absolute ${isExpaned ? "top-40 ml-5" : "bottom-3 ml-5"} left-5 text-white mt-5 lg:text-2xl`} >{projectName}</motion.p>
      <motion.button
        className={`absolute bottom-6 right-5 text-white text-3xl border border-white rounded-full`}
        onClick={() => {setIsExpaned(!isExpaned)}}
      >
        {isExpaned ? <IoCloseOutline/> : <IoIosArrowForward /> }
      </motion.button>

      {isExpaned && (
          <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 2}}} className="mt-48 mb-10 ml-5 lg:text-2xl font-light text-white max-w-[350px]">{desc} </motion.p>
      )}
    </motion.div>
  );
};