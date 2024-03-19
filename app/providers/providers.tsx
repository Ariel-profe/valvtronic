'use client';

import { FC, ReactNode, useEffect, useState } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { UIProvider } from "../../context/ui/UIProvider";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "../components/homepage/SplashScreen";

export const Providers:FC<{children: ReactNode}> = ({ children }) => {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll();

  //         setTimeout( () => {
  //           setIsLoading(false);
  //           document.body.style.cursor = 'default'
  //           window.scrollTo(0,0);
  //         }, 2000)
  //     }
  //   )()
  // }, []);

  return (
      <UIProvider>
        <ThemeProvider>
          {/* <AnimatePresence mode='wait'>
            {isLoading && <SplashScreen />}
          </AnimatePresence> */}
          {children}
        </ThemeProvider>
      </UIProvider>
  );
}