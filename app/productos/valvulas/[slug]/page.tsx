import { getValveBySlug } from "@/actions/valves";
import { ProductDetails } from "@/components/products/ProductDetails";
import { NullData } from "@/components/ui/NullData";

const ProductPageBySlug = async({params} : {params: {slug:string}}) => {

  const product = await getValveBySlug(params);

  if(!product) return <NullData title={`No existe el producto "${params.slug}"`} />

  return (
    <section>
        {product && (<ProductDetails product={product} />)}
    </section>
  )
}

export default ProductPageBySlug