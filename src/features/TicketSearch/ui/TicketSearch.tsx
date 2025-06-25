import { setSearchCriteria, searchTickets } from '../model/searchSlice';
import type { RootState } from '../model/store';
import styles from './TicketSearch.module.scss';
import { Input, Button, Checkbox, DatePicker, Radio, Space, Select } from 'antd';
import type { RadioChangeEvent } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const { Group } = Radio;
const { RangePicker } = DatePicker;

const TicketSearch: React.FC = () => {
  // const dispatch = useDispatch();
  // const searchCriteria = useSelector((state: RootState) => state.search.searchCriteria);

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   field: keyof typeof searchCriteria,
  // ) => {
  //   dispatch(
  //     setSearchCriteria({
  //       ...searchCriteria,
  //       [field]: e.target.value,
  //     }),
  //   );
  // };

  // const handleDateChange = (
  //   dates: [Dayjs | null, Dayjs | null] | null,
  //   dateStrings: [string, string],
  // ) => {
  //   if (dates) {
  //     dispatch(
  //       setSearchCriteria({
  //         ...searchCriteria,
  //         date: dateStrings,
  //       }),
  //     );
  //   }
  // };

  // const handleTripTypeChange = (e: RadioChangeEvent) => {
  //   dispatch(
  //     setSearchCriteria({
  //       ...searchCriteria,
  //       tripType: e.target.value,
  //     }),
  //   );
  // };

  // const handleCheckboxChange = () => {
  //   dispatch(
  //     setSearchCriteria({
  //       ...searchCriteria,
  //       noTransfer: !searchCriteria.noTransfer,
  //     }),
  //   );
  // };

  // const handleSeatTypeChange = (value: string) => {
  //   dispatch(
  //     setSearchCriteria({
  //       ...searchCriteria,
  //       seatType: value,
  //     }),
  //   );
  // };

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   dispatch(searchTickets(searchCriteria));
  // };

  return (
    <div className={styles.searchTicketsBlock}>
      <h2 className={styles.header}>Найти билеты</h2>
      <form className={styles.searchForm} /* onSubmit={handleSearch}*/>
        <Space
          className={styles.row}
          styles={{
            item: {
              flex: 1,
            },
          }}
        >
          <Space className={styles.column} direction="vertical">
            <div className={styles.formGroup}>
              <label>Откуда</label>
              <Input
                // value={searchCriteria.currentLocation}
                // onChange={(e) => handleInputChange(e, 'currentLocation')}
                placeholder="Город откуда"
                className={styles.input}
                autoFocus
              />
            </div>
            <div className={styles.formGroup}>
              <label>Куда</label>
              <Input
                // value={searchCriteria.destination}
                // onChange={(e) => handleInputChange(e, 'destination')}
                placeholder="Город куда"
                className={styles.input}
              />
            </div>
          </Space>

          <Space className={styles.column} direction="vertical">
            <div className={styles.formGroup}>
              <label>Количество пассажиров</label>
              <Input
                type="number"
                // value={searchCriteria.passengers}
                // onChange={(e) => handleInputChange(e, 'passengers')}
                placeholder="Количество пассажиров"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <Checkbox
                className={styles.transferCheckbox}
                // checked={searchCriteria.noTransfer}
                // onChange={handleCheckboxChange}
              >
                Искать билеты без пересадок
              </Checkbox>
            </div>
          </Space>

          <Space className={styles.column} direction="vertical" align={'center'}>
            <div className={styles.formGroup}>
              <label>Дата</label>
              <RangePicker
                // value={[
                //   searchCriteria.date[0] ? dayjs(searchCriteria.date[0]) : null,
                //   searchCriteria.date[1] ? dayjs(searchCriteria.date[1]) : null,
                // ]}
                // onChange={handleDateChange}
                placeholder={['Туда', 'Обратно']}
                className={styles.datePicker}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Категория сиденья</label>
              <Select
                defaultValue="business"
                style={{ display: 'block' }}
                // onChange={handleSeatTypeChange}
                options={[
                  { value: 'business', label: 'Бизнес' },
                  { value: 'economy', label: 'Эконом' },
                  { value: 'first', label: 'Первый' },
                  { value: 'premium', label: 'Премиум' },
                ]}
                className={styles.seatCategory}
              />
            </div>
          </Space>

          <Space className={styles.column} direction="vertical" align={'center'}>
            <div className={styles.formGroup}>
              <Group
                className={styles.radio}
                // onChange={handleTripTypeChange}
                // value={searchCriteria.tripType}
                style={{ display: 'Flex', flexDirection: 'column', gap: 8 }}
              >
                <Radio value="roundTrip">
                  <span>
                    <span>Туда и обратно</span>
                  </span>
                </Radio>
                <Radio value="oneWay">
                  <span>
                    <span style={{ marginRight: '8px' }}>В одну сторону</span>
                  </span>
                </Radio>
              </Group>
            </div>
            <div className={styles.formGroup}>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Найти
              </Button>
            </div>
          </Space>
        </Space>
      </form>
    </div>
  );
};

export default TicketSearch;
