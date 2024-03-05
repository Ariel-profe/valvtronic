"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { categories } from "@/utils/categories"
import { CategoryItem } from "./CategoryItem"

export const Categories = () => {

    const params = useSearchParams();

    const category = params?.get('category');

    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage) return null;

  return (
    <div className="bg-white">
        <div className="container mx-auto">
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map(item => (
                        <CategoryItem key={item.id} category={item} selected={category === item.name || (category === null && item.name === 'all')} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}