import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchHistoryListFlag } from '../../store/SearchReducer/actions';

import { ISearchHistoryHeader } from './types';

import styles from './SearchHistoryHeader.module.css';

const SearchHistoryHeader: React.FC<ISearchHistoryHeader> = ({
  historyLength,
  searchHistoryListStatus,
}) => {
  const dispatch = useDispatch();

  const onSearchHistoryBtnHandler = () => {
    if (searchHistoryListStatus) {
      dispatch(searchHistoryListFlag(false));
    } else {
      dispatch(searchHistoryListFlag(true));
      dispatch(favoriteListFlag(false));
    }
  };

  return (
    <button
      type="button"
      className={clsx(
        searchHistoryListStatus && styles.shhWrapperActive,
        styles.shhWrapper,
      )}
      onClick={onSearchHistoryBtnHandler}
    >
      Search history <span>({historyLength})</span>
    </button>
  );
};

export default memo(SearchHistoryHeader);
