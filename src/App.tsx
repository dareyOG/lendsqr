import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthContextProvider } from './context/AuthContext';

import UserDetails from './features/Users/UserDetails';
import GeneralDetails from './features/Users/GeneralDetails';

import Login from './pages/LogIn';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';

import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="top" />
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<Users />} />
              <Route index element={<Navigate replace to={'users'} />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:username" element={<UserDetails />}>
                <Route index element={<Navigate replace to={'general-details'} />} />
                <Route path="general-details" element={<GeneralDetails />} />
                <Route path="documents" element={<GeneralDetails />} />
                <Route path="bank-details" element={<GeneralDetails />} />
                <Route path="loans" element={<GeneralDetails />} />
                <Route path="savings" element={<GeneralDetails />} />
                <Route path="app-and-system" element={<GeneralDetails />} />
              </Route>
              <Route path="/guarantors" element={<Users />} />
              <Route path="/loans" element={<Users />} />
              <Route path="/decision-models" element={<Users />} />
              <Route path="/savings" element={<Users />} />
              <Route path="/loan-requests" element={<Users />} />
              <Route path="/whitelist" element={<Users />} />
              <Route path="/karma" element={<Users />} />
              <Route path="/organization" element={<Users />} />
              <Route path="/loan-products" element={<Users />} />
              <Route path="/saving-products" element={<Users />} />
              <Route path="/fees-and-charges" element={<Users />} />
              <Route path="/transactions" element={<Users />} />
              <Route path="/services" element={<Users />} />
              <Route path="/service-account" element={<Users />} />
              <Route path="/settlements" element={<Users />} />
              <Route path="/reports" element={<Users />} />
              <Route path="/preferences" element={<Users />} />
              <Route path="/fees-and-pricing" element={<Users />} />
              <Route path="/audit-logs" element={<Users />} />
              <Route path="/systems-messages" element={<Users />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
