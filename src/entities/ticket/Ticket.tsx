import React from "react";
import styles from './Ticket.module.scss';
import type { TicketData } from "./TicketTypes";
import { Tag } from 'antd';
import { ExclamationCircleOutlined, DownOutlined } from '@ant-design/icons';
import { FaSuitcaseRolling, FaSuitcase, FaExchangeAlt, FaChair, FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

interface Props {
    data: TicketData;
}

const getIcon = (value: boolean, IconComponent: React.ElementType) => (
  <IconComponent className={`${styles.icon} ${value ? styles.active : ''}`} />
);

const Ticket: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftBlock}>
        <div className={styles.header}>
          <div className={styles.airline}>
            <div className={styles.logo} />
            <span>{data.airline}</span>
          </div>
          <button className={styles.moreInfo}>Прямой рейс <DownOutlined /></button>
        </div>
        <div className={styles.timeDuration}>
          <div className={styles.planeDeparture}><FaPlaneDeparture /></div>
          <div className={styles.durationText}>В пути: {data.duration}</div>
          <div className={styles.planeArrival}> <FaPlaneArrival /></div>
        </div>
            <div className={styles.duration}>
            <div className={styles.time}>{data.departureTime}</div>
           <div className={styles.departureReduction}>{data.departureReduction}</div>
            <div className={styles.dottedLine} />
            <div className={styles.arrivalReduction}>{data.arrivalReduction}</div>
            <div className={styles.time}>{data.arrivalTime}</div>
          </div>
        <div className={styles.flightInfo}>
          <div>
            <div className={styles.city}>{data.from}</div>
            <div className={styles.date}>{data.date}</div>
          </div>
          <div>
            <div className={styles.city}>{data.to}</div>
            <div className={styles.date}>{data.date}</div>
          </div>
        </div>
      </div>

      <div className={styles.fares}>
        {data.fares.map((fare, idx) => (
          <div
            key={idx}
            className={`${styles.fareCard} ${fare.selected ? styles.selected : ''}`}
          >
            <div className={styles.fareHeader}>
              <span className={styles.fareName}>{fare.name}</span>
              <div className={styles.featureIcons}>
                {getIcon(fare.features.handLuggage, FaSuitcaseRolling)}
                {getIcon(fare.features.luggage, FaSuitcase)}
                {getIcon(fare.features.exchange, FaExchangeAlt)}
                {getIcon(fare.features.refund ?? false, FaChair)}
              </div>
            </div>
            <div className={styles.price}>{fare.price.toLocaleString()} ₽</div>
            {fare.remainingSeats && (
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