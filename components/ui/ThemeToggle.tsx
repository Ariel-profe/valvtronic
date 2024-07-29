"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

export const ThemeToggle = () => {

  const { setTheme, theme } = useTheme();  
  
  return (
    <div 
      className={`relative flex items-center justify-between w-12 h-8 rounded-[50px] px-1 cursor-pointer border border-primary-blue }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <FaMoon className={theme === "dark" ? 'text-white z-20' : 'text-primary-blue z-20'} />
      <div className={`absolute bg-primary-blue ${theme === 'dark' ? 'left-[3px]' : 'right-[3px]'} w-[20px] h-[20px] rounded-full z-10`}></div>
      <IoSunny className={theme === "dark" ? 'text-primary-blue z-20' : 'text-white z-20'} />
    </div>
  )
}