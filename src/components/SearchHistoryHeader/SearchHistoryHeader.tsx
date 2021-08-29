import React from 'react';
import { useDispatch } from 'react-redux';

import { searchHistoryLIstFlag } from '../../store/SearchReducer/actions';

import { ISearchHistoryHeader } from './types';

import styles from './SearchHistoryHeader.module.css';

const SearchHistoryHeader: React.FC<ISearchHistoryHeader> = ({
  historyLength,
}) => {
  const dispatch = useDispatch();

  const onSearchHistoryBtnHandler = () => {
    dispatch(searchHistoryLIstFlag());
  };

  return (
    <button
      type="button"
      className={styles.shh_wrapper}
      onClick={onSearchHistoryBtnHandler}
    >
      Search history <span>({historyLength})</span>
    </button>
  );
};

export default SearchHistoryHeader;
