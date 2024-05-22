import { getValves } from "@/actions/valves";
import { ProductCard } from "@/app/components/products/ProductCard";
import { ValveCategories } from "@/app/components/products/ValveCategories";
import { NullData } from "@/app/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
}

export const revalidate = 0

export default async function ValvesPage({searchParams}:Props){

  const products = await getValves(searchParams);

  return (
    <div className="flex flex-col lg:flex-row items-center md:items-start justify-between gap-10 px-3">
      
      <ValveCategories />

      {
        products?.length === 0
          ? (<NullData title={"UPS! Seleccione 'Todas' para limpiar los filtros"} />)
          : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xl:w-3/4">
            {products?.map( (valve:any) => (
              <ProductCard key={valve.id} product={valve} categoryProduct="valvulas" />
            ))}
          </div>)}
    </div>
  )
};