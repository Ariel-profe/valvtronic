import { profiles } from '@/utils/ctv';
import { SupportCard } from '../services/SupportCard';
import { TitleText } from '../ui/CustomText';

export const Profiles = () => {
  return (
    <div className='container mx-auto flex flex-col gap-2 mt-10 lg:mt-20 items-center justify-center'>
      <div className="mb-16 w-full">
        <TitleText
          title={<>Un equipo con experiencia <br /> y trayectoria</>}
          textStyles="text-center"
        />
      </div>

      <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center gap-5 w-full">
        {profiles.map( ({desc, id, img, name}) => (
          <SupportCard key={id} title={name} desc={desc} img={img} className='bottom-4 group-hover:translate-y-4' />
        ))}    
      </div>                              
    </div>
  )
};