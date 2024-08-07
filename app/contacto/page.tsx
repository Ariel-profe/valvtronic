
import { ContactForm } from '@/components/ContactForm'
import { FormWrap } from '@/components/ui/FormWrap'
import { exo } from '../fonts'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const ContactPage = async() => {

  return (
    <section className="px-3 lg:px-6">
      <div className='grid lg:grid-cols-2 gap-3'>
        <div className={`flex flex-col gap-5 mt-10 ${exo.className}`}>
          <h1 className='text-3xl lg:text-6xl text-primary-blue max-w-[850px] '>¿Cuál es tu <br /> próximo <br /> proyecto?</h1>
          <p className='text-3xl text-primary-dark-grey '>Trabajemos juntos para hacer <br /> tus ideas realidad.</p>
        </div>
        <FormWrap>
            <ContactForm />
        </FormWrap>
      </div>
      
      <div className='grid lg:grid-cols-2 gap-3 lg:mt-20'>
        <div className={`flex flex-col gap-5 my-10 ${exo.className}`}>
          <h1 className='text-3xl lg:text-6xl text-primary-blue max-w-[850px] '>Dónde <br /> encontrarnos</h1>
          <p className='text-3xl text-primary-dark-grey '>Ubicados en puntos <br /> estratégicos de la Argentina.</p>
        </div>
        
        <Accordion type="single" collapsible className="grid items-center gap-3">
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-start'>Oficinas comerciales y administración</AccordionTrigger>
            <AccordionContent>
              Buenos Aires - Argentina <br />
              Irala 393 | La Boca (C1163ABG) <br />
              +54-911-5772-5464 <br />
              https:// <br />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className='text-start'>Planta industrial y administración</AccordionTrigger>
            <AccordionContent>
              Mendoza - Argentina <br />
              Irala 393 | La Boca (C1163ABG) <br />
              +54-911-5772-5464 <br />
              https:// <br />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default ContactPage