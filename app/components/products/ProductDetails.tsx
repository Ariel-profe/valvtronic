"use client";

import { FC } from "react";
import { ValveForm } from "./forms/ValveForm";
import { ActuatorForm } from "./forms/ActuatorForm";
import { AccesoryForm } from "./forms/AccesoryForm";

const Horizontal = () => {
    return <hr className="w-[30%] my-2 h-1 rounded-md bg-primary-purple" />
};

interface Props {
    product: any;
}

export const ProductDetails:FC<Props> = ({product}) => {
   
  return (
    <div className="flex flex-col gap-10">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Info container */}
            <div className="flex flex-col gap-1 text-slate-500">
                <h2 className="text-2xl lg:text-4xl mb-5 font-medium text-primary-blue uppercase">{product.serie}</h2>
                <div className="text-justify">{product.description}</div>
                <div className="mt-10">
                    <span className="font-semibold">Categoría:</span> {product.category.toUpperCase()}
                </div>
                <Horizontal />
            </div>
            {/* Images container */}
            {/* <ProductImages images={images} /> */}
            <img src={product.images[0]} alt="" className="max-h-[500px]" />            
        </div>

        {/* Properties section */}
        {
            product.model === "valvulas" 
                ? <ValveForm product={product} />
            : product.model === "actuadores"
                ? <ActuatorForm product={product} />
            : <AccesoryForm product={product} />
        }
    </div>
  )
}
