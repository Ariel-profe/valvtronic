'use client';

import styles from './vxClipMask.module.css'
import { useRef, useEffect, useCallback } from 'react';

export const VxClipMask = () => {

  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);

  const initialMaskSize = 1;
  const targetMaskSize = 30;
  const easing = 0.65;
  let easedScrollProgress = 0;

  const getScrollProgress = useCallback( () => {

    if(stickyMask.current !== null && container.current !== null){
        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
    }
    
    return easedScrollProgress;

  }, []);

  const animate = useCallback (() => {

    if(stickyMask.current !== null){
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMask.current.style.maskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
        requestAnimationFrame(animate);
    }
  }, [getScrollProgress]);

  useEffect( () => {
    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <div ref={container} className={styles.container}>
      <div ref={stickyMask} className={styles.stickyMask}>
        <video autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}