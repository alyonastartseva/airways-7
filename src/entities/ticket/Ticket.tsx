import type { ExtendedTicketData } from '../ticketCard/TicketCardType';
import styles from './Ticket.module.scss';
import { ExclamationCircleOutlined, DownOutlined } from '@ant-design/icons';
import { FaSuitcaseRolling, FaSuitcase, FaExchangeAlt, FaChair } from 'react-icons/fa';

interface Props {
  data: ExtendedTicketData;
  onToggle: () => void;
}

const getIcon = (value: boolean, IconComponent: React.ElementType) => (
  <IconComponent className={`${styles.icon} ${value ? styles.active : ''}`} />
);

const Ticket: React.FC<Props> = ({ data, onToggle }) => {
  const { segments, transferAirports = [] } = data;
  const routePoints = [data.departureAirport, ...transferAirports, data.arrivalAirport];
  return (
    <div className={styles.card}>
      <div className={styles.leftBlock}>
        <div className={styles.header}>
          <div className={styles.airline}>
            <div className={styles.logo} />
            <span>{data.airline}</span>
          </div>
          <button className={styles.moreInfo} onClick={onToggle}>
            {data.transferAirports?.length
              ? `${data.transferAirports.length} пересадка`
              : 'Прямой рейс'}{' '}
            <DownOutlined />
          </button>
        </div>

        <div className={styles.routeGrid}>
          <div className={styles.timeLeft}>{segments[0].departureTime}</div>
          <div className={styles.routeLine}>
            <div className={styles.dotted} />
            {routePoints.map((code, idx) => (
              <span key={idx} className={styles.airport}>
                {code}
              </span>
            ))}
          </div>
          <div className={styles.timeRight}>{segments[segments.length - 1]?.arrivalTime}</div>
          <div className={styles.dateLeft}>{segments[0].departureDate}</div>
          <div className={styles.duration}>В пути {data.duration}</div>
          <div className={styles.dateRight}>{segments[segments.length - 1]?.arrivalDate}</div>
        </div>
      </div>
      <div className={styles.fares}>
        {data.fares.map((fare, idx) => (
          <div key={idx} className={styles.fareCard}>
            <div className={styles.fareHeader}>
              <span className={styles.fareName}>{fare.type}</span>
              <div className={styles.featureIcons}>
                {getIcon(!!fare.carryOn, FaSuitcaseRolling)}
                {getIcon(!!fare.baggage, FaSuitcase)}
                {getIcon(fare.exchangePolicy?.includes('без'), FaExchangeAlt)}
                {getIcon(!fare.refundPolicy?.includes('недоступен'), FaChair)}
              </div>
            </div>
            <div className={styles.price}>{fare.price.toLocaleString()} ₽</div>
            {fare.remainingSeats && fare.remainingSeats > 0 && (
              <div className={styles.remainingSeats}>
                <ExclamationCircleOutlined /> Осталось {fare.remainingSeats}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
