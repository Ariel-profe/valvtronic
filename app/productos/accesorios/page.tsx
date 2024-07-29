import { getAccesories } from "@/actions/accesories";

import { exo } from "@/app/fonts";
import { AccesoriesCategories } from "@/components/products/AccesoriesCategories";
import { ProductCard } from "@/components/products/ProductCard";
import { NullData } from "@/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
};

export const revalidate = 0

export default async function AccesoriesPage({searchParams}:Props){

  const products = await getAccesories(searchParams);

  return (
  <section>
    <div className="w-full mb-10 lg:mb-20" >
        <h1 className={`text-3xl xl:text-7xl mb-5 text-center text-primary-blue ${exo.className}`}>Accesorios</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      <AccesoriesCategories />
      {products?.length === 0
        ? (<NullData title={"UPS! Seleccione 'Todas' para limpiar los filtros"} />)
        : (<div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:w-3/4">
            {products?.map( (product:any) => (
              <ProductCard key={product.id} product={product} categoryProduct="accesorios" />
            ))}
          </div>)}
    </div>
  </section>
  )
};