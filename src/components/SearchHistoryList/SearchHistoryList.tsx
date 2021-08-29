import React from 'react';

import { ISearchHistoryList } from './types';

import styles from './SearchHistoryList.module.css';

const SearchHistoryList: React.FC<ISearchHistoryList> = ({ searchList }) => {
  // eslint-disable-next-line no-console
  console.log(searchList);
  return (
    <div className={styles.shl_wrapper}>
      <h3>Search history list</h3>
    </div>
  );
};

export default SearchHistoryList;
