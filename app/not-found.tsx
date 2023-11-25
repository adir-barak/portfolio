import Link from 'next/link';

type Props = {};

export default async function NotFound() {
  return (
    <div className='h-screen w-screen mx-auto grid place-items-center place-content-center text-8xl text-secondary-1'>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <Link href='/' className='button'>
        Get Me Back Home!
      </Link>
    </div>
  );
}
