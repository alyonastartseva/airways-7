// import type { Flight } from '../types/types';
// import styles from './ThereFlight.module.scss';
// import cn from 'classnames';
// import { useState, useEffect } from 'react';

// type Props = {
//   flights: Flight[];
//   onSelect?: (flight: Flight) => void;
// };

// export const ThereFlight: React.FC<Props> = ({ flights, onSelect }) => {
//   const [selectedId, setSelectedId] = useState<string | null>(null);

//   useEffect(() => {
//     if (flights.length && setSelectedId === null) setSelectedId(flights[0].id);
//   }, [flights, setSelectedId]);

//   const handleClick = (fly: Flight) => {
//     setSelectedId(fly.id);
//     onSelect?.(fly);
//   };

//   return (
//     <div className={styles.list}>
//       {flights.map((fly) => (
//         <div
//           key={fly.id}
//           className={cn(styles.card, { [styles.selected]: fly.id === selectedId })}
//           onClick={() => handleClick(fly)}
//         >
//           <div className={styles.left}>
//             <div className={styles.date}>{fly.date}</div>
//             <img src={fly.logoUrl} alt={fly.airName} className={styles.logo} />
//             <div className={styles.times}>
//               <span>{fly.departTime}</span>
//               <span className={styles.route}>{fly.arriceCode}</span>
//             </div>
//             <div className={styles.duration}>{fly.duration}</div>
//             <div className={styles.times}>
//               <span>{fly.arriceTime}</span>
//               <span className={styles.route}>{fly.arriceCode}</span>
//             </div>
//           </div>
//           <div className={styles.price}>{fly.price.toLocaleString()} ₽</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ThereFlight;
