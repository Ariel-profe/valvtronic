import { getActuators } from "@/actions/actuators";
import { ActuatorsCategories } from "@/app/components/products/ActuatorsCategories";
import { ProductCard } from "@/app/components/products/ProductCard";
import { NullData } from "@/app/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
}

export const revalidate = 0

const ActuatorsPage = async({searchParams}:Props) => {

  const products = await getActuators(searchParams);

  return (
    <div className="container mx-auto p-8 flex flex-col items-center gap-10">
      <div>
        <ActuatorsCategories />
      </div>

      {
        products?.length === 0
          ? (<NullData title={"No hay productos. Seleccione 'Todas' para limpiar los filtros"} />)
          : (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full">
            {products?.map( (product:any) => (
              <ProductCard key={product.id} product={product} categoryProduct="actuadores" />
            ))}
          </div>)}
    </div>
  )
};

export default ActuatorsPage;