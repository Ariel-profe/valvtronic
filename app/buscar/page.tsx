import Link from "next/link";
import { IProductParams } from "@/interfaces/product";
import { NullData } from "../components/ui/NullData";
import { SearchBar } from "../components/ui/SearchBar";

import { getValves } from "@/actions/valves";
import { SearchValve } from "../components/products/SearchValve";
import { SearchActuator } from "../components/products/SearchActuator";
import { getActuators } from "@/actions/actuators";
import { getAccesories } from "@/actions/accesories";

interface Props {
  searchParams: IProductParams;
};

export const revalidate = 0

export default async function SearchPage({searchParams}:Props){  

  // const valves: any = await getValves(searchParams);  
  // const actuators: any = await getActuators(searchParams);  
  // const accesories: any = await getAccesories(searchParams);  

  // const products = [...valves, ...actuators, ...accesories];  

  return (
    <div className="container mx-auto my-20 px-3 flex flex-col items-center justify-center w-full h-[40vh]">
      <h1 className="text-xl lg:text-3xl text-rose-600">Esta página aún se encuentra en construcción</h1>

      <Link href={"/"} className="text-lg lg:text-2xl text-slate-600 mt-10">Volver al inicio</Link>
      {/* <SearchBar />
      
      {products?.length === 0
          ? (<NullData title={`UPS! No encontramos ningún producto para "${searchParams.searchTerm}"`} />)
          : (<div className="grid grid-cols-2 gap-5 my-10 w-full">
            {products?.map( (product:any) => (
              <Link 
                key={product.id}
                href={`/productos/${product.model}/${product.slug}`}
                className="flex items-center gap-x-2 text-xl md:hover:bg-primary-blue md:hover:text-white transition px-3 py-1 w-fit rounded-lg"
              >
                <h3 className="uppercase">{product.serie} -</h3>
                <p className="capitalize">{product.model}</p>
                <p className="capitalize">{product.category}</p>
              </Link>
            ))}
          </div>)} */}
    </div>
  )
};