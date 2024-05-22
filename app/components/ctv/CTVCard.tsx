
export const CTVCard = ({title, subtitle, img}:{title: string; subtitle:string; img:string;}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div>
            <h4 className="text-xl lg:text-4xl">{title}</h4>
            <p className="text-lg lg:text-2xl text-primary-dark-grey">{subtitle}</p>
        </div>
        <img src={img} alt={`${title}-imagen`} className="h-[500px]" />
    </div>
  )
}
