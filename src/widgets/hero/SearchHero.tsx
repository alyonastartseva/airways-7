import styles from './SearchHero.module.scss';
import heroUrl from '@/assets/icons/hero-search.svg';

export default function SearchHero() {
  return (
    <div className={styles.hero} aria-hidden="true">
      <img src={heroUrl} alt="" loading="lazy" width={726} height={516} className={styles.img} />
    </div>
  );
}
