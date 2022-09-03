import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { setFavoriteList } from 'store/FavoriteReduser/actions/actions';
import { isFavoriteListSelect } from 'store/FavoriteReduser/selectors';
import { setSearchList } from 'store/SearchReducer/actions/actions';
import {
  isSearchListSelect,
  searchListSelect,
} from 'store/SearchReducer/selectors';

import styles from './styles.module.css';

export const SearchHistoryButton: React.FC = memo(() => {
  const dispatch = useDispatch();

  const history = useSelector(searchListSelect);
  const searchHistoryListStatus = useSelector(isSearchListSelect);
  const isFavoriteList = useSelector(isFavoriteListSelect);

  const onSearchHistoryBtnHandler = () => {
    if (searchHistoryListStatus) {
      dispatch(setSearchList(false));
    } else {
      dispatch(setSearchList(true));
      if (isFavoriteList) {
        dispatch(setFavoriteList(false));
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
      Search history <span>({history.length})</span>
    </button>
  );
});
