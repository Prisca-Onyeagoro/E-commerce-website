'use client';
import Layout from '@/components/Layout';
import data from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { Store } from '@/utils/store';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

const page = ({ params }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const product = data.products.find((x) => x.slug === params.slug);
  if (!product) {
    return (
      <>
        <div>Product not found</div>
      </>
    );
  }

  const addToCart = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    if (product.countInStock < quantity) {
      alert('sorry out of stock');
    }
    router.push('/cart');
  };
  return (
    <div>
      <Layout>
        <div className="py-2">
          <Link href="/">Back to home</Link>
        </div>

        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
            />
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-lg">{product.name}</h1>
              </li>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0
                    ? `${product.countInStock} In stock`
                    : `${product.countInStock} ${product.name}. Check back later `}
                </div>
              </div>
              <button className="primary-button w-full" onClick={addToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default page;
