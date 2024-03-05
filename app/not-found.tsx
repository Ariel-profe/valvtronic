import Link from 'next/link';
import { exo } from './fonts';
 
export default function NotFound() {
  return (
    <div className='container mx-auto flex flex-col gap-3 h-[50vh]'>
      <h2 className={`text-3xl lg:text-6xl text-primary-purple pt-24 ${exo.className}`}>Oops, no <br /> encontramos la <br /> página que estás <br /> buscando</h2>
      <p className={`text-xl lg:text-3xl text-primary-dark-grey ${exo.className}`}>Parece que estás intentando acceder a una <br /> página que ha sido eliminada o que ya no <br /> existe.</p>
      <Link href="/" className='flex items-center'>
        <span className='text-xl text-primary-purple underline md:hover:opacity-75 transition'>Regresar al inicio</span>
      </Link>
    </div>
  )
}