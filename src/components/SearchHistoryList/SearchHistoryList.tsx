import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { CloseButton } from '../../ui/CloseButton';
import { Flex } from '../../ui/Flex';

import { dateFormatter } from '../../utils/dateFormatter';
import { timeFormatter } from '../../utils/timeFormatter';

import { favoriteListSelect } from '../../store/FavoriteReduser/selectors';
import {
  modalFlag,
  reposOpenedListFlag,
  searchHistoryListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions/actions';
import { searchSaga } from '../../store/SearchReducer/actions/actionsSagas';
import {
  currentUserLoginSelect,
  isMobileSelect,
  loadingSelect,
  reposListOpenedSelect,
  searchListSelect,
  usersListOpenedSelect,
} from '../../store/SearchReducer/selectors';

import styles from './styles.module.css';

const SearchHistoryList: React.FC = () => {
  const dispatch = useDispatch();

  const searchList = useSelector(searchListSelect);
  const favoriteList = useSelector(favoriteListSelect);
  const currentUserLogin = useSelector(currentUserLoginSelect);
  const usersListOpened = useSelector(usersListOpenedSelect);
  const reposListOpened = useSelector(reposListOpenedSelect);
  const isMobile = useSelector(isMobileSelect);
  const loading = useSelector(loadingSelect);

  const searchHistoriListBtnHandler = (login: string) => {
    if (login === currentUserLogin) {
      if (usersListOpened) {
        dispatch(userListOpenedFlag(false));
      }
      if (reposListOpened) {
        dispatch(reposOpenedListFlag(false));
      }
      return;
    }
    dispatch(searchSaga(login, searchList, isMobile, favoriteList));
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
