import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => (
  <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  </StrictMode>
);

export default App;
