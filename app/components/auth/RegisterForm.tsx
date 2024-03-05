"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';

import { Heading } from "../ui/Heading";
import { Input } from "../ui/Input";
import { Button } from '../ui/Button';
import { IUser } from '@/interfaces/user';
import { Loading } from '../ui/Loading';
import { isEmail } from '@/utils/contact';
import { FaGoogle } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { RoundedButton } from '../ui/RoundedButton';

export const RegisterForm = ({user}:{user:IUser | null})  => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
       defaultValues : { 
        name: '',
        email: '',
        password: ''
       }
    });

    useEffect(() => {
        if(user){
          router.push('/');
          router.refresh();
        }
      }, [router, user]);

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        
        axios.post('/api/register', data)
        .then(() => {
            toast.success('Te has registrado con éxito');
            
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
        .catch(() => {
            toast.error('Ups! Algo salió mal...')
            setIsLoading(false)
        })
        .finally(() => {
            setIsLoading(false);
        });
    };  
    
    if(user){
        return <p className='text-center text-slate-100'>Ya está conectado...</p>
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

        <div data-scroll data-scroll-speed={0.1}>
            <RoundedButton 
                backgroundColor='#4A53A0'
                text={isLoading ? <Loading /> : "Registrarme"}
                onClick={handleSubmit(onSubmit)}
            />
        </div>

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
