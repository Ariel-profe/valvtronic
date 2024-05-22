'use client';

import { FC, ReactNode } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { UIProvider } from "../../context/ui/UIProvider";
import { AuthProvider } from "./AuthProviders";

export const Providers:FC<{children: ReactNode}> = ({ children }) => {

  return (
    <AuthProvider>
      <UIProvider>
        <ThemeProvider>
          {/* <AnimatePresence mode='wait'>
            {isLoading && <SplashScreen />}
          </AnimatePresence> */}
          {children}
        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
  );
}