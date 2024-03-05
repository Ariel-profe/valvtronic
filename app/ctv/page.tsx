import { Hero } from "../components/ctv/Hero"
import { Profiles } from "../components/ctv/Profiles"


const CTVPage = () => {
  return (
    <section>
      <Hero />
      <Profiles />

      <div className="h-[500px] flex flex-col items-center justify-center">
        <h3 className="text-xl lg:text-2xl">Secciones en construcción...</h3>
      </div>
    </section>
  )
}

export default CTVPage