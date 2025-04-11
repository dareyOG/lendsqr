import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import UserDetails from './features/Users/UserDetails';
import GeneralDetails from './features/Users/GeneralDetails';
import Documents from './features/Users/Documents';
import BankDetails from './features/Users/BankDetails';
import UserLoans from './features/Users/UserLoans';
import UserSavings from './features/Users/UserSavings';
import AppSystem from './features/Users/AppSystem';

import Login from './pages/LogIn';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import Guarantors from './pages/Guarantors';
import DecisionModels from './pages/DecisionModels';
import Savings from './pages/Savings';
import LoanRequests from './pages/LoanRequests';
import Whitelist from './pages/Whitelist';
import Karma from './pages/Karma';
import Loans from './pages/Loans';
import Organization from './pages/Organization';
import LoanProducts from './pages/LoanProducts';
import SavingProducts from './pages/SavingProducts';
import Charges from './pages/Charges';
import Transactions from './pages/Transactions';
import Services from './pages/Services';
import ServiceAccount from './pages/ServiceAccount';
import Settlements from './pages/Settlements';
import Reports from './pages/Reports';
import Pereferences from './pages/Pereferences';
import Pricing from './pages/Pricing';
import AuditLogs from './pages/AuditLogs';
import SystemsMessages from './pages/SystemsMessages';
import PageNotFound from './pages/PageNotFound';

import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import AuthContextProvider from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
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
              <Route index element={<Navigate replace to={'dashboard'} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:userId" element={<UserDetails />}>
                <Route index element={<Navigate replace to={'general-details'} />} />
                <Route path="general-details" element={<GeneralDetails />} />
                <Route path="documents" element={<Documents />} />
                <Route path="bank-details" element={<BankDetails />} />
                <Route path="loans" element={<UserLoans />} />
                <Route path="savings" element={<UserSavings />} />
                <Route path="app-and-system" element={<AppSystem />} />
              </Route>
              <Route path="/guarantors" element={<Guarantors />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/decision-models" element={<DecisionModels />} />
              <Route path="/savings" element={<Savings />} />
              <Route path="/loan-requests" element={<LoanRequests />} />
              <Route path="/whitelist" element={<Whitelist />} />
              <Route path="/karma" element={<Karma />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/loan-products" element={<LoanProducts />} />
              <Route path="/saving-products" element={<SavingProducts />} />
              <Route path="/fees-and-charges" element={<Charges />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-account" element={<ServiceAccount />} />
              <Route path="/settlements" element={<Settlements />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/preferences" element={<Pereferences />} />
              <Route path="/fees-and-pricing" element={<Pricing />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="/systems-messages" element={<SystemsMessages />} />
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
