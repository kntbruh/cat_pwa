import { queryOptions } from '@tanstack/react-query';
import { BASE_URL } from './urls';
import { z } from 'zod';

export const catsSchema = z.object({
  id: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

export type Cat = z.infer<typeof catsSchema>;

export const catQueryOptions = () => {
  return queryOptions({
    queryKey: ['cats'],
    queryFn: fetchCats,
  });
};

export const fetchCats = async (): Promise<Cat[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const response = await fetch(`${BASE_URL}/images/search?limit=10`);
  const data = await response.json();
  return data;
};
