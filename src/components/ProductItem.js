import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="card p-5 transform transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </Link>

        <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg">{product.name}</h2>
          </Link>

          <p className="mb-2">{product.brand}</p>
          <p className="mb-2">{product.price}</p>

          <button className="primary-button" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
