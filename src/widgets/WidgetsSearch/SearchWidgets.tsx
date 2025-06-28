import styles from './SearchWidgets.module.scss';
import { useCategories } from './hooks/useCategories';
import { useDestinations } from './hooks/useDestinations';
import { useSearchTickets } from './hooks/useSearchTickets';
import React, { useRef } from 'react';

export const SearchWidgets: React.FC = () => {
  const { categories, loading: catLoading } = useCategories();
  const { list: dests, loadNext, hasMore } = useDestinations();
  const { results, loading: searchLoading, search } = useSearchTickets();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fm = new FormData(formRef.current!);
    search({
      categoryId: Number(fm.get('category')),
      fromId: Number(fm.get('from')),
      toId: Number(fm.get('to')),
    });
  };

  const onScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const ul = e.currentTarget;
    if (hasMore && ul.scrollTop + ul.clientHeight >= ul.scrollHeight - 20) {
      loadNext();
    }
  };

  return (
    <div className={styles.searchWidgets}>
      <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
        <div className={styles.fieldGroup}>
          <label>Класс</label>
          <select name="category" disabled={catLoading} required>
            <option value="">Загрузка…</option>
            {!catLoading &&
              categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label>Откуда</label>
          <ul className={styles.list} onScroll={onScroll}>
            {dests.map((d) => (
              <li key={d.id}>
                <label>
                  <input type="radio" name="from" value={d.id} required />
                  {d.city}
                </label>
              </li>
            ))}
            {hasMore && <li className={styles.loadingItem}>Загрузка…</li>}
          </ul>
        </div>

        <div className={styles.fieldGroup}>
          <label>Куда</label>
          <ul className={styles.list} onScroll={onScroll}>
            {dests.map((d) => (
              <li key={d.id}>
                <label>
                  <input type="radio" name="to" value={d.id} required />
                  {d.city}
                </label>
              </li>
            ))}
            {hasMore && <li className={styles.loadingItem}>Загрузка…</li>}
          </ul>
        </div>

        <button type="submit" className={styles.btnFind} disabled={searchLoading}>
          {searchLoading ? 'Ищем…' : 'Найти'}
        </button>
      </form>

      <div className={styles.results}>
        {results.map((response) => (
          <div key={response.id} className={styles.resultItem}>
            {response.from} → {response.to}: {response.price} ₽
          </div>
        ))}
        {results.length === 0 && !searchLoading && (
          <div className={styles.noResults}>Ничего не найдено</div>
        )}
      </div>
    </div>
  );
};
