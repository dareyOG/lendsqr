import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../features/Authentication/useAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      if (
        !localStorage.getItem('token') ||
        !isAuthenticated ||
        (!localStorage.getItem('token') && !isAuthenticated)
      ) {
        // If the token is removed or the user is not authenticated, redirect to login
        navigate('/login');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate, isAuthenticated]);

  return children;
}

export default ProtectedRoute;
