import { FC } from "react";

interface Props {
    title: string;
}

export const NullData:FC<Props> = ({title}) => {
  return (
    <div className="flex items-center justify-center w-full h-[50vh] text-xl md:text-2xl">
        <p className="font-medium">{title}</p>
    </div>
  )
}
