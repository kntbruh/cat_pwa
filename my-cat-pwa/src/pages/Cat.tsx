import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { BASE_URL } from '../services/urls';
import { useQuery } from '@tanstack/react-query';
import type { CatParams } from '../constants/routes';
import { Button } from '@/components/Button';
import { BUTTON_KIND, BUTTON_SIZE } from '@/components/Button/ButtonTypes';

export function Cat() {
  const { catId } = useParams();
  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ['cats', catId],
    queryFn: () => fetchCats(catId),
  });

  const buttonRef = useRef(null);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No cat found</div>;

  return (
    <div className='flex flex-col max-w-2xl mx-auto p-4'>
      <img
        src={data.url}
        alt={`Cat ${data.id}`}
        className='w-full h-auto rounded-lg'
      />
      <Button
        ref={buttonRef}
        text={'Add to favorites'}
        size={BUTTON_SIZE.L}
        kind={BUTTON_KIND.SUCCESS}
        className='my-4'
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
