"use client";

import { useContext, FC, useState, useEffect, ReactNode } from 'react';
import { UIContext } from "../../context/ui/UIContext";

export const ThemeProvider:FC<{children: ReactNode}> = ({children}) => {

    const {theme} = useContext(UIContext);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
      setMounted(true);
    }, [mounted])
    
    if(mounted){
        return (
          <div className={theme}>{children}</div>
        )
    }
}