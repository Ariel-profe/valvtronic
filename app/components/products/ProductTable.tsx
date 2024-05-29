import { IProducts } from "@/interfaces/product"
import Link from "next/link"
import { NullData } from "../ui/NullData"

export const ProductTable = ({data}:{data:IProducts[]}) => {

    if(!data.length) return <NullData title="UPS! No hay nada para mostrar. Intenta con otra palabra." />

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-300 uppercase bg-primary-blue dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Serie
                </th>
                <th scope="col" className="px-6 py-3">
                    Tipo
                </th>
                <th scope="col" className="px-6 py-3">
                    Categoría
                </th>
            </tr>
        </thead>
            <tbody>
                {
                    data.map((item) => (
                        <tr key={item.id} className="odd:bg-transparent odd:dark:bg-gray-900 even:bg-gray-300 even:dark:bg-gray-800 border-b dark:border-gray-700 capitalize">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 
                            <Link 
                                href={item.model === "valvulas" ? `/productos/valvulas/${item.slug}` : item.model === "accesorios" ? `/productos/accesorios/${item.slug}` : `/productos/actuadores/${item.slug}`}
                                className="md:hover:opacity-70 transition-colors"
                            >
                                {item.serie}
                            </Link>
                            </th>
                            <td className="px-6 py-4">{item.model}</td>
                            <td className="px-6 py-4">{item.category}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
