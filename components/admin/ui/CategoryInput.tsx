"use client";

import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
    selected?: boolean;
    name: string;
    icon: IconType;
    onClick: (value: string) => void;
};

export const CategoryInput:FC<Props> = ({icon: Icon, name, onClick, selected}) => {
  return (
    <div onClick={() => onClick(name)} className={`rounded-xl border-2 p-4 flex flex-col items-center gap-2 hover:border-slate-500 transition cursor-pointer ${selected ? 'border-slate-500' : 'border-slate-200'} `}>
        <Icon size={30} />
        <h3 className="font-medium capitalize">{name}</h3>
    </div>
  )
}
