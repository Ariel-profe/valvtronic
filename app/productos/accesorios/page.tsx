import { getAccesories } from "@/actions/accesories";
import { AccesoriesCategories } from "@/app/components/products/AccesoriesCategories";
import { ProductCard } from "@/app/components/products/ProductCard";
import { NullData } from "@/app/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
}

export const revalidate = 0

export default async function AccesoriesPage({searchParams}:Props){

  const products = await getAccesories(searchParams);

  if(!products){
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between">
      
      <AccesoriesCategories />

      {
        products?.length === 0
          ? (<NullData title={"UPS! Seleccione 'Todas' para limpiar los filtros"} />)
          : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-3/4">
            {products?.map( (product:any) => (
              <ProductCard key={product.id} product={product} categoryProduct="accesorios" />
            ))}
          </div>)}
    </div>
  )
};