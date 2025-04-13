import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/fallback.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        localStorage.removeItem('users');
        localStorage.removeItem('user');
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
