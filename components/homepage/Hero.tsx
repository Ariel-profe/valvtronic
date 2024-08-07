import { Carousel } from './Carousel';
import { WordsRotate } from './WordsRotate';

export const Hero = () => {
  return (
  <section className={`flex flex-col md:flex-row items-center justify-center mx-auto pb-20 lg:h-screen`}>
    <WordsRotate />
    <Carousel />    
  </section>)
};