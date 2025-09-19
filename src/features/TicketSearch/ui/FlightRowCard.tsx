import styles from './FlightRowCard.module.scss';
import React from 'react';

export type Fare = { name: string; price: number; note?: string };

type Props = {
  airlineName: string;

  fromCity: string;
  fromCode: string;
  depTime: string;
  depDate: string;
  toCity: string;
  toCode: string;
  arrTime: string;
  arrDate: string;
  durationText: string;
  rightLabel?: string;
  fares: [Fare, Fare, Fare];
  airlineLogoSrc: string;
  planeIconSrc?: string;
  fareIconSrcs: [string, string, string];
  warnIconSrc?: string;
  durationLeftIconSrc?: string;
  durationRightIconSrc?: string;
};

const FlightRowCard: React.FC<Props> = ({
  airlineName,

  fromCity,
  fromCode,
  depTime,
  depDate,

  toCity,
  toCode,
  arrTime,
  arrDate,

  durationText,
  rightLabel,

  fares,

  airlineLogoSrc,
  planeIconSrc,
  fareIconSrcs,
  warnIconSrc,

  durationLeftIconSrc,
  durationRightIconSrc,
}) => {
  return (
    <div className={styles.row}>
      <div className={`${styles.card} ${styles.leftCard}`}>
        <div className={styles.topBar}>
          <div className={styles.airline}>
            <img src={airlineLogoSrc} alt="" width={28} height={28} />
            <div className={styles.airlineText}>
              <div className={styles.airlineName}>{airlineName}</div>
            </div>
          </div>

          {rightLabel && <span className={styles.badgeRight}>{rightLabel}</span>}
        </div>

        <div className={styles.timesWrap}>
          <div className={styles.timeCol}>
            <div className={styles.time}>
              {depTime} <span className={styles.code}>{fromCode}</span>
            </div>
            <div className={styles.city}>{fromCity}</div>
            <div className={styles.date}>{depDate}</div>
          </div>

          <div className={styles.duration}>
            {durationLeftIconSrc && (
              <img className={styles.durIcon} src={durationLeftIconSrc} alt="" />
            )}
            <span className={styles.durationText}>{durationText}</span>
            <span className={styles.dash} />
            {planeIconSrc && (
              <img className={styles.plane} src={planeIconSrc} alt="" width={18} height={18} />
            )}
            {durationRightIconSrc && (
              <img className={styles.durIcon} src={durationRightIconSrc} alt="" />
            )}
          </div>

          <div className={`${styles.timeCol} ${styles.toCol}`}>
            <div className={styles.time}>
              <span className={styles.code}>{toCode}</span> {arrTime}
            </div>
            <div className={styles.city}>{toCity}</div>
            <div className={styles.date}>{arrDate}</div>
          </div>
        </div>
      </div>

      {fares.map((f, idx) => (
        <div
          key={idx}
          className={`${styles.card} ${idx === 2 ? styles.fareAccent : styles.fareCard}`}
        >
          <div className={styles.fareTitle}>
            <span className={styles.fareName}>{f.name}</span>
            <img className={styles.fareIcon} src={fareIconSrcs[idx]} alt="" />
          </div>

          <div className={styles.price}>{f.price.toLocaleString('ru-RU')} ₽</div>

          {f.note && warnIconSrc && (
            <div className={styles.leftNote}>
              <img src={warnIconSrc} alt="" width={14} height={14} />
              {f.note}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightRowCard;
