import { getValves } from "@/actions/valves";
import { ProductCard } from "@/app/components/products/ProductCard";
import { ValveCategories } from "@/app/components/products/ValveCategories";
import { Loading } from "@/app/components/ui/Loading";
import { NullData } from "@/app/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
}

export const revalidate = 0

export default async function ValvesPage({searchParams}:Props){

  const products = await getValves(searchParams);

  return (
    <div className="p-8 flex flex-col items-center gap-10">
      <div>
        <ValveCategories />
      </div>

      {
        products?.length === 0
          ? (<NullData title={"No hay productos. Seleccione 'Todas' para limpiar los filtros"} />)
          : (
          <div className="flex items-center flex-wrap gap-5">
            {products?.map( (valve:any) => (
              <ProductCard key={valve.id} product={valve} categoryProduct="valvulas" />
            ))}
          </div>)}
    </div>
  )
};