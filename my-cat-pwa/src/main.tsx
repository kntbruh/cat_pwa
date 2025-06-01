import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Cats from './pages/Cats.tsx';
import Info from './pages/Info.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Cat from './pages/Cat.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/auth/Login.tsx';
import { ROUTES } from './constants/routes.ts';

registerSW({
  onNeedRefresh() {
    console.log('Need refresh');
  },
  onOfflineReady() {
    console.log('Offline ready');
  },
});

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: ROUTES.CATS, element: <Cats /> },
      { path: '/cat/:catId', element: <Cat /> },
      { path: ROUTES.INFO, element: <Info /> },
      { path: ROUTES.LOGIN, element: <Login /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
