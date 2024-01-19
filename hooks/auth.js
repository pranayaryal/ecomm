import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'


export const useAuth = ({ middleware }) => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)

  const csrf = async () => axios.get("/sanctum/csrf-cookie")

  const { data: user, error, mutate } = useSWR("/api/user",
    () => axios.get("/api/user")
      .then(response => response.data)
      .catch(error => {
        if (error.response.status !== 409) {
          throw error;
        }
      })
  )

  const login = async ({ setErrors, ...props}) => {
    setErrors([])

    await csrf()
    console.log('csrf', csrf())

    axios.post('/login', props)
    .then(() => mutate() && router.push('/dashboard'))
    .catch(error => {
      console.log(error)
      if (error.response.status !== 422) throw error;
      setErrors(Object.values(error.response.data.errors))
    })
  }

  const register = async ({ setErrors, ...props}) => {
    setErrors([])

    // await csrf()

    axios.post('/register', props)
    .then(() => mutate() && router.push('/dashboard'))
    .catch(error => {
      console.log(error)
      if (error.response.status !== 422) throw error;
      setErrors(Object.values(error.response.data.errors))
    })
  }

  const logout = async () => {
    await csrf()
    await axios.post("/logout");
    mutate(null)
    router.push("/login")
  }

  useEffect(() => {
    if (user || error) {
      setIsLoading(false)

      if (middleware === "guest" && user) {
        console.log(user)
        router.push("/")
      }
      if (middleware === "auth" && error) router.push("/login") 
    }
  })

  return {
    user,
    csrf,
    isLoading,
    login,
    logout,
    register
  }
}