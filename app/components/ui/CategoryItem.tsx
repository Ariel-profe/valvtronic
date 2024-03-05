"use client";

import { FC, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ICategory } from "@/interfaces/category";
import qs from 'query-string'

interface Props {
    category: ICategory;
    selected?: boolean; 
}

export const CategoryItem:FC<Props> = ({category, selected}) => {

    const {name} = category;

    const params = useSearchParams();
    const router = useRouter();

    const handleClick = useCallback(() => {
        if(name === 'all'){
            router.push("/")
        } else{
            let currenQuery = {};

            if(params){
                currenQuery = qs.parse(params.toString());
            }

            const updatedQuery:any = {
                ...currenQuery,
                category: name
            }

            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            }, {
                skipNull: true
            })

            router.push(url);
        };


    }, [router, name, params])

  return (
    <div 
        className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer ${selected ? 'border-b-slate-800 text-slate-800' : 'border-transparent text-slate-500'}`}
        onClick={handleClick}
    >
        {/* <Icon size={20} /> */}
        <span className="font-medium text-sm capitalize">{name}</span>
    </div>
  )
}