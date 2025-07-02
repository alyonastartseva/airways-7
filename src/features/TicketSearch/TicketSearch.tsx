import styles from './TicketSearch.module.scss';
import {
  useGetCategoriesQuery,
  useLazyGetDestinationsQuery,
  useSearchTicketsMutation,
} from './model/ticketSearchApi';
import { Input, Select, DatePicker, Radio, Checkbox, Button, Space, Spin } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const { RangePicker } = DatePicker;
const { Group: RadioGroup } = Radio;

const TicketSearch: React.FC = () => {
  const { data: categories = [], isLoading: catLoading } = useGetCategoriesQuery();
  const [fetchDest, { isFetching: destLoading }] = useLazyGetDestinationsQuery();
  const [destList, setDestList] = useState<Destination[]>([]);
  const [destPage, setDestPage] = useState(1);
  const [destSearch, setDestSearch] = useState('');

  const loadDest = (search: string, page: number) => {
    fetchDest({ search, page })
      .unwrap()
      .then((newItems) => {
        setDestList(page === 1 ? newItems : [...destList, ...newItems]);
        setDestPage(page);
      });
  };

  useEffect(() => {
    loadDest('', 1);
  }, []);

  const onDestSearch = (value: string) => {
    setDestSearch(value);
    loadDest(value, 1);
  };

  const onDestScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollHeight - target.scrollTop === target.clientHeight && !destLoading) {
      loadDest(destSearch, destPage + 1);
    }
  };

  const [searchTickets, { isLoading: searching }] = useSearchTicketsMutation();
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [passengers, setPassengers] = useState(1);
  const [dates, setDates] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [noTransfer, setNoTransfer] = useState(false);
  const [seatType, setSeatType] = useState('business');
  const handleSubmit = () => {
    searchTickets({
      currentLocation,
      destination,
      passengers,
      dateFrom: dates?.[0].format('YYYY-MM-DD'),
      dateTo: dates?.[1].format('YYYY-MM-DD'),
      tripType,
      noTransfer,
      seatType,
    })
      .unwrap()
      .then((tickets) => {
        console.log('Получили билеты', tickets);
      });
  };

  return (
    <div className={styles.searchTicketsBlock}>
      <h2 className={styles.header}>Найти билеты</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className={styles.searchForm}
      >
        <Space className={styles.row} style={{ width: '100%' }}>
          <Space direction="vertical" className={styles.column}>
            <label>Откуда</label>
            <Select
              showSearch
              filterOption={false}
              placeholder="Город откуда"
              value={currentLocation || undefined}
              notFoundContent={destLoading ? <Spin size="small" /> : null}
              onSearch={onDestSearch}
              onPopupScroll={onDestScroll}
              onChange={(v) => setCurrentLocation(v)}
              options={destList.map((d) => ({ label: d.name, value: d.id }))}
              className={styles.input}
            />
          </Space>

          <Space direction="vertical" className={styles.column}>
            <label>Куда</label>
            <Select
              showSearch
              filterOption={false}
              placeholder="Город куда"
              value={destination || undefined}
              notFoundContent={destLoading ? <Spin size="small" /> : null}
              onSearch={onDestSearch}
              onPopupScroll={onDestScroll}
              onChange={(v) => setDestination(v)}
              options={destList.map((d) => ({ label: d.name, value: d.id }))}
              className={styles.input}
            />
          </Space>
          <Space direction="vertical" className={styles.column}>
            <label>Количество пассажиров</label>
            <Input
              type="number"
              min={1}
              value={passengers}
              onChange={(e) => setPassengers(+e.target.value)}
              placeholder="Количество пассажиров"
              className={styles.input}
            />
            <Checkbox
              checked={noTransfer}
              onChange={(e) => setNoTransfer(e.target.checked)}
              className={styles.transferCheckbox}
            >
              Искать без пересадок
            </Checkbox>
          </Space>

          <Space direction="vertical" className={styles.column}>
            <label>Дата</label>
            <RangePicker
              value={dates}
              onChange={(v) => setDates(v)}
              placeholder={['Туда', 'Обратно']}
              className={styles.datePicker}
            />
            <label style={{ marginTop: 16 }}>Категория сиденья</label>
            <Select
              placeholder="Категория"
              loading={catLoading}
              options={categories.map((c) => ({ label: c.name, value: c.id }))}
              value={seatType}
              onChange={(v) => setSeatType(v)}
              className={styles.seatCategory}
            />
          </Space>

          <Space direction="vertical" className={styles.column}>
            <RadioGroup
              onChange={(e) => setTripType(e.target.value)}
              value={tripType}
              className={styles.radio}
            >
              <Radio value="roundTrip">Туда и обратно</Radio>
              <Radio value="oneWay">В одну сторону</Radio>
            </RadioGroup>
            <Button type="primary" htmlType="submit" loading={searching} className={styles.button}>
              Найти
            </Button>
          </Space>
        </Space>
      </form>
    </div>
  );
};

export default TicketSearch;
