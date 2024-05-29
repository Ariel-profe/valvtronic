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

        <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
            {profiles.map( ({desc, id, img, name}) => (
              <SupportCard index={id} key={id} title={name} desc={desc} img={img} />
            ))}
        </div>

    </div>
  )
}
