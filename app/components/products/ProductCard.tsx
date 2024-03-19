
import { FC } from "react";
import Link from "next/link";
import { MdOutlineArrowCircleRight } from "react-icons/md";

import { IProduct } from "@/interfaces/product";
import { Loading } from "../ui/Loading";

interface Props {
  product: IProduct;
  categoryProduct: string;
};

export const ProductCard:FC<Props> = ({product, categoryProduct}) => {

  const {category, serie, images, description, slug} = product;  

  return (
    <Link
      href={`/productos/${categoryProduct}/${slug}`}
      className='p-3 rounded-2xl w-full lg:max-w-[300px] border-b border-r hover:shadow-xl hover:shadow-slate-600 transition duration-200 flex flex-col group bg-white/50 overflow-hidden'
    >
      <div className="relative w-full flex items-center justify-center min-h-[190px]">
        {images && <img src={images[0]} alt={serie} className='h-[190px] sm:h-full object-cover group-hover:scale-105 transition' /> }
      </div>

      <div className="mt-5 text-center">
      <h3 className="text-primary-blue font-bold text-2xl capitalize">{serie}</h3>
      <p className="mt-2 text-primary-dark-grey capitalize">{ `Categoría: ${category}`}</p>
      {description && <p className="mt-2 text-primary-dark-grey">{`${description.substring(0, 100)}...`}</p>}
    
      </div>

      <div className="absolute bottom-0 right-0 flex justify-end m-3 card-img_hover">
          <span className="absolute z-50 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-100 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
          </span>
      </div>
      <div className="self-end pr-4 group-hover:pr-1 transition-all">
        <MdOutlineArrowCircleRight size={25} color="#e1e1e1" />
      </div>
    </Link>
  )
}
