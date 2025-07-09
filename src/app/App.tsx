import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/widgets/layout/Layout';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
};

export default App;
