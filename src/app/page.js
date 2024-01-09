import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';
import data from '@/utils/data';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.products.map((product) => {
            return <ProductItem product={product} key={product.slug} />;
          })}
        </div>
      </Layout>
    </main>
  );
}
