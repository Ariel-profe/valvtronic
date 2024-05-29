import { SupportCard } from './SupportCard';

export const Support = () => {
  return (
      <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
        <SupportCard 
          index={1}
          title='SOPORTE Y ASISTENCIA'
          desc={"Resolución de problemas técnicos, reparaciones, mantenimiento y asesoramiento para garantizar el funcionamiento adecuado del producto."} 
          img='/assets/services/postventa.webp'
          subtitle='Servicio postventa'
        />
        
        <SupportCard    
          index={2}
          title='CONOCIMIENTO ESPECÍFICO'
          desc={"Soluciones inteligentes y personalizadas a todas aquellas empresas que requieran mejoras en sus procesos para el control de fluidos."} 
          img='/assets/services/charlas.webp'
          subtitle='Charlas técnicas'
        />

         <SupportCard  
          index={3}
          title='INTERCAMBIO Y APRENDIZAJE'
          desc={"Resolución de problemas técnicos, reparaciones, mantenimiento y asesoramiento para garantizar el funcionamiento adecuado del producto."} 
          img='/assets/services/capacitaciones.webp'
          subtitle='Capacitaciones'
        />
    </div>
  )
}