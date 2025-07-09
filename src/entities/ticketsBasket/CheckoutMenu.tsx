import styles from './CheckoutMenu.module.scss';
import type { CheckoutMenuProps } from './CheckoutMenuTypes';
import { Select, Input } from 'antd';
import React, { useState } from 'react';
import { FaChevronCircleDown, FaChevronDown, FaTimes, FaArrowRight } from 'react-icons/fa';

interface Props {
  data: CheckoutMenuProps;
}

const CheckoutMenu: React.FC<Props> = ({ data }) => {
  const [isFlightDetailsOpen, setIsFlightDetailsOpen] = useState(false);
  const [isCertificateFormOpen, setIsCertificateFormOpen] = useState(false);
  const [isPromoCodeFormOpen, setIsPromoCodeFormOpen] = useState(false);

  const toggleFlightDetails = () => {
    setIsFlightDetailsOpen(!isFlightDetailsOpen);
  };

  const toggleCertificateForm = () => {
    setIsCertificateFormOpen(!isCertificateFormOpen);
  };

  const togglePromoCodeForm = () => {
    setIsPromoCodeFormOpen(!isPromoCodeFormOpen);
  };
  return (
    <div className={styles.checkoutMenuContainer}>
      <div className={styles.priceEvaluation}>
        <div className={styles.priceEvaluation__header}>
          <div className={styles.title} onClick={toggleFlightDetails}>
            <FaChevronDown style={{ paddingRight: 6, marginLeft: -6 }} />
            Авиа
          </div>
          <div className={styles.price}>{data.priceTotal}</div>
        </div>
        {isFlightDetailsOpen && (
          <div className={styles.priceEvaluation__content}>
            <div className={styles.content__container}>
              <div className={styles.content__title}>
                <div className={styles.title__route}>
                  <span>{data.departureInfo}</span>
                  <FaArrowRight style={{ color: 'grey' }} />
                  <span>{data.arrivalInfo}</span>
                </div>
              </div>
              <div className={styles.content__routeDescription}>
                {data.destinationDirection} · {data.date}
              </div>
            </div>
            <div className={styles.content__container}>
              <div className={styles.content__title}>{data.tickets}</div>
              <div className={styles.content__price}>{data.ticketPrice}</div>
            </div>
            <div className={styles.content__container}>
              <div className={styles.content__title}>
                <FaChevronDown style={{ paddingRight: 6, marginLeft: -20 }} />
                Таксы и сборы
              </div>
              <div className={styles.content__price}>{data.taxes}</div>
            </div>
            <div className={styles.content__container}>
              <div className={styles.content__title}>Таксы</div>
              <div className={styles.content__price}>{data.taxes}</div>
            </div>
            <a className={styles.termsLink} href="#">
              Правила применения тарифа
            </a>
          </div>
        )}
      </div>
      <div className={styles.certificate}>
        {isCertificateFormOpen ? (
          <div className={styles.toggleForm__open}>
            <div className={styles.toggleForm__title}>
              Сертификат
              <FaTimes className={styles.closeBtn} onClick={toggleCertificateForm} />
            </div>
            <form autoComplete="off">
              <Input placeholder="Номер сертификата" />
              <Input placeholder="Введите пин" style={{ marginTop: 16 }} />
            </form>
            <div className={styles.help}>Где найти ПИН?</div>
            <button type="button" className={styles.submit}>
              Применить
            </button>
          </div>
        ) : (
          <div className={styles.toggleForm__closed} onClick={toggleCertificateForm}>
            <div>Добавить сертификат</div>
            <div>
              <FaChevronCircleDown style={{ color: 'rgb(190, 230, 255)', width: 25, height: 25 }} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.promocode}>
        {isPromoCodeFormOpen ? (
          <div className={styles.toggleForm__open}>
            <div className={styles.toggleForm__title}>
              Промокод
              <FaTimes className={styles.closeBtn} onClick={togglePromoCodeForm} />
            </div>
            <form autoComplete="off">
              <Input type="input" placeholder="Добавьте промокод"></Input>
            </form>
            <div className={styles.help}>Правила применения</div>
            <button type="button" className={styles.submit}>
              Применить
            </button>
          </div>
        ) : (
          <div className={styles.toggleForm__closed} onClick={togglePromoCodeForm}>
            <div>Добавить промокод</div>
            <div>
              <FaChevronCircleDown style={{ color: 'rgb(190, 230, 255)', width: 25, height: 25 }} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.total}>
        <div className={styles.title}>Итого:</div>
        <div className={styles.price}>{data.priceTotal}</div>
        <Select
          defaultValue="₽"
          style={{ width: 58, marginLeft: 10 }}
          options={[
            { value: 'RUB', label: '₽' },
            { value: 'USD', label: '$' },
            { value: 'EUR', label: '€' },
            { value: 'KRW', label: '₩' },
          ]}
        />
      </div>
      <button className={styles.submit}>Продолжить</button>
    </div>
  );
};

export default CheckoutMenu;
