'use client';

import { Accordion } from '../components/about/Accordion';
import { Attributes } from '../components/about/Attributes';
import { Deparments } from '../components/about/Departments';
import { Hero } from '../components/about/Hero';
import { Purpose } from '../components/about/Purpose';

const About = () => (
  <section>
    <Hero />
    <Purpose />
    <Accordion />
    <Attributes />
    <Deparments />
  </section>
);

export default About;