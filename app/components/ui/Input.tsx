"use client";

import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: any;
    textarea?: boolean;
    value?: number;
    validate?: any;
    minLength?: number | undefined;
};

export const Input:FC<Props> = ({id, errors, label, register, disabled, required = false, type, textarea = false, minLength = undefined, validate}) => {  

  return (
    <div className="w-full relative">
        {
            !textarea 
            ? (
                <>
                <input  
                id={id}
                type={type}
                autoComplete="off"  
                disabled={disabled}
                {...register(id, {
                    required: {value: required, message: 'Este campo es obligatorio'}, 
                    minLength: minLength && {value: minLength, message: `Debe tener al menos ${minLength} caracteres`},
                    validate: validate && {validate}
                })}
                placeholder=' '
                className={`
                    peer
                    w-full
                    p-2
                    outline-none
                    text-primary-blue
                    tracking-wider
                    rounded-md
                    border-2
                    border-primary-blue
                    bg-transparent
                    z-50
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${errors[id] ? 'border-rose-400' : 'border-primary-blue'}
                    ${errors[id] ? 'focus:border-rose-400' : 'focus:border-primary-blue'}
                `}
            />
            <p className="pt-1 text-red-400 text-center text-sm">{errors[id]?.message}</p>
            </>
            ) : (
                <>
                <textarea  
                id={id}
                disabled={disabled}
                {...register(id, {
                    required: {value: required, message: 'Este campo es obligatorio'}, 
                    minLength: minLength && {value: minLength, message: `Debe tener al menos ${minLength} letras`}
                })}
                placeholder=" "
                className={`
                peer
                w-full
                p-2
                pt-6
                bg-transparent
                max-h-[150px]
                min-h-[150px]
                outline-none
                rounded-md
                text-primary-blue
                tracking-wider
                border-2
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${errors[id] ? 'border-rose-400' : 'border-primary-blue'}
                ${errors[id] ? 'focus:border-rose-400' : 'focus:border-primary-blue'}
                `}
                />
                <p className="pt-1 text-red-400 text-center text-sm">{errors[id]?.message}</p>
                </>
            )
        }
        <label 
            htmlFor={id}
            className={`
                inline
                absolute
                cursor-text
                text-sm
                duration-150
                transform
                -translate-y-3
                top-3
                z-0
                origin-[0]
                left-4
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
                ${errors[id] ? 'text-rose-500' : ' text-primary-blue'}
            `}
        >{label}</label>
    </div>
  )
}