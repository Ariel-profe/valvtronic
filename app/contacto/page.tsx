import { ContactForm } from '../components/auth/ContactForm'
import { Directions } from '../components/contact/Directions'
import { FormWrap } from '../components/ui/FormWrap'
import { exo } from '../fonts'

const ContactPage = async() => {

  return (
    <section className="container mx-auto px-3">
      <div className='grid lg:grid-cols-2 gap-3'>
        <div className={`flex flex-col gap-5 mt-10 ${exo.className}`}>
          <h1 className='text-3xl lg:text-6xl text-primary-purple max-w-[850px] '>¿Cuál es tu <br /> próximo <br /> proyecto?</h1>
          <p className='text-3xl text-primary-dark-grey '>Trabajemos juntos para <br /> hacer realidad tu idea.</p>
        </div>
        <FormWrap>
            <ContactForm />
        </FormWrap>
      </div>
      
      <div className='grid lg:grid-cols-2 gap-3 mt-20'>
        <h1 className={`text-3xl lg:text-6xl text-primary-purple ${exo.className} `}>Dónde <br /> encontrarnos</h1>
        <Directions />
        </div>
    </section>
  )
}

export default ContactPage