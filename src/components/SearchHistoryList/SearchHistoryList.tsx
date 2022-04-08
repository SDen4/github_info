import React from 'react';
import { useDispatch } from 'react-redux';

import {
  searchHistoryListFlag,
  modalFlag,
  userListOpenedFlag,
  reposOpenedListFlag,
  cardOPenedFlag,
} from '../../store/SearchReducer/actions';
import { searchSaga } from '../../store/SearchReducer/actionsSagas';

import CloseButton from '../../ui/CloseButton';

import { dateFormatter } from '../../utils/dateFormatter';

import { ISearchHistoryList } from './types';

import styles from './SearchHistoryList.module.css';
import { timeFormatter } from '../../utils/timeFormatter';

const SearchHistoryList: React.FC<ISearchHistoryList> = ({
  searchList,
  currentUserLogin,
  favoritesList,
  userListOpened,
  reposListOpened,
  isMobile,
}) => {
  const dispatch = useDispatch();

  const searchHistoriListBtnHandler = (login: string) => {
    if (login === currentUserLogin) {
      if (userListOpened) {
        dispatch(userListOpenedFlag(false));
        dispatch(cardOPenedFlag(true));
      }
      if (reposListOpened) {
        dispatch(reposOpenedListFlag(false));
        dispatch(cardOPenedFlag(true));
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
    <div className={styles.shlWrapper}>
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
    </div>
  );
};

export default SearchHistoryList;
