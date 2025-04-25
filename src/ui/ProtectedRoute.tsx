import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/Authentication/useAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!isAuthenticated && !token) navigate('/login', { replace: true });
  }, [isAuthenticated, token, navigate]);

  return children;
}

export default ProtectedRoute;
