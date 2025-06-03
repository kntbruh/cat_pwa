import { useQuery } from '@tanstack/react-query';
import { catQueryOptions } from '../services/catsService';
import { Link, href } from 'react-router';
import { ROUTES } from '../constants/routes';
import { useRef } from 'react';

export function Cats() {
  const { data, isPending, isFetching, refetch, error } = useQuery(
    catQueryOptions()
  );

  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No cat found</div>;

  return (
    <div className='grid place-items-center m-16'>
      <div className='text-center text-4xl'>Cats</div>
      <button
        ref={buttonRef}
        onClick={() => refetch()}
        className='text-bold my-5 bg-purple-300 w-50 h-10 rounded-xl text-2xl
         hover:bg-purple-400 transition-colors'
      >
        refetch
      </button>
      {isPending || isFetching ? (
        <div>Loading...</div>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-16'>
          {data?.map((cat) => (
            <Link
              key={cat.id}
              // to={`/cat/${cat.id}`}
              to={href(ROUTES.CAT, { catId: cat.id })}
              className='text-center hover:text-blue-300'
            >
              {`Cat ${cat.id}`}
              <img src={cat.url} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
