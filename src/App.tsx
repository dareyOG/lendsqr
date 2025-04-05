import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Users from './pages/Users/Users';
import UserDetails from './pages/Users/UserDetails';
import PageNotFound from './pages/PageNotFound';

import AppLayout from './ui/AppLayout';
import GeneralDetails from './ui/GeneralDetails';
import Documents from './ui/Documents';
import BankDetails from './ui/BankDetails';
import Loans from './ui/Loans';
import Savings from './ui/Savings';
import AppSystem from './ui/AppSystem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Users />} />
          <Route index element={<Navigate replace to={'users'} />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />}>
            <Route index element={<Navigate replace to={'general-details'} />} />
            <Route path="general-details" element={<GeneralDetails />} />
            <Route path="documents" element={<Documents />} />
            <Route path="bank-details" element={<BankDetails />} />
            <Route path="loans" element={<Loans />} />
            <Route path="savings" element={<Savings />} />
            <Route path="app-and-system" element={<AppSystem />} />
          </Route>
          <Route path="guarantors" element={<Users />} />
          <Route path="loans" element={<Users />} />
          <Route path="decision-models" element={<Users />} />
          <Route path="savings" element={<Users />} />
          <Route path="loan-requests" element={<Users />} />
          <Route path="whitelist" element={<Users />} />
          <Route path="karma" element={<Users />} />
          <Route path="organization" element={<Users />} />
          <Route path="loan-products" element={<Users />} />
          <Route path="saving-products" element={<Users />} />
          <Route path="fees-and-charges" element={<Users />} />
          <Route path="transactions" element={<Users />} />
          <Route path="services" element={<Users />} />
          <Route path="service-account" element={<Users />} />
          <Route path="settlements" element={<Users />} />
          <Route path="reports" element={<Users />} />
          <Route path="preferences" element={<Users />} />
          <Route path="fees-and-pricing" element={<Users />} />
          <Route path="audit-logs" element={<Users />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
