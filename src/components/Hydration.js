import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@/app/cart/page'), { ssr: false });

export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  );
}
