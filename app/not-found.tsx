import Link from 'next/link';

type Props = {};

export default async function NotFound() {
  return (
    <div className='fallback-section'>
      <h1>404</h1>
      <h1>NOT FOUND</h1>
      <Link href='/' className='fallback-button button'>
        Take Me Home!
      </Link>
    </div>
  );
}
