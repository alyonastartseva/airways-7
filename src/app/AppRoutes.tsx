import LoginPage from '@/pages/Auth/LoginPage';
import PassengersTable from '@entities/PassengersTable';
import HomePage from '@pages/home/HomePage';
import Layout from '@widgets/layout/Layout';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/passengers-table" element={<PassengersTable />} />
    </Route>
  </Routes>
);

export default AppRoutes;
