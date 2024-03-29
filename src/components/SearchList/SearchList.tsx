import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { CloseButton } from 'ui/CloseButton';
import { Flex } from 'ui/Flex';

import { dateFormatter } from 'utils/dateFormatter';
import { timeFormatter } from 'utils/timeFormatter';

import { favoriteListSelect } from 'selectors/favorite';
import {
  isLoadingSelect,
  isMobileSelect,
  searchListSelect,
} from 'selectors/search';

import { getGithubUserSaga } from 'store/SearchReducer/actions';
import { setModal, setSearchList } from 'store/SearchReducer/searchReducer';

import styles from './styles.module.css';

const SearchList = () => {
  const dispatch = useDispatch();

  const searchList = useSelector(searchListSelect);
  const favoriteList = useSelector(favoriteListSelect);
  const isMobile = useSelector(isMobileSelect);
  const isLoading = useSelector(isLoadingSelect);

  const searchHistoriListBtnHandler = (login: string) => {
    if (!login?.length) return;

    dispatch(getGithubUserSaga(login, searchList, favoriteList));
  };

  const closeBtnHandler = () => dispatch(setSearchList(false));

  const clearBtnHandler = () => {
    dispatch(
      setModal({
        isModal: true,
        modalText: `Are you sure to delete ${
          searchList.length > 1 ? 'all' : ''
        } ${searchList.length > 1 ? `(${searchList.length})` : ''} ${
          searchList.length > 1 ? 'items' : 'the item'
        } of search history?`,
        modalType: 'search',
      }),
    );
  };

  return (
    <Flex
      className={clsx(styles.shlWrapper, isMobile && isLoading && styles.hide)}
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

export default SearchList;
