
import { getAccesoryBySlug } from "@/actions/accesories";
import { NullData } from "@/app/components/ui/NullData";

const AccesoryBySlugPage = async({params}:{params: {slug: string}}) => {

  const product = await getAccesoryBySlug(params.slug);

  if(!product) return <NullData title={`No hay producto con este id "${params.slug}"`} />

  return (
    <div className="container mx-auto px-3 lg:px-6">
      {product && (
        <h1>{product.serie}</h1>
      )}
    </div>
  )
}

export default AccesoryBySlugPage