import { useMemo } from 'react';
import Lottie from 'react-lottie-player';
import AuthAnimation from '../../../public/assets/animations/auth-page-animation.json';
import useForm from '../../hooks/useForm';
import { AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';

export default function Auth() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const { form, onChangeHandler } = useForm({
    email: '',
    password: '',
  });

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val);
  }, [form]);

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#FAFBFB]'>
      <div className='flex h-4/5 w-4/5  justify-center '>
        <div className='w-1/3'>
          <Lottie loop animationData={AuthAnimation} play className='h-full ' />
        </div>
        <div className=''>
          <div className=' h-3/4 w-96  items-center  border border-gray-200 bg-white p-16'>
            <div className='mb-12 text-center font-serif text-4xl font-semibold tracking-widest text-[#272627]'>
              Instagram
            </div>
            <div>
              <form
                onSubmit={submitHandler}
                className='flex h-full flex-col items-center '
              >
                <input
                  type='email'
                  name='email'
                  id='email'
                  onChange={onChangeHandler}
                  value={form.email}
                  placeholder='Email'
                  className='mb-4 w-72 rounded-sm border bg-slate-100 py-2 px-4 text-[#272627] outline-none placeholder:text-sm hover:bg-transparent focus:border-gray-400 focus:bg-transparent'
                />
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={onChangeHandler}
                  value={form.password}
                  placeholder='Password'
                  className=' w-72 rounded-sm border  bg-slate-100 py-2 px-4 text-[#272627] outline-none placeholder:text-sm hover:bg-transparent focus:border-gray-400 focus:bg-transparent '
                />
                <button
                  type='submit'
                  className=' mt-8 w-72 transform rounded-sm bg-blue-600 py-2 px-7 text-xl font-medium text-white transition active:scale-75 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-blue-300'
                  disabled={isDisabled}
                >
                  Log in
                </button>
              </form>
            </div>
            <div className='mt-8 flex w-full items-center justify-center space-x-4'>
              <div className='h-0.5 w-full bg-slate-400' />
              <div className='text-gray-600'>OR</div>
              <div className='h-0.5 w-full bg-slate-400' />
            </div>
            <div className='m-auto mt-3 flex w-48 cursor-pointer items-center justify-center text-blue-700'>
              <AiFillFacebook className='mx-1 inline-block text-xl' />
              <span className='font-medium'>Log in with Facebook</span>
            </div>
          </div>
          <div className='mt-4 flex h-7  w-96 items-center justify-center border border-gray-200 bg-white p-8'>
            {' '}
            Don&apos;t have an account?
            <Link href='/signup' className='ml-1 font-medium text-blue-500'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
