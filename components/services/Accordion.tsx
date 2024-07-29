import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export const AccordionMenu = () => {
    return ( 
        <div className="mt-10 container">
            <Accordion type="single" collapsible className="grid space-y-3">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Soluciones inteligentes</AccordionTrigger>
                    <AccordionContent>
                        Trabajamos para lograr la superioridad en cada uno de los productos y servicios que ofrecemos a nuestros clientes. Nos adaptamos a nuevos escenarios, animándonos a buscar nuevos caminos e intercambiando conocimiento y experiencia con colegas. La calidad está en la experiencia conjunta.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Personalizadas</AccordionTrigger>
                    <AccordionContent>
                        Podes hacerlo desde esta misma sección con el formulario de contacto (nos llegará un mail), o a través de nuestras redes que están colocadas en el pie de todas las páginas.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Empresas</AccordionTrigger>
                    <AccordionContent>
                        Muchos. Según tus necesidades nosotros abordarmos y planificamos el plan que se ajuste a vos. Todos nuestros planes se pueden modificar sin ningún problema para hacerlo perfecto a tu medida.
                    </AccordionContent>
                </AccordionItem>
            
                <AccordionItem value="item-4">
                    <AccordionTrigger>Desarrollar y mejorar</AccordionTrigger>
                    <AccordionContent>
                        Te ofrecemos un soporte activo, en el que vas a poder contactarte con nosotros sin barreras ni problemas. Tus necesidades son de nuestra incumbencia.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Control de fluidos</AccordionTrigger>
                    <AccordionContent>
                        Te ofrecemos un soporte activo, en el que vas a poder contactarte con nosotros sin barreras ni problemas. Tus necesidades son de nuestra incumbencia.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
    </div> 
    );
}