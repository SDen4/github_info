import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Card from '../../components/Card';
import Error from '../../components/Error';
import UsersList from '../../components/UsersList';
import SearchForm from '../../components/SearchForm';
import SearchHistoryList from '../../components/SearchHistoryList';
import SearchHistoryHeader from '../../components/SearchHistoryHeader';
import Loader from '../../ui/Loader';

import { AppStateType } from '../../store/RootReducer';
import {
  cardOPenedFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { InitialStateType } from '../../store/SearchReducer/types';

import styles from './Root.module.css';

const Root: React.FC = () => {
  const dispatch = useDispatch();
  const storeData = useSelector<AppStateType, InitialStateType>(
    (store) => store.search,
  );
  const [user, setUser] = useState<string>('');

  const search = (searchLogin: string) => {
    setUser(searchLogin);
  };

  const backBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(cardOPenedFlag(true));
  };

  return (
    <div className={styles.root_wrapper}>
      <header className={styles.root_header}>
        <h1>Find github&apos;s user</h1>

        {storeData.searchHistory.length ? (
          <SearchHistoryHeader historyLength={storeData.searchHistory.length} />
        ) : (
          ''
        )}
      </header>

      <section
        className={clsx(styles.root_section, styles.root_section_search)}
      >
        <SearchForm search={search} />

        {storeData.usersListOpened && (
          <button
            type="button"
            onClick={backBtnHandler}
            className={styles.root_btn}
          >
            Back
          </button>
        )}
      </section>

      <section className={styles.root_section}>
        <div
          className={clsx(
            styles.root_sub_section,
            styles.root_sub_section_left,
          )}
        >
          {storeData.loading && <Loader />}
          {storeData.cardOpened && <Card user={storeData.user} />}
          {storeData.usersListOpened && (
            <UsersList
              users={storeData.usersList}
              login={storeData.user.login}
              requestType={storeData.lastRequestType}
            />
          )}
          {storeData.error && <Error userName={user} />}
        </div>

        {storeData.searchHistoryListFlag && (
          <div
            className={clsx(
              styles.root_sub_section,
              styles.root_sub_section_right,
            )}
          >
            <SearchHistoryList searchList={storeData.searchHistory} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Root;
