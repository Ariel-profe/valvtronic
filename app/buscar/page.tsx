"use client";

import { products } from "@/data/products";
import { useState } from "react";
import { ProductTable } from "../components/products/ProductTable";
import { IProducts } from "@/interfaces/product";

const SearchPage = () => {

  const [query, setQuery] = useState("");

  const keys = ["serie", "category", "model"];

  const search = (data : IProducts[]) => { 

    return data.filter(
      (item:any) => keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  return (
    <section className="container mx-auto px-3 lg:px-6 min-h-[50vh]">
      <div className="flex relative items-center border-b border-primary-blue mt-10">
        <input 
          type="text" 
          placeholder="¿Qué estás buscando?"
          className="p-2 bg-transparent w-full focus:outline-none focus:border-none lg:text-2xl"
          onChange={(e) => setQuery(e.target.value)}
          />

        <div className="absolute right-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-9 lg:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {
        query === ""
          ? <div className="min-h-[50vh]" />
          : <ProductTable data={search(products)} /> 
      }
    </section>
  )
}

<div className="flex flex-col relative border-b border-primary-blue">

<div>
    

</div>
</div>

export default SearchPage