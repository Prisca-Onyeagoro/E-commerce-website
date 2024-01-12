'use client';
import Layout from '@/components/Layout';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {};
  return (
    <Layout>
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl font-bold">Login</h1>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter your email address',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid eamil',
              },
            })}
            className="w-full font-bold"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500 font-bold">{errors.email.message}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter a password',
              minLength: { value: 3, message: 'Password is more than 5 char' },
            })}
            className="w-full font-bold"
            id="password"
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500 font-bold ">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button font-bold">Login</button>
        </div>
        <div className="mb-4 font-sans">
          Don&apos;t have an account? &nbsp;
          <Link href="/" className="text-red-500 font-bold">
            Register
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default LoginScreen;
