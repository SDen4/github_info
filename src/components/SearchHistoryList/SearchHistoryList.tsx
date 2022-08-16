import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { CloseButton } from '../../ui/CloseButton';
import { Flex } from '../../ui/Flex';

import { dateFormatter } from '../../utils/dateFormatter';
import { timeFormatter } from '../../utils/timeFormatter';

import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { AppStateType } from '../../store/RootReducer';
import {
  modalFlag,
  reposOpenedListFlag,
  searchHistoryListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { searchSaga } from '../../store/SearchReducer/actionsSagas';
import { ISearhHistoryItem } from '../../store/SearchReducer/types';

import styles from './styles.module.css';

const SearchHistoryList: React.FC = () => {
  const dispatch = useDispatch();

  const searchList = useSelector<AppStateType, ISearhHistoryItem[]>(
    (store) => store.search.searchHistory,
  );
  const favoritesList = useSelector<AppStateType, FavoriteUser[]>(
    (store) => store.favorite.favoriteList,
  );
  const currentUserLogin = useSelector<AppStateType, string>(
    (store) => store.search.user.login,
  );
  const userListOpened = useSelector<AppStateType, boolean>(
    (store) => store.search.usersListOpened,
  );
  const reposListOpened = useSelector<AppStateType, boolean>(
    (store) => store.search.reposListOpened,
  );
  const isMobile = useSelector<AppStateType, boolean>(
    (store) => store.search.isMobile,
  );
  const loading = useSelector<AppStateType, boolean>(
    (store) => store.search.loading,
  );

  const searchHistoriListBtnHandler = (login: string) => {
    if (login === currentUserLogin) {
      if (userListOpened) {
        dispatch(userListOpenedFlag(false));
      }
      if (reposListOpened) {
        dispatch(reposOpenedListFlag(false));
      }
      return;
    }
    dispatch(searchSaga(login, searchList, isMobile, favoritesList));
  };

  const closeBtnHandler = () => {
    dispatch(searchHistoryListFlag(false));
  };

  const clearBtnHandler = () => {
    dispatch(
      modalFlag(
        true,
        `Are you sure to delete ${searchList.length > 1 ? 'all' : ''} ${
          searchList.length > 1 ? `(${searchList.length})` : ''
        } ${searchList.length > 1 ? 'items' : 'the item'} of search history?`,
        'search',
      ),
    );
  };

  return (
    <Flex
      className={clsx(styles.shlWrapper, isMobile && loading && styles.hide)}
    >
      <header className={styles.listHeader}>
        <h3>Search list</h3>
        <CloseButton onClick={closeBtnHandler} />
      </header>

      <ol>
        {searchList.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${el.login} + ${i}`}>
            <button
              className={styles.shlButton}
              type="button"
              onClick={() => searchHistoriListBtnHandler(el.login)}
            >
              {el.login}
            </button>
            <span>{` (${dateFormatter(
              new Date(el.dateOfSearch),
            )}, ${timeFormatter(new Date(el.dateOfSearch))})`}</span>
          </li>
        ))}
      </ol>

      <button
        className={styles.clearButton}
        type="button"
        onClick={clearBtnHandler}
      >
        Delete history
      </button>
    </Flex>
  );
};

export default memo(SearchHistoryList);
