import { IconType } from "react-icons";
import { ImEye } from "react-icons/im";
import { GoGear } from "react-icons/go";
import { FiCodesandbox } from "react-icons/fi";
import { IoIosCloudOutline } from "react-icons/io";

export const ExploreCard = () => {
  return (
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-20">
        <Card title="I+D Investigación y desarrollo" subtitle="Innovación tecnológica" icon={ImEye} />
        <Card title="Ingeniería de detalles" subtitle="Planos y cálculos" icon={GoGear} />
        <Card title="Desarrollo de productos" subtitle="Válvulas, actuadores, sistemas de control" icon={FiCodesandbox} />
        <Card title="VAC | Centro de automatización" subtitle="Sector de fábrica" icon={IoIosCloudOutline} />
      </div>
  );
};

const Card = ({ title, subtitle, icon:Icon}:{ title:string; subtitle:string; icon:IconType}) => {
  return (
    <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg lg:text-2xl text-primary-blue group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 lg:text-lg">
        {subtitle}
      </p>
    </div>
  );
};