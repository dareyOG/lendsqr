import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';

import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={'dashboard'} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
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
