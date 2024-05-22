"use client";

import { LoginForm } from "@/components/auth/LoginForm";

const LoginPage = () => {

  return (
      <div className='container mx-auto grid md:grid-cols-2 gap-2 mt-10 lg:mt-14'>
        <div className='flex justify-center items-start max-h-[750px]'>
          <img src="/assets/images/login.webp" alt="login-imagen" className='h-full object-cover' />
        </div>
        <LoginForm />       
      </div>
  )
}

export default LoginPage