"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { exo } from "@/app/fonts";

interface Props {
  title: string;
  subtitle?: string;
  desc: string;
  img: string;
  index: any;
};

export const SupportCard:FC<Props> = ({desc, img, subtitle = "", title, index}) => {
  
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleCardClick = (index:any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)
  };

  const cardVariants = {
    expanded: {
      width: "400px"
    },
    collapsed: {
      width: '200px'
    }
  }

  return (
    <motion.div
      className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded': ''}`}
      variants={cardVariants}
      initial="collapsed"
      animate={index === expandedIndex ? 'expanded': 'collapsed'}
      transition={{duration: 0.5}}
      onClick={() => handleCardClick(index)}
      style={{backgroundImage: `url(${img})`}}
    >
    <div className='card-content h-full flex flex-col justify-end'>
      <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
        <h2 className='text-xl font-semibold text-white text-center'>{title}</h2>
        {index === expandedIndex && subtitle && <h3 className='text-lg font-semibold text-gray-200 text-center'>{subtitle}</h3>}
        {index === expandedIndex && (<p className='mt-2 text-gray-300 text-center'>{desc} </p> )}
      </div>
    </div>
  </motion.div>
  );
};
// <motion.div
//   className={`
//     flex flex-col w-full relative group  md:hover:shadow-xl md:hover:-translate-y-2 cursor-pointer 
//     ${exo.className}
//     ${isExpaned ? "bg-gradient-to-b from-primary-blue to-primary-purple" : "bg-gradient-to-b from-purple-100 to-blue-100"}
//   `}
//   layout
//   onClick={() => {setIsExpaned(!isExpaned)}}
// >
//   <img src={img} alt="image" className={`${isExpaned ? "h-0" : "object-cover"}`} />
//   <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 to-slate-900" />

//   <h3 className={`absolute ${isExpaned ? "top-10" : "bottom-20"} left-5 text-white lg:text-3xl max-w-[250px]`} >{title}</h3>
//   <p className={`absolute ${isExpaned ? "top-28" : "bottom-7"} left-5 text-white mt-5 lg:text-2xl`} >{companyName}</p>
//   <p className={`absolute ${isExpaned ? "top-40" : "bottom-3"} left-5 text-white mt-5 lg:text-2xl`} >{projectName}</p>
    
//   {isExpaned && (
//     <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} className="mt-48 mb-10 w-full lg:text-2xl font-light text-white px-3">{desc} </motion.p>
//   )}
//   <button
//     className={`absolute bottom-6 right-5 text-white text-3xl border border-white rounded-full`}
//     onClick={() => {setIsExpaned(!isExpaned)}}
//     >
//     {isExpaned ? <IoCloseOutline/> : <IoIosArrowForward /> }
//   </button>
// </motion.div>