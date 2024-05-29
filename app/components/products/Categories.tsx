import Link from "next/link";
import { categories } from "@/utils/categories";

export const Categories = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="w-full text-center mb-10">
          <p className="text-xl lg:text-2xl">| Productos</p>
          <h1 className="text-3xl lg:text-7xl">Categorías</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center lg:justify-center gap-5 relative">
          {
              categories.map( category => (
                <Link 
                  href={category.href} 
                  key={category.id}
                  className="group bg-white md:hover:bg-gradient-to-br from-primary-blue from-10% to-primary-purple to-90% rounded-md flex flex-col items-center justify-center gap-3 p-3 transition-all shadow-lg w-full h-full"
                >
                  <img src={category.img} alt={category.name} className="2xl:max-w-[400px] max-h-[300px] md:group-hover:scale-110 transition-all" />
                  <h3 className="text-primary-blue uppercase text-xl lg:text-3xl md:group-hover:text-white font-bold">{category.name}</h3>
                </Link>
              ))
          }
      </div>
    </div>
  )
}
