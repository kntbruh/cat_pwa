import { Link } from 'react-router';

export function ErrorPage() {
  return (
    <>
      <div className='text-red-600 text-6xl m-5 text-center'>
        Error, go back home
      </div>
      <Link
        to='/'
        className='text-3xl bg-amber-600 border-solid border-amber-200 hover:bg-amber-200 border-2 rounded-2xl mx-auto'
      >
        Home
      </Link>
    </>
  );
}
