"use client";

import { FC } from "react";

const Horizontal = () => {
    return <hr className="w-[30%] my-2 h-1 rounded-md bg-primary-purple" />
};

interface Props {
    product: any;
}

export const ProductDetails:FC<Props> = ({product}) => {

    const {images, serie, description, category, brand, inStock, reviews } = product;
   
  return (
    <div className="grid md:grid-cols-2 gap-12">
        {/* Info container */}
        <div className="flex flex-col gap-1 text-slate-500">
            <h2 className="text-2xl lg:text-2xl font-medium text-primary-purple uppercase">{serie}</h2>
            <div className="text-justify">{description}</div>
            <div>
                <span className="font-semibold">Categoria:</span> {category.toUpperCase()}
            </div>
            <Horizontal />
        </div>
        {/* Images container */}
        {/* <ProductImages images={images} /> */}
        <img src={images[0]} alt="" />
        
        
    </div>
  )
}
