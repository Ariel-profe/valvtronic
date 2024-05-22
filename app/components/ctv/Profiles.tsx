import { profiles } from '@/utils/ctv';
import { SupportCard } from '../services/SupportCard';
import { TitleText } from '../ui/CustomText';

export const Profiles = () => {
  return (
    <div className='container mx-auto flex flex-col gap-2 mt-10 lg:mt-20 items-center justify-center'>
        <div className='w-full'>
            <TitleText
                title={<>Un equipo con experiencia <br /> y trayectoria</>}
                textStyles="text-center"
            />
        </div>

        <div className='container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 place-content-center'>
            {profiles.map( ({desc, id, img, name}) => (
                    <SupportCard key={id} title={name} desc={desc} img={img} />
            ))}
        </div>

    </div>
  )
}
