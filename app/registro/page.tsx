import { RegisterForm } from "../components/auth/RegisterForm";
import { FormWrap } from "../components/ui/FormWrap";
// import { getUser } from "@/actions/user";

const RegisterPage = async() => {

  // const user = await getUser();

  return (
    <div className='container mx-auto grid md:grid-cols-2 gap-2'>
        <img src="/assets/images/login.webp" alt="login-imagen" className='object-cover' />

        <FormWrap>
            <RegisterForm user={null} />
        </FormWrap>
    </div>
  )
}

export default RegisterPage