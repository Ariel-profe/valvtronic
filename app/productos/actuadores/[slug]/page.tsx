import { getActuatorBySlug } from "@/actions/actuators";
import { ProductDetails } from "@/app/components/products/ProductDetails";

import { NullData } from "@/app/components/ui/NullData";

const ProductPageBySlug = async({params} : {params: {slug:string}}) => {

  const product = await getActuatorBySlug(params);

  if(!product) return <NullData title={`No existe el producto "${params.slug}"`} />

  return (
    <section className="container mx-auto px-3 lg:px-6">
        {product && (<ProductDetails product={product} />)}
    </section>
  )
}

export default ProductPageBySlug