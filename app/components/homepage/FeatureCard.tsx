"use client";

export const FeatureCard = ({ number, text } : {number:string; text:string}) => (
  <div className='flex flex-col justify-center gap-2 items-center md:flex-row mt-5'>
    <div className='flex justify-center items-center w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded-[18px] bg-[#323F5D]'>
      <p className="font-bold text-md lg:text-2xl text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 lg:ml-[30px] font-normal text-md lg:text-2xl text-slate-200 dark:text-slate-400 leading-[32.4px] text-center md:text-start">
      {text}
    </p>
  </div>
);