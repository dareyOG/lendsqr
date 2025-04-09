import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../features/Authentication/useAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      if (!localStorage.getItem('token') && !isAuthenticated) {
        navigate('/login');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isAuthenticated, navigate]);

  return children;
}

export default ProtectedRoute;
