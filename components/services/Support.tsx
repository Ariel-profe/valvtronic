import { SupportCard } from './SupportCard';

export const Support = () => {
  return (
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 w-full lg:5/12'>
        <SupportCard 
          title='SOPORTE Y ASISTENCIA'
          img='/assets/services/postventa.webp'
          className='-bottom-32 group-hover:-translate-y-32 text-3xl'
        />
        
        <SupportCard    
          title='CONOCIMIENTO ESPECÍFICO' 
          img='/assets/services/charlas.webp'
          className='-bottom-14 group-hover:-translate-y-14 text-3xl'
        />

         <SupportCard  
          title='INTERCAMBIO Y APRENDIZAJE'
          img='/assets/services/capacitaciones.webp'
          className='-bottom-14 group-hover:-translate-y-14 text-3xl'
        />
    </div>
  )
}