"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { Category } from "./Category"
import { actuatorsCategories } from "@/utils/categories";

export const ActuatorsCategories = () => {

    const params = useSearchParams();

    const category = params?.get('categoria');    

    const pathname = usePathname();    

    const isProductsPage = pathname === '/productos/actuadores';

    if(!isProductsPage) return null;

  return (
    <div className="container mx-auto w-full lg:w-1/4">
        <div className="pt-4 flex flex-col overflow-x-auto">
            {actuatorsCategories.map(item => (
                <Category
                    key={item.id}
                    category={item}
                    selected={category === item.name || (category === null && item.name === 'todas')}
                    categoryProduct="actuadores"
                />
            ))}
        </div>
    </div>
  )
}