import { Profiles } from "@/components/ctv/Profiles";
import { Services } from "@/components/ctv/Services";
import { HeroSection } from "@/components/ui/HeroSection";

const CTVPage = () => {
  return (
    <section>
      <HeroSection
        imgUrl="/assets/ctv/hero.webp"
        subheading="Centro de Tecnología Valvtronic"
        heading=" Un espacio dedicado a la innovación, la ingeniería y el avance tecnológico. Equipos profesionales al servicio de tus proyectos."
      />
      <Services />
      <Profiles />
    </section>
  )
}

export default CTVPage