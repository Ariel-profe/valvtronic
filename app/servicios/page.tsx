"use client";

import { Accordion } from "../components/services/Accordion";
import { Hero } from "../components/services/Hero";
import { Support } from "../components/services/Support";

const ServicesPage = () => {
  return (
    <section>
      <Hero />
      <Accordion />
      <Support />
    </section>
  )
}

export default ServicesPage