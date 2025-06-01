export const ROUTES = {
  HOME: '/',
  CATS: '/cats',
  CAT: '/cat/:catId',
  INFO: '/info',
  LOGIN: '/login',
} as const;

export type CatParams = {
  [ROUTES.CAT]: {
    catId: string;
  };
};
