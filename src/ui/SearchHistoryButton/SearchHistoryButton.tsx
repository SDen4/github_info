import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions/actions';
import { favoriteListFlagSelect } from '../../store/FavoriteReduser/selectors';
import { searchHistoryListFlag } from '../../store/SearchReducer/actions/actions';
import {
  historyLengthSelect,
  searchHistoryListFlagSelect,
} from '../../store/SearchReducer/selectors';

import styles from './styles.module.css';

export const SearchHistoryButton: React.FC = memo(() => {
  const dispatch = useDispatch();

  const historyLength = useSelector(historyLengthSelect);
  const searchHistoryListStatus = useSelector(searchHistoryListFlagSelect);
  const flFlag = useSelector(favoriteListFlagSelect);

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
});
