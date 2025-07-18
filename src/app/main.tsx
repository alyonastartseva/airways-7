import App from './App.tsx';
import './index.css';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(<App />);
