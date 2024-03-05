"use client"

import { useEffect, useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';

export const ButtonToTop = () => {

  const [buttonView, setButtonView] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.scrollHeight -200){
        setButtonView(true);
       }else{
       setButtonView(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, []);

    const handleBtnUp = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

  return (
    <div className='fixed bottom-14 right-10 lg:right-32 z-10'>
      {
        buttonView && (
          <button 
              className='w-full text-4xl lg:text-6xl text-primary-purple hover:scale-110 transition overflow-hidden'
              onClick={handleBtnUp}
          >
              <IoIosArrowDropup />
          </button>
        )
      }
    </div>
  )
}
