import { getActuators } from "@/actions/actuators";
import { ActuatorsCategories } from "@/app/components/products/ActuatorsCategories";
import { ProductCard } from "@/app/components/products/ProductCard";
import { NullData } from "@/app/components/ui/NullData";
import { exo } from "@/app/fonts";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
};

export const revalidate = 0

const ActuatorsPage = async({searchParams}:Props) => {

  const products = await getActuators(searchParams);

  return (
  <section className="px-3 lg:px-10">

    <div className="w-full mb-10 lg:mb-20" >
        <h1 className={`text-3xl xl:text-7xl mb-5 text-center text-primary-blue ${exo.className}`}>Actuadores</h1>
      </div>
    <div className="flex flex-col lg:flex-row items-start justify-between">
      
      <ActuatorsCategories />

      {
        products?.length === 0
          ? (<NullData title={"UPS! Seleccione 'Todas' para limpiar los filtros"} />)
          : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-3/4">
            {products?.map( (product:any) => (
              <ProductCard key={product.id} product={product} categoryProduct="actuadores" />
            ))}
          </div>)}
    </div>
  </section>
  )
};

export default ActuatorsPage;