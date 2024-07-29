
import { HeroSection } from "@/components/ui/HeroSection";
import { AccordionMenu } from "@/components/services/Accordion";
import { Support } from "@/components/services/Support";

const ServicesPage = () => {
  return (
  <section>
    <HeroSection
      imgUrl="/assets/services/hero.webp"
      subheading="Servicios"
      heading="Nuestra gente, los que hacen posible el crecimiento constante."
    />
    <AccordionMenu />
    <Support />
  </section>
  )
}

export default ServicesPage