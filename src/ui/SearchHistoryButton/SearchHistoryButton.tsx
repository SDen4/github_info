import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { setFavoriteList } from 'store/FavoriteReduser/favoriteReducer';
import { isFavoriteListSelect } from 'store/FavoriteReduser/selectors';
import {
  getSearchedUsersList,
  setReposList,
  setSearchList,
  setUsersList,
} from 'store/SearchReducer/actions/actions';
import {
  isMobileSelect,
  isReposListSelect,
  isSearchListSelect,
  isUsersListSelect,
  searchListSelect,
} from 'store/SearchReducer/selectors';

import { defaultSearchUsersList } from 'constants/searchConstants';

import styles from './styles.module.css';

export const SearchHistoryButton: React.FC = memo(() => {
  const dispatch = useDispatch();

  const history = useSelector(searchListSelect);
  const searchHistoryListStatus = useSelector(isSearchListSelect);
  const isFavoriteList = useSelector(isFavoriteListSelect);
  const isMobile = useSelector(isMobileSelect);
  const isUsersList = useSelector(isUsersListSelect);
  const isReposList = useSelector(isReposListSelect);

  const onSearchHistoryBtnHandler = () => {
    if (searchHistoryListStatus) {
      dispatch(setSearchList(false));
    } else {
      dispatch(setSearchList(true));
      if (isFavoriteList) {
        dispatch(setFavoriteList(false));
      }

      if (isMobile && (isUsersList || isReposList)) {
        dispatch(setUsersList(false));
        dispatch(setReposList(false));
      }
    }

    if (isMobile) {
      dispatch(getSearchedUsersList(defaultSearchUsersList));
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
