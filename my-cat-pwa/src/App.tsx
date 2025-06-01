import { Navigate, Outlet, useLocation } from 'react-router';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { ROUTES } from './constants/routes';
import { useAuth } from './context/AuthContext';

function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === ROUTES.LOGIN;

  const { isLoggedIn } = useAuth();

  if (!isLoggedIn && !isAuthPage) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return (
    <div className='grid gap-5'>
      {!isAuthPage && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
