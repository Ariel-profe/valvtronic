import { profiles } from '@/utils/ctv'
import { ProfileCard } from './ProfileCard'
import { ServiceCard } from '../services/ServiceCard'
import { SupportCard } from '../services/SupportCard'
import { TitleText } from '../ui/CustomText'

export const Profiles = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-2 mt-10 lg:mt-20'>
        <div className='w-full lg:w-1/3'>
            <TitleText
                title={<>Equipo capacitado en últimas tecnologías</>}
                textStyles="text-center"
            />
        </div>

        <div className='w-full lg:w-2/3 grid md:grid-cols-3 items-center justify-center gap-3 mt-10 lg:mt-0'>
            {
                profiles.map( ({desc, id, img, name}) => (
                    <SupportCard key={id} title={name} desc={desc} img={img} />
                ) )
            }
        </div>

    </div>
  )
}
