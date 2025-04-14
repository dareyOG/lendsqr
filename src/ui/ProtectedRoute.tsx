import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/Authentication/useAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleStorageChange = () => {
      if (!localStorage.get('users') || (!localStorage.getItem('curr_user') && !isAuthenticated)) {
        localStorage.clear();
        navigate('/login', { replace: true });
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
