import { getAccesories } from "@/actions/accesories";
import { AccesoriesCategories } from "@/app/components/products/AccesoriesCategories";
import { ProductCard } from "@/app/components/products/ProductCard";
import { NullData } from "@/app/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
}

export default async function AccesoriesPage({searchParams}:Props){

  const products = await getAccesories(searchParams);

  if(!products){
    return null;
  }

  return (
    <div className="container mx-auto p-8 flex flex-col items-center gap-10">
      <div>
        <AccesoriesCategories />
      </div>

      {
        products?.length === 0
          ? (<NullData title={"No hay productos. Seleccione 'Todas' para limpiar los filtros"} />)
          : (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full">
            {products?.map( (product:any) => (
              <ProductCard key={product.id} product={product} categoryProduct="accesorios" />
            ))}
          </div>)}
    </div>
  )
};