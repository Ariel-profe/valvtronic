"use client";

import { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {signIn, useSession} from 'next-auth/react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';

import { Heading } from "../ui/Heading";
import { Input } from "../ui/Input";
import { IUser } from '@/interfaces/user';
import { Loading } from '../ui/Loading';
import { isEmail } from '@/utils/contact';
import { FaGoogle } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';

export const RegisterForm = ({user}:{user:IUser | null})  => {

    const {status} = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
       defaultValues : { 
        name: '',
        email: '',
        password: ''
       }
    });

    if(status === "loading"){
        return (
          <div>Loading...</div>
        )
      };
    
      if(status === "authenticated"){
        return (
            router.push("/")
        )
      };

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        
        axios.post('/api/register', data)
        .then(() => {
            toast.success('Cuenta creada');
            
            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                if(callback?.ok){
                    router.push('/');
                    router.refresh();
                    toast.success('Sesión iniciada');
                }
                
                if(callback?.error){
                    toast.error(callback.error)
                }
            })
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);            
            toast.error(error.response.data.error);
            setIsLoading(false);

        })
        .finally(() => {
            setIsLoading(false);
        });
    };

  return (
    <div  className='max-w-[650px] w-full flex flex-col gap-y-8 rounded-md p-4 md:p-8'>
        <Heading title={"Crea tu cuenta"} />

        <Input 
            id="name"
            type="text"
            label="Nombre"
            disabled={isLoading}
            register={register}
            minLength={3}
            errors={errors}
            required
        />
        <Input 
            id="email"
            label="Email"
            type="string"
            disabled={isLoading}
            register={register}
            errors={errors}
            validate={isEmail}
            required
        />
        <Input 
            id="password"
            label="Password"
            type="password"
            disabled={isLoading}
            register={register}
            minLength={6}
            errors={errors}
            required
        />

        <button 
            className='flex items-center gap-x-3 group text-[#8115FF] md:hover:bg-[#8115FF] md:hover:text-white w-fit px-3 py-2 rounded-full transition-all'
            onClick={handleSubmit(onSubmit)}
        >
            <span className='text-xl md:group-hover:text-white transition'>{isLoading ? <Loading /> : "Registrarme"}</span>
            <IoIosArrowForward />
        </button>

        <p className='text-sm lg:text-xl text-primary-dark-grey'>
            ¿Ya tienes una cuenta? <Link href={"/login"} className='underline hover:text-primary-purple transition'>Iniciar sesión</Link>
        </p>

        <p>O registrate con</p>

        <button
            className='flex items-center gap-2 text-primary-dark-grey md:hover:text-primary-purple transition'
            onClick={() => {signIn("google")}}
        >
            <FaGoogle className="border border-primary-dark-grey p-2 rounded-full text-4xl" />
            Google
        </button>
    </div>
  )
}
