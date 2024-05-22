import { SupportCard } from './SupportCard';

export const Support = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 place-content-center">
        <SupportCard title={"SOPORTE Y ASISTENCIA"} companyName="Servicio postventa" desc={"Resolución de problemas técnicos, reparaciones, mantenimiento y asesoramiento para garantizar el funcionamiento adecuado del producto."} img={"/assets/services/service-card.webp"} />
        <SupportCard title={"CONOCIMIENTO ESPECÍFICO"} companyName="Charlas técnicas" desc={"Soluciones inteligentes y personalizadas a todas aquellas empresas que requieran mejoras en sus procesos para el control de fluidos."} img={"/assets/services/service-card.webp"}/>
        <SupportCard title={"INTERCAMBIO Y APRENDIZAJE"} companyName="Capacitaciones" desc={"Programas diseñados para incrementar las habilidades y conocimientos de los empleados en áreas específicas relacionadas con su trabajo."} img={"/assets/services/service-card.webp"}/>
    </div>
  )
}