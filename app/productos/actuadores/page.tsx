import { getActuators } from "@/actions/actuators";
import { ActuatorsCategories } from "@/app/components/products/ActuatorsCategories";
import { ProductCard } from "@/app/components/products/ProductCard";
import { NullData } from "@/app/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
};

export const revalidate = 0

const ActuatorsPage = async({searchParams}:Props) => {

  const products = await getActuators(searchParams);

  return (
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
  )
};

export default ActuatorsPage;