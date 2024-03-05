import { products } from "@/database/products"
import { ProductCard } from "../components/products/ProductCard"
import Link from "next/link"

const ProductsPage = () => {
  return (
    <div className='container mx-auto px-2 h-[80vh] flex flex-col items-center justify-center gap-5'>
        <h2 className="text-2xl lg:text-4xl">Esta página se encuentra en construcción</h2>
        <Link href="/" className="text-xl lg:text-2xl underline md:hover:text-primary-purple md:hover:scale-110 transition">Volver al inicio</Link>
    </div>
  )
}

export default ProductsPage