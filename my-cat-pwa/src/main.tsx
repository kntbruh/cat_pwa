import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Cat, Cats, Info, ErrorPage } from '@/pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Login } from '@/pages/auth';
import { ROUTES } from './constants/routes.ts';
import { AuthProvider } from './context/AuthContext.tsx';
import { Toaster } from 'react-hot-toast';

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
    path: ROUTES.LOGIN,
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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            style: {
              border: '2px solid #3333',
              padding: '16px 16px',
              marginTop: '1px',
            },
          }}
        />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
