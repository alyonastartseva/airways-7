import styles from './TicketCard.module.scss';
import type { ExtendedTicketData } from './TicketCardType';
import { DownOutlined, UpOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaSyncAlt,
  FaUtensils,
  FaPaw,
  FaCircle,
  FaSuitcaseRolling,
  FaSuitcase,
  FaChair,
  FaExchangeAlt,
  FaCheckCircle,
  FaRubleSign,
  FaInfoCircle,
} from 'react-icons/fa';

const getIcon = (value: boolean, Icon: React.ElementType) => (
  <Icon className={value ? styles.iconActive : styles.iconInactive} />
);

const withStatusIcon = (enabled: boolean, label: React.ReactNode) => (
  <div className={styles.optionLine}>
    {enabled ? (
      <FaCheckCircle className={styles.checkIcon} />
    ) : (
      <FaRubleSign className={styles.rubleIcon} />
    )}
    {label}
  </div>
);

const TicketCard: React.FC<{ data: ExtendedTicketData; onToggle: () => void }> = ({
  data,
  onToggle,
}) => {
  const [isSegmentExpanded, setIsSegmentExpanded] = useState(false);
  const { segments, layoverTimes = [], transferAirports = [], fares } = data;
  const routePoints = [data.departureAirport, ...transferAirports, data.arrivalAirport];

  return (
    <div className={styles.ticket}>
      <section className={styles.left}>
        <div className={styles.airlineInfo}>
          <h2>{data.airline}</h2>
          <button className={styles.toggleBtn} onClick={onToggle}>
            {transferAirports.length ? `${transferAirports.length} пересадка` : 'Прямой рейс'}{' '}
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

        <div className={styles.segmentList}>
          {segments.map((seg, idx) => {
            if (!isSegmentExpanded && idx > 0) return null;

            return (
              <React.Fragment key={idx}>
                <div className={styles.flightHeader}>
                  <div className={styles.flight}>{seg.flightNumber}</div>
                  <div className={styles.plane}>
                    {seg.aircraft} <FaInfoCircle />
                  </div>
                </div>

                <div className={styles.segmentBox}>
                  <div className={styles.segmentIcon}>
                    {idx === 0 ? (
                      <FaPlaneDeparture />
                    ) : idx === segments.length - 1 ? (
                      <FaPlaneArrival />
                    ) : (
                      <FaCircle />
                    )}
                  </div>
                  <div className={styles.segmentContent}>
                    <div className={styles.segmentRow}>
                      <span className={styles.timeBig}>{seg.departureTime}</span>
                      <span className={styles.dateSmall}>{seg.departureDate}</span>
                    </div>
                    <div className={styles.cityCountry}>
                      {seg.departureCity}, {seg.departureCountry}
                    </div>
                    <div className={styles.airportFull}>
                      {seg.departureAirportName} ({seg.departureAirportCode})
                    </div>

                    <div className={styles.metaRow}>
                      <span>Расстояние: {seg.distance}</span>
                      <span>В пути: {seg.duration}</span>
                    </div>
                    <div className={styles.metaRow}>
                      <span className={styles.meal}>
                        {getIcon(!!seg.meal, FaUtensils)} {seg.meal || '—'}
                      </span>
                      <span className={styles.petsAllowed}>
                        {getIcon(seg.petsAllowed, FaPaw)} Питомцы: {seg.petsAllowed ? 'да' : 'нет'}
                      </span>
                    </div>

                    <div className={styles.segmentRow}>
                      <span className={styles.timeBig}>{seg.arrivalTime}</span>
                      <span className={styles.dateSmall}>{seg.arrivalDate}</span>
                    </div>
                    <div className={styles.cityCountry}>
                      {seg.arrivalCity}, {seg.arrivalCountry}
                    </div>
                    <div className={styles.airportFull}>
                      {seg.arrivalAirportName} {seg.arrivalAirportCode}
                    </div>
                  </div>
                </div>

                {idx < layoverTimes.length && (
                  <div className={`${styles.segmentBox} ${styles.layoverBox}`}>
                    <div className={styles.segmentIcon}>
                      <FaCircle />
                    </div>
                    <FaSyncAlt className={styles.metaIcon} />
                    Пересадка: {layoverTimes[idx]}
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {segments.length > 1 && (
            <button
              className={styles.expandBtn}
              onClick={() => setIsSegmentExpanded((prev) => !prev)}
            >
              {isSegmentExpanded ? <UpOutlined /> : <DownOutlined />}
            </button>
          )}
        </div>
      </section>

      <section className={styles.right}>
        {fares.map((fare, i) => (
          <article key={fare.type + i} className={styles.fareCard}>
            <header className={styles.fareHeader}>
              <div className={styles.fareTitleBlock}>
                <span className={styles.fareTitle}>{fare.type}</span>
                <div className={styles.iconGroup}>
                  {getIcon(!!fare.carryOn, FaSuitcaseRolling)}
                  {getIcon(!!fare.baggage, FaSuitcase)}
                  {getIcon(fare.exchangePolicy?.includes('без'), FaExchangeAlt)}
                  {getIcon(!fare.refundPolicy.includes('недоступен'), FaChair)}
                </div>
              </div>
              <span className={styles.farePrice}>{fare.price.toLocaleString()} ₽</span>
              <button className={styles.selectBtn}>Выбрать</button>
            </header>

            <div className={styles.section}>
              <div className={styles.sectionTitle}>Багаж:</div>
              {withStatusIcon(!!fare.baggage, <>Багаж: {fare.baggage ?? 'платно'}</>)}
              {withStatusIcon(!!fare.carryOn, <>Ручная кладь: {fare.carryOn ?? 'платно'}</>)}
            </div>

            <div className={styles.section}>
              <div className={styles.sectionTitle}>Условия:</div>
              {withStatusIcon(true, <>Мили: {fare.bonusMiles}M</>)}
              {withStatusIcon(
                !fare.exchangePolicy?.toLowerCase().includes('нельзя'),
                <>Обмен: {fare.exchangePolicy}</>,
              )}
              {withStatusIcon(
                !fare.refundPolicy?.toLowerCase().includes('недоступен'),
                <>Возврат: {fare.refundPolicy}</>,
              )}
              {withStatusIcon(fare.sportsEquipment, 'Спортинвентарь')}
            </div>

            {fare.services.length > 0 && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Услуги:</div>
                {fare.services.map((s, i) => (
                  <React.Fragment key={s + i}>{withStatusIcon(true, s)}</React.Fragment>
                ))}
              </div>
            )}
            {fare.remainingSeats && fare.remainingSeats > 0 && (
              <div className={styles.remainingSeats}>
                <ExclamationCircleOutlined /> Осталось {fare.remainingSeats}
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
};

export default TicketCard;
