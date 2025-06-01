import React from 'react';
import { useParams } from 'react-router';
import { BASE_URL } from '../services/urls';
import { useQuery } from '@tanstack/react-query';
import type { CatParams } from '../constants/routes';

function Cat() {
  const { catId } = useParams();
  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ['cats', catId],
    queryFn: () => fetchCats(catId),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No cat found</div>;

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <img
        src={data.url}
        alt={`Cat ${data.id}`}
        className='w-full h-auto rounded-lg'
      />
      {data.breeds && data.breeds.length > 0 && (
        <div className='mt-4'>
          <h2 className='text-2xl font-bold'>{data.breeds[0].name}</h2>
          <p className='mt-2'>{data.breeds[0].description}</p>
          <div className='mt-4'>
            <h3 className='text-xl font-semibold' text-white>
              Characteristics:
            </h3>
            <ul className='mt-2'>
              <li>Temperament: {data.breeds[0].temperament}</li>
              <li>Origin: {data.breeds[0].origin}</li>
              <li>Life Span: {data.breeds[0].life_span}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

const fetchCats = async (catId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(`${BASE_URL}/images/${catId}`);
  const data = await response.json();
  return data;
};

export default Cat;
