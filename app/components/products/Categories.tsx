import { categories } from "@/utils/categories"
import Link from "next/link"
import { DiscoverCard } from "../homepage/DiscoverCard"

export const Categories = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between gap-5 relative mt-20">
        {
            categories.map( category => (
              <DiscoverCard key={category.id} id={category.id} imgUrl={category.img} title={category.name.toUpperCase()} href={category.href} />
            ))
        }
    </div>
  )
}
