'use client';

import { FC, ReactNode } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { AuthProvider } from "./AuthProviders";

export const Providers:FC<{children: ReactNode}> = ({ children }) => {

  return (
    <AuthProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
    </AuthProvider>
  );
}