import React from 'react';

import { ISearchHistoryHeader } from './types';

import styles from './SearchHistoryHeader.module.css';

const SearchHistoryHeader: React.FC<ISearchHistoryHeader> = ({
  historyLength,
}) => {
  return (
    <button type="button" className={styles.shh_wrapper}>
      Search history <span>({historyLength})</span>
    </button>
  );
};

export default SearchHistoryHeader;
