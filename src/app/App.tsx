import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Router } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
