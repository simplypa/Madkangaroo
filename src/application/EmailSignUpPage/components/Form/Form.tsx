import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { Variant } from '@/components/Button'
import Error from '@/components/Error'
import AuthButton from '@/components/AuthButton'
import Input from '@/components/Input'
import { FiMail } from 'react-icons/fi'

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const onSubmit = async (data: any): Promise<void> => {
    setIsLoading(true)
    await signIn('email', {
      callbackUrl: localStorage.getItem('redirect_url') || '/',
      email: data.email,
    })
    localStorage.removeItem('redirect_url')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <Input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required: true,
            validate: (value) => {
              const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/i
              return regex.test(value) || 'Please enter a valid email address.'
            },
          })}
          placeholder="Email Address"
        />
        {errors.email && <Error>{String(errors.email.message)}</Error>}
      </div>
      <AuthButton
        onClick={handleSubmit(onSubmit)}
        icon={<FiMail className="text-lg" />}
        isLoading={isLoading}
        variant={Variant.Dark}
        block
        type="submit"
      >
        Continue with Email
      </AuthButton>
    </form>
  )
}

export default Form
