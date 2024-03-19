import { getActuatorBySlug } from "@/actions/actuators";
import { NullData } from "@/app/components/ui/NullData";

interface IParams {
  slug?: string;
}

const ActuatorBySlugPage = async({params}:{params: {slug:string}}) => {

  const product = await getActuatorBySlug(params.slug);

  if(!product){
    return <NullData title={"Ups! Este producto no existe"} />
  }

  return (
    <div className="container mx-auto px-3 lg:px-6">
      <h1>{product.serie}</h1>
    </div>
  )
}

export default ActuatorBySlugPage