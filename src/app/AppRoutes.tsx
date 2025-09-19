import RequireAdmin from '@/features/auth/RequireAdmin';
import LoginPage from '@/pages/Auth/LoginPage';
import AdminPassengerPage from '@/pages/admin/passengers';
import SearchPage from '@/pages/search/SearchPage';
import Layout from '@/widgets/layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="search" replace />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="login" element={<LoginPage />} />

      <Route
        path="passengers-table"
        element={
          <RequireAdmin>
            <AdminPassengerPage />
          </RequireAdmin>
        }
      />
    </Route>

    <Route path="*" element={<Navigate to="/search" replace />} />
  </Routes>
);

export default AppRoutes;
