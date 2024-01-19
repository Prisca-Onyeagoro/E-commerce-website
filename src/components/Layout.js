'use client';

import { Store } from '@/utils/Store';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';

export default function Layout({ children }) {
  const { status, data: session } = useSession();
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setcartItemsCount] = useState(0);
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart]);
  return (
    <>
      <ToastContainer position="bottom-center" limit={9} />
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
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-800 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {status === 'loading' ? (
                'wait...'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-yellow-700">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg">
                    <Menu.Item>
                      <DropdownLink></DropdownLink>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link className="p-2   font-semibold" href={'/login'}>
                  Login
                </Link>
              )}
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
