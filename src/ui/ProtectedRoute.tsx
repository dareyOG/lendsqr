import React from 'react';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const isAuthenticated = auth?.isAuthenticated;

  // useEffect(() => {
  //   if (!isAuthenticated) navigate('/login');
  // }, [isAuthenticated]);

  // If the user is authenticated, render the protected component
  // You can also use a router to navigate to the desired route
  // instead of using window.location.href
  // return <Navigate to="/users" replace />;
  return children;
}

export default ProtectedRoute;
