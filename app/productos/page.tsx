import { getValves } from "@/actions/valves";
import { IValveParams } from '@/interfaces/product';
import { NullData } from "../components/ui/NullData";
import { ProductCard } from "../components/products/ProductCard";

interface Props {
  searchParams: IValveParams;
}

export default async function ProductsPage({searchParams}:Props){

  const valves = await getValves(searchParams);

  if(valves?.length === 0){
    return <NullData title={"No hay productos. Seleccione 'Todos' para limpiar los filtros"} />
  }

  return (
    <div className="p-8">
      <div className="flex items-center flex-wrap gap-5">
        {valves?.map( valve => (
          <ProductCard product={valve} />
        ))}
      </div>
    </div>
  )
};