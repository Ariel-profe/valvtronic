import { FC } from "react";
import { exo } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  desc: string;
  img: string;
  className?: string;
};

export const SupportCard:FC<Props> = ({desc, img, subtitle = "CEO", title, className = ""}) => {

  return (
    <div className="group relative rounded-2xl space-y-6 overflow-hidden max-w-xs">
      <img
        className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        src={img}
        alt={title}
        loading="lazy"
        width="640"
        height="805"
      />
      <div 
        className={cn(
        "absolute inset-x-0 h-max mt-auto px-2 py-3 bg-primary-blue dark:bg-white translate-y-24 transition duration-300 ease-in-out",
        className)}>
        <div className="flex flex-col gap-y-3">
          <h4 className={`text-xl font-semibold dark:text-gray-700 text-white ${exo.className}`}>{title}</h4>
          <span className="block text-sm text-gray-300">{subtitle}</span>
        </div>
        <p className="mt-8 text-gray-300 dark:text-gray-600">{desc}</p>
      </div>
  </div>
  );
};                      