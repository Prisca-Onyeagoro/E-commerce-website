'use client';

import { Store } from '@/utils/store';
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';

export default function Layout({ children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            {/* Home logo */}
            <Link href="/" className="text-lg font-bold">
              amazona
            </Link>
            {/* navigation links */}
            <div>
              <Link className="p-2   font-semibold" href={'/cart'}>
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-800 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link className="p-2   font-semibold" href={'/login'}>
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>
        {/* footer */}

        <footer className="flex h-10 justify-center items-center shadow-inner font-semibold">
          <p>copyright &#169; 2022 Amazona</p>
        </footer>
      </div>
    </>
  );
}
