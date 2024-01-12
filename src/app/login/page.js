import Layout from '@/components/Layout';
import React from 'react';
import Link from 'next/link';

const LoginScreen = () => {
  return (
    <Layout>
      <form className="mx-auto max-w-screen-md">
        <h1 className="mb-4 text-xl font-bold">Login</h1>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            className="w-full font-bold"
            id="email"
            autoFocus
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            className="w-full font-bold"
            id="email"
            autoFocus
          />
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
