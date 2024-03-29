import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { isFavoriteListSelect } from 'selectors/favorite';
import {
  isMobileSelect,
  isReposListSelect,
  isSearchListSelect,
  isUsersListSelect,
  searchListSelect,
} from 'selectors/search';

import { setFavoriteList } from 'store/FavoriteReduser/favoriteReducer';
import {
  getSearchedUsersList,
  setReposList,
  setSearchList,
  setUsersList,
} from 'store/SearchReducer/searchReducer';

import { defaultSearchUsersList } from 'constants/searchConstants';

import styles from './styles.module.css';

export const SearchHistoryButton = () => {
  const dispatch = useDispatch();

  const searchList = useSelector(searchListSelect);
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

  if (!searchList.length) return null;

  return (
    <button
      type="button"
      className={clsx(
        searchHistoryListStatus && styles.shhWrapperActive,
        styles.shhWrapper,
      )}
      onClick={onSearchHistoryBtnHandler}
    >
      Search searchList <span>({searchList.length})</span>
    </button>
  );
};
