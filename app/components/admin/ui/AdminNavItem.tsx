import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
    selected?: boolean;
    icon: IconType;
    label: string;
};

export const AdminNavItem:FC<Props> = ({icon: Icon, label, selected}) => {
  return (
    <div className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer ${selected ? 'border-b-slate-800 text-slate-800' : 'border-transparent text-slate-500'}`}>
        <Icon size={20} />
        <span className="font-medium text-sm text-center break-normal"> {label} </span>
    </div>
  )
}
