import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../widgets/layout/Layout';
import LoginPage from '../pages/LoginPage';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
