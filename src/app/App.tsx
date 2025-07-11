import TicketSearch from '../features/TicketSearch/TicketSearch/TicketSearch';
import { ReturnFlightSelector } from '../shared/ui/ReturnFlightSelector/ReturnFlightSelector';
import './App.css';

const dates = [
  { weekday: 'вт', date: '17 июн', price: 12101 },
  { weekday: 'ср', date: '18 июн', price: 12101 },
  { weekday: 'чт', date: '19 июн', price: 12101 },
  { weekday: 'пт', date: '20 июн', price: 14496 },
  { weekday: 'сб', date: '21 июн', price: 16118 },
  { weekday: 'вт', date: '17 июн', price: 12101 },
  { weekday: 'ср', date: '18 июн', price: 12101 },
  { weekday: 'чт', date: '19 июн', price: 12101 },
  { weekday: 'пт', date: '20 июн', price: 14496 },
  { weekday: 'сб', date: '21 июн', price: 16118 },
  { weekday: 'вт', date: '17 июн', price: 12101 },
  { weekday: 'ср', date: '18 июн', price: 12101 },
  { weekday: 'чт', date: '19 июн', price: 12101 },
  { weekday: 'пт', date: '20 июн', price: 14496 },
  { weekday: 'сб', date: '21 июн', price: 16118 },
];

export default function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <main className="app-main">
        <ReturnFlightSelector
          dates={dates}
          onDateChange={(opt) => console.log('Возврат:', opt)}
          onClassChange={(cls) => console.log('Класс:', cls)}
        />
        <TicketSearch />
      </main>
    </div>
  );
}
