"use client";

import { FC, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string';

import { ICategory } from "@/interfaces/category";

interface Props {
    category: ICategory;
    selected?: boolean; 
    categoryProduct: string
}

export const Category:FC<Props> = ({category, selected, categoryProduct}) => {

    const {name} = category;

    const params = useSearchParams();
    const router = useRouter();    

    const handleClick = useCallback(() => {
        if(name === 'todas'){
            router.push(`/productos/${categoryProduct}`)
        } else{
            let currentQuery = {};

            if(params){
                currentQuery = qs.parse(params.toString());
            }

            const updatedQuery:any = {
                ...currentQuery,
                categoria: name
            }

            const url = qs.stringifyUrl({
                url: `/productos/${categoryProduct}`,
                query: updatedQuery
            }, {
                skipNull: true
            })

            router.push(url);
        };
    }, [router, name, params, categoryProduct])

  return (
    <div 
        className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer ${selected ? 'border-b-slate-800 text-slate-800' : 'border-transparent text-slate-500'}`}
        onClick={handleClick}
    >
        <span className="font-medium text-sm capitalize">{name}</span>
    </div>
  )
}