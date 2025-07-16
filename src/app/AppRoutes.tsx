import LoginPage from '@/pages/Auth/LoginPage';
import Layout from '@/widgets/layout/Layout';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<LoginPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
