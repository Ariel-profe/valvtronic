"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { Category } from "./Category"
import { accesoriesCategories, actuatorsCategories } from "@/utils/categories";

export const AccesoriesCategories = () => {

    const params = useSearchParams();

    const category = params?.get('categoria');    

    const pathname = usePathname();    

    const isProductsPage = pathname === '/productos/accesorios';

    if(!isProductsPage) return null;

  return (
    <div className="container mx-auto">
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {accesoriesCategories.map(item => (
                <Category
                    key={item.id}
                    category={item}
                    selected={category === item.name || (category === null && item.name === 'todas')}
                    categoryProduct="accesorios"
                />
            ))}
        </div>
    </div>
  )
}