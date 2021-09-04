import React from 'react';
import { useDispatch } from 'react-redux';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchHistoryLIstFlag } from '../../store/SearchReducer/actions';

import { ISearchHistoryHeader } from './types';

import styles from './SearchHistoryHeader.module.css';

const SearchHistoryHeader: React.FC<ISearchHistoryHeader> = ({
  historyLength,
  historyBtnStatus,
}) => {
  const dispatch = useDispatch();

  const onSearchHistoryBtnHandler = () => {
    if (historyBtnStatus) {
      dispatch(searchHistoryLIstFlag(false));
    } else {
      dispatch(favoriteListFlag(false));
      dispatch(searchHistoryLIstFlag(true));
    }
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
