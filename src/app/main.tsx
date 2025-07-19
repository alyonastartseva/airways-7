import { store } from '../features/TicketSearch/model/store';
import App from './App';
import './index.css';
import '@/shared/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import "@shared/styles/index.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
