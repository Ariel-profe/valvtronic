
export const FormItem = ({title, property}:{title: string; property:string | boolean | null}) => {

    if(property === null || property === "") return;

    

  return (
    <div className="flex items-center gap-x-3">
        <h5 className="font-bold">{title}:</h5>
        <p className="text-primary-dark-grey">{property}</p>
  </div>
  )
}
