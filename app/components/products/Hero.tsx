import { exo } from "@/app/fonts"

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div>
        <h1 className={`text-3xl lg:text-8xl ${exo.className} mb-5`}>Marcamos  <br /> la diferencia</h1>
        <p className={`text-xl lg:text-3xl ${exo.className} text-primary-dark-grey`}>Uno de nuestros mayores desafíos <br /> es poder brindar productos de calidad  <br /> y esto lo podemos lograr gracias a Bray</p>
      </div>
        <img src="/products/hero-productos.webp" alt="productos" className="lg:h-[700px]" />
    </div>
  )
}
