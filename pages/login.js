import { useAuth } from '@/hooks/auth'
import { useState } from 'react';
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const { login, isLoading, user } = useAuth({ 'middleware': 'guest'})
  console.log(isLoading)
  return (
    <main
      className='w-[80%] ml-auto mr-auto md:w-[100%] md:mt-16 max-w-[1500px] pr-0 md:pl-[50px] text-dark-slate-grey'
    >
      <p>You are in login</p>

    </main>
  )
};

export default Login;