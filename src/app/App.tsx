import AppRoutes from './AppRoutes';
import { ThemeProvider } from '@/shared/hooks/ThemeProvider/ThemeProvider';
import { store } from '@/shared/store/store';
import '@/shared/styles/theme.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <div className="app">
            <header className="app-header" />
            <main className="app-main">
              <AppRoutes />
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
