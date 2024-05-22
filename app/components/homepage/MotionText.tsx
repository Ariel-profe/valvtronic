"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#4A53A0",
      "#3B2666",
      "#434341",
      "#0083C1",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange, display: 'flex', justifyContent: 'center' }}>{children}</motion.p>
    </div>
  );
};

export const MotionText = () => {
  return (
    <section className="grid justify-center items-start justify-items-center gap-y-10 lg:gap-y-32 font-bold text-xl lg:text-4xl px-3 my-20 lg:my-40 w-full mx-auto py-20">
      <TextWrapper>
        Priorizar la necesidad de dar soluciones a las personas.
      </TextWrapper>
      <TextWrapper>
        Agradecer al acompañamiento de nuestros clientes.
      </TextWrapper>
      <TextWrapper>
        Proveer a nuestros mercados y a países vecinos.
      </TextWrapper>
      <TextWrapper>
        Convertirnos en su socio estratégico.
      </TextWrapper>
      <TextWrapper>
        Brindarles la mejor experiencia de compra.
      </TextWrapper>
    </section>
  );
}