import { Carousel } from './Carousel';
import { WordsRotate } from './WordsRotate';

export const Hero = () => {
  return (
  <section className={`flex flex-col md:flex-row items-center justify-center mx-auto h-[90vh]`}>
    <WordsRotate />
    <Carousel />    
  </section>)
};