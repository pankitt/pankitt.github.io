import React, { FC } from 'react';
import { IListCountries } from 'types';
import { geoSearchParams } from 'common/utils';
import { Button } from 'common';
import styles from './index.module.css';

interface Props {
  countries: IListCountries;
  loadMore: (offsetCurrent: number) => void;
}

const Country: FC<Props> = ({ countries = {}, loadMore }) => {
  const { data = [], links = [], metadata } = countries;
  const { offsetCurrent, offsetLast } = geoSearchParams(links);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Countries List</h3>
      <div className={styles.itemsList}>
        {data.map(({ code, name }) => (
          <div key={code} className={styles.item}>
            {name}
          </div>
        ))}
      </div>
      <div className={styles.listInfo}>
        {offsetLast > 0 && (
          <span className={styles.total}>
            Quantity: <b>{offsetCurrent}</b>/{metadata?.totalCount}
          </span>
        )}
        <div>
          <Button onClick={() => loadMore(offsetCurrent)}>{'Load more'}</Button>
        </div>
      </div>
    </div>
  );
};

export default Country;
