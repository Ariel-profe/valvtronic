
import { HeroSection } from "@/components/ui/HeroSection";
import { AccordionMenu } from "@/components/services/Accordion";
import { Support } from "@/components/services/Support";
import { Purpose } from "@/components/services/Purpose";

const ServicesPage = () => {
  return (
  <section>
    <HeroSection
      imgUrl="/assets/services/hero.webp"
      subheading="Servicios"
      heading="El conocimiento como base del éxito compartido con nuestros clientes."
    />
    <Purpose />
    <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0 mt-10 mx-auto">
      <AccordionMenu />
      <Support />
    </div>
  </section>
  )
}

export default ServicesPage