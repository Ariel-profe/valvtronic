"use client";

import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { AiOutlineGoogle } from 'react-icons/ai';
import toast from 'react-hot-toast';

import { Input } from "../ui/Input";
import { Button } from '../ui/Button';
import { IUser } from '@/interfaces/user';
import { Heading } from '../ui/Heading';
import { Loading } from '../ui/Loading';
import { FaGoogle } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { RoundedButton } from '../ui/RoundedButton';

export const LoginForm = ({user}:{user:IUser | null}) => {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
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
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false);

            if(callback?.ok){
                router.push('/');
                router.refresh();
                toast.success('Sesión iniciada');
        }

        if(callback?.error){
            toast.error(callback.error)
        }
        })
    };    

    if(user){
        return <p className='text-center text-slate-100'>Ya está conectado...</p>
    };

  return (
    <div className='max-w-[650px] w-full flex flex-col gap-y-8 rounded-md px-3'>
        <Heading title={"¡Te damos la bienvenida!"} />

        <Input 
            id="email"
            label="Email"
            type="string"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
        />
        <Input 
            id="password"
            label="Contraseña"
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
        />

        <div data-scroll data-scroll-speed={0.1}>
            <RoundedButton 
                backgroundColor='#4A53A0'
                text={isLoading ? <Loading /> : "Iniciar sesión"}
                onClick={handleSubmit(onSubmit)}
            />
        </div>

        <p className='text-sm lg:text-xl text-primary-dark-grey'>
            ¿Todavía no sos miembro? <Link href={"/registro"} className='underline md:hover:text-primary-purple transition'>Registrate ahora.</Link>
        </p>

        <p>O iniciá sesión con</p>

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
