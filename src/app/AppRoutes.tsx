import PrivateRoute from './providers/ui/PrivateRoute';
import LoginPage from '@/pages/Auth/LoginPage';
import AdminPassengerPage from '@/pages/admin/passengers';
import HomePage from '@pages/home/HomePage';
import Layout from '@widgets/layout/Layout';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="/admin/passengers-table"
        element={
          <PrivateRoute>
            <AdminPassengerPage />
          </PrivateRoute>
        }
      />
    </Route>
  </Routes>
);

export default AppRoutes;
