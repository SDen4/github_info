import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchHistoryListFlag } from '../../store/SearchReducer/actions';

import { AppStateType } from '../../store/RootReducer';

import styles from './SearchHistoryHeader.module.css';

const SearchHistoryHeader: React.FC = () => {
  const dispatch = useDispatch();

  const historyLength = useSelector<AppStateType, number>(
    (store) => store.search.searchHistory.length,
  );
  const searchHistoryListStatus = useSelector<AppStateType, boolean>(
    (store) => store.search.searchHistoryListFlag,
  );
  const flFlag = useSelector<AppStateType, boolean>(
    (store) => store.favorite.favoriteListFlag,
  );

  const onSearchHistoryBtnHandler = () => {
    if (searchHistoryListStatus) {
      dispatch(searchHistoryListFlag(false));
    } else {
      dispatch(searchHistoryListFlag(true));
      if (flFlag) {
        dispatch(favoriteListFlag(false));
      }
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
