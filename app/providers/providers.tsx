'use client';

import { FC, ReactNode } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { UIProvider } from "../../context/ui/UIProvider";

export const Providers:FC<{children: ReactNode}> = ({ children }) => {
  return (
      <UIProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </UIProvider>
  );
}