import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Card from '../../components/Card';
import Note from '../../components/Note';
import Error from '../../components/Error';
import Modal from '../../components/Modal';
import ReposList from '../../components/ReposList';
import UsersList from '../../components/UsersList';
import SearchForm from '../../components/SearchForm';
import FavoriteList from '../../components/FavoriteList';
import FavoriteButton from '../../components/FavoriteButton';
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
import {
  favoriteListFlag,
  getFavoriteListSaga,
} from '../../store/FavoriteReduser/actions';

import { InitialStateType } from '../../store/SearchReducer/types';
import { InitialFavoriteStateType } from '../../store/FavoriteReduser/types';

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

  // close favorite list if there are no any items
  useEffect(() => {
    if (!favorite.favoriteList.length) {
      dispatch(favoriteListFlag(false));
    }
  }, [dispatch, favorite.favoriteList]);

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
              searchHistoryListStatus={storeData.searchHistoryListFlag}
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

      <section className={styles.root_section}>
        <div
          className={clsx(
            styles.root_sub_section,
            styles.root_sub_section_left,
          )}
        >
          <section
            className={clsx(styles.root_section, styles.root_section_search)}
          >
            <SearchForm
              search={search}
              history={storeData.searchHistory}
              favoritesList={favorite.favoriteList}
              currentUser={storeData.user.login}
            />

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

          {storeData.loading && <Loader />}
          {storeData.cardOpened && (
            <>
              <Card
                user={storeData.user}
                favorites={favorite.favoriteList}
                favoriteUserStatus={favorite.favoriteUser}
                noteUserStatus={favorite.noteBtnFlag}
                note={favorite.note}
              />

              {favorite.noteFlag && (
                <Note
                  note={favorite.note}
                  login={storeData.user.login}
                  favorites={favorite.favoriteList}
                />
              )}
            </>
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
            <SearchHistoryList
              searchList={storeData.searchHistory}
              favoritesList={favorite.favoriteList}
              currentUserLogin={storeData.user.login}
              userListOpened={storeData.usersListOpened}
              reposListOpened={storeData.reposListOpened}
            />
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
              currentUserLogin={storeData.user.login}
              userListOpened={storeData.usersListOpened}
              reposListOpened={storeData.reposListOpened}
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
