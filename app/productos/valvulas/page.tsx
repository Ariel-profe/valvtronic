import { getValves } from "@/actions/valves";

import { exo } from "@/app/fonts";
import { ProductCard } from "@/components/products/ProductCard";
import { ValveCategories } from "@/components/products/ValveCategories";
import { NullData } from "@/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
};

export const revalidate = 0

export default async function ValvesPage({searchParams}:Props){

  const products = await getValves(searchParams);

  return (
    <section>
      <div className="w-full mb-10 lg:mb-20" >
        <h1 className={`text-3xl xl:text-7xl mb-5 text-center text-primary-blue ${exo.className}`}>Válvulas</h1>
      </div>
        
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <ValveCategories />
        {products?.length === 0
          ? (<NullData title={"UPS! Seleccione 'Todas' para limpiar los filtros"} />)
          : (<div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:w-3/4">
              {products?.map( (valve:any) => (
                <ProductCard key={valve.id} product={valve} categoryProduct="valvulas" />
              ))}
            </div>)}
      </div>
    </section>
  )
};