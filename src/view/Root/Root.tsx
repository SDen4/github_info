import React, { useEffect, useState } from 'react';
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
  getLocalHistorySaga,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';

import { InitialStateType } from '../../store/SearchReducer/types';
import { InitialFavoriteStateType } from '../../store/FavoriteReduser/types';
import { getFavoriteListSaga } from '../../store/FavoriteReduser/actions';

import ReposList from '../../components/ReposList';
import FavoriteList from '../../components/FavoriteList';
import FavoriteButton from '../../components/FavoriteButton';
import Modal from '../../components/Modal';

import styles from './Root.module.css';

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const storeData = useSelector<AppStateType, InitialStateType>(
    (store) => store.search,
  );

  const favorite = useSelector<AppStateType, InitialFavoriteStateType>(
    (store) => store.favorite,
  );

  const [user, setUser] = useState<string>('');

  // get elements from localstorage
  useEffect(() => {
    dispatch(getLocalHistorySaga());
    dispatch(getFavoriteListSaga());
  }, [dispatch]);

  const search = (searchLogin: string) => {
    setUser(searchLogin);
  };

  const backBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOPenedFlag(true));
  };

  return (
    <div className={styles.root_wrapper}>
      <header className={styles.root_header}>
        <h1>Find github&apos;s user</h1>

        <div className={styles.buttonsWrapper}>
          {storeData.searchHistory.length ? (
            <SearchHistoryHeader
              historyLength={storeData.searchHistory.length}
              historyBtnStatus={storeData.searchHistoryListFlag}
            />
          ) : (
            ''
          )}
          {favorite.favoriteList.length ? (
            <FavoriteButton
              starNum={favorite.favoriteList.length}
              favoriteListStatus={favorite.favoriteListFlag}
            />
          ) : (
            ''
          )}
        </div>
      </header>

      <section
        className={clsx(styles.root_section, styles.root_section_search)}
      >
        <SearchForm search={search} history={storeData.searchHistory} />

        {(storeData.usersListOpened || storeData.reposListOpened) && (
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
          {storeData.cardOpened && (
            <Card user={storeData.user} favorites={favorite.favoriteList} />
          )}
          {storeData.usersListOpened && (
            <UsersList
              users={storeData.usersList}
              login={storeData.user.login}
              requestType={storeData.lastRequestType}
              history={storeData.searchHistory}
            />
          )}
          {storeData.reposListOpened && (
            <ReposList reposList={storeData.reposList} />
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

        {favorite.favoriteListFlag && (
          <div
            className={clsx(
              styles.root_sub_section,
              styles.root_sub_section_right,
            )}
          >
            <FavoriteList
              favoriteList={favorite.favoriteList}
              searchList={storeData.searchHistory}
            />
          </div>
        )}
      </section>

      {storeData.modalFlag && (
        <Modal textModal={storeData.modalText} type={storeData.modalType} />
      )}
    </div>
  );
};

export default Root;
