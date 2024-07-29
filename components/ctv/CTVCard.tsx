
export const CTVCard = ({title, subtitle, img, reverse}:{title: string; subtitle:string; img:string; reverse?:boolean}) => {
  return (
    <div className={`flex flex-col items-center justify-between gap-5 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div>
          <h4 className="text-xl lg:text-4xl">{title}</h4>
          <p className="text-lg lg:text-2xl text-primary-dark-grey">{subtitle}</p>
        </div>
        <img src={img} alt={`${title}-imagen`} className="lg:h-[500px]" />
    </div>
  )
}
