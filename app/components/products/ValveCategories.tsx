"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { valvesCategories } from "@/utils/categories"
import { Category } from "./Category"

export const ValveCategories = () => {

    const params = useSearchParams();

    const category = params?.get('categoria');    

    const pathname = usePathname();    

    const isProductsPage = pathname === '/productos/valvulas';

    if(!isProductsPage) return null;

  return (
    <div className="container mx-auto">
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {valvesCategories.map(item => (
                <Category
                    key={item.id}
                    category={item}
                    selected={category === item.name || (category === null && item.name === 'todas')}
                    categoryProduct="valvulas"
                />
            ))}
        </div>
    </div>
  )
}