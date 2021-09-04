import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchHistoryLIstFlag } from '../../store/SearchReducer/actions';

import { ISearchHistoryHeader } from './types';

import styles from './SearchHistoryHeader.module.css';

const SearchHistoryHeader: React.FC<ISearchHistoryHeader> = ({
  historyLength,
  historyBtnStatus,
  searchHistoryListStatus,
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
      className={clsx(
        searchHistoryListStatus && styles.shh_wrapper_active,
        styles.shh_wrapper,
      )}
      onClick={onSearchHistoryBtnHandler}
    >
      Search history <span>({historyLength})</span>
    </button>
  );
};

export default SearchHistoryHeader;
