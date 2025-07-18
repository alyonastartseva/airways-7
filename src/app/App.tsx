import TicketSearch from '../features/TicketSearch/TicketSearch/TicketSearch';
import { ReturnFlightSelector } from '../shared/ui/ThereBack/ReturnFlightSelector/ReturnFlightSelector';
import { TestDateOption } from '../shared/ui/ThereBack/ReturnFlightSelector/TestDateOption';
import { ThereFlightSelector } from '../shared/ui/ThereBack/ThereFlightSelector/ThereFlightSelector';

export default function App() {
  return (
    <div className="app">
      <header className="app-header" />
      <main className="app-main">
        <TicketSearch />

        <ReturnFlightSelector
          route="Москва → Томск"
          titleDate="чт, 19 июня"
          dates={TestDateOption}
          onDateChange={(opt) => console.log('Возврат:', opt)}
          onClassChange={(cls) => console.log('Класс:', cls)}
        />
        <ThereFlightSelector
          route="Москва → Томск"
          titleDate="чт, 19 июня"
          dates={TestDateOption}
          onDateChange={TestDateOption}
        />
      </main>
    </div>
  );
}
