import TicketSearch from '../features/TicketSearch/TicketSearch/TicketSearch';
// import ThereFlight from '../shared/ui/ThereFlight/ThereFlight';
// import BackFlight from '../shared/ui/BackFlight/BackFlight';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <main className="app-main">
        <TicketSearch />
        {/* <ThereFlight /> */}
        {/* <BackFlight /> */}
      </main>
    </div>
  );
}
