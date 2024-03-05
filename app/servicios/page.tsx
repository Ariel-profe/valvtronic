"use client"

import { Hero } from "../components/services/Hero";
import { Meetings } from "../components/services/Meetings";
import { Support } from "../components/services/Support";
import { Trainnings } from "../components/services/Trainings";

const ServicesPage = () => {
  return (
    <section className="container mx-auto">
      <Hero />
      <Support />
      <Meetings />
      <Trainnings />
    </section>
  )
}

export default ServicesPage