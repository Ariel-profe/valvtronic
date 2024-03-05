import { FC } from "react";
import Image from "next/image";
import {FaUserCircle} from 'react-icons/fa'

interface Props {
    src?: string | null | undefined; 
}

export const Avatar:FC<Props> = ({src}) => {

    if(src){
        return <img
            src={src}
            alt='avatar'
            className="rounded-full"
        />
    }

  return ( <FaUserCircle size={24} color="#4A53A0" />)
}
