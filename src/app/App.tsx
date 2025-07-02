import TicketSearch from '../features/TicketSearch/TicketSearch';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <main className="app-main">
        <TicketSearch />
      </main>
    </div>
  );
}
