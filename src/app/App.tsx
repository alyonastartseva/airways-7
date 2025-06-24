import "./App.css";
import Ticket from "../entities/Ticket";

const ticket ={
    airline: 'S7',
    departureTime: '12:00',
    arrivalTime: '13:30',
    duration: '1ч 30мин',
    from: 'Санкт-Петербург',
    to: 'Мурманск',
    date: '20 авг, Вс',
    fares: [
        {
            name: 'Эконом Базовый',
            price: 3500,
            features: {
                handLuggage: true,
                luggage: false,
                exchange: true,
                refund: false,
            },
            remainingSeats: 2,
        },
                {
            name: 'Эконом Стандарт',
            price: 5734,
            features: {
                handLuggage: true,
                luggage: true,
                exchange: true,
                refund: false,
            },
        },
                {
            name: 'Эконом Плюс',
            price: 13400,
            features: {
                handLuggage: true,
                luggage: true,
                exchange: true,
                refund: true,
            },
            selected: true,
        },
    ]
}

function App() {
  return (
    <>
      <div>App</div>
      <Ticket data={ticket}/>
    </>
  );
}

export default App;
