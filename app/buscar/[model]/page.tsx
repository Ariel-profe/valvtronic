import { getValves } from "@/actions/valves";
import { NullData } from "@/app/components/ui/NullData";
import { IProductParams } from "@/interfaces/product";
import Link from "next/link";

interface Props {
    searchParams: IProductParams;
  };

const ModelPage = async({searchParams}:Props) => {

    const valves: any = await getValves(searchParams);  
    const actuators: any = await getValves(searchParams);  

    let products:any = [];

    if(searchParams.model === "valvulas"){
        products = valves
    }else if (searchParams.model === "actuadores"){
        products = actuators
    }

    console.log(searchParams);
    
    
  return (
    <div>
       
        {products?.length === 0
          ? (<NullData title={`UPS! No encontramos ningún producto para "${searchParams.searchTerm}"`} />)
          : (<div className="grid grid-cols-2 gap-5 my-10 w-full">
            {products?.map( (product:any) => (
              <Link 
                key={product.id}
                href={`/productos/${product.model}/${product.slug}`}
                className="flex items-center gap-x-2 text-xl md:hover:bg-primary-blue md:hover:text-white transition px-3 py-1 w-fit rounded-lg"
              >
                <h3 className="uppercase">{product.serie} -</h3>
                <p className="capitalize">{product.category}</p>
              </Link>
            ))}
          </div>)}
    </div>
  )
}

export default ModelPage