'use client';

import { FC, ReactNode } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { UIProvider } from "../../context/ui/UIProvider";
import { CustomCursor } from "../components/ui/CustomCursor";

const Providers:FC<{children: ReactNode}> = ({ children }) => {
  return (
      <UIProvider>
        <ThemeProvider>
          {/* <CustomCursor /> */}
          {children}
        </ThemeProvider>
      </UIProvider>
  );
}

export default Providers;