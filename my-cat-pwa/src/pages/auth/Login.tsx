import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { ROUTES } from '../../constants/routes';

function Login() {
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const { control, handleSubmit, setValue, register, resetField } = useForm({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    const success = signIn(data.email, data.password);
    if (success) {
      navigate(ROUTES.CATS);
    } else {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col w-full max-w-md border border-gray-300 p-4 rounded-lg'>
        <span className='text-2xl font-bold items-center my20'>Sign in</span>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
        <form
          className='flex flex-col gap-4 my-4'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='email'
            placeholder='Email'
            {...register('email')}
            className='border border-gray-300 p-2 rounded-md'
            required
          />
          <input
            type='password'
            placeholder='Password'
            {...register('password')}
            className='border border-gray-300 p-2 rounded-md'
            required
          />

          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
