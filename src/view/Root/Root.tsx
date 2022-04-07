import React, { memo, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Note from '../../components/Note';
import Error from '../../components/Error';
import Modal from '../../components/Modal';
import SearchForm from '../../components/SearchForm';
import FavoriteButton from '../../components/FavoriteButton';
import SearchHistoryHeader from '../../components/SearchHistoryHeader';

import Loader from '../../ui/Loader';

import {
  cardOPenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { searhInitFetchSaga } from '../../store/SearchReducer/actionsSagas';
import { favoriteListFlag } from '../../store/FavoriteReduser/actions';

import { selectFavorite } from '../../store/SearchReducer/selectors/selectors';
import { selectSearch } from '../../store/FavoriteReduser/selectors/selectors';

import styles from './Root.module.css';

const LazySearchHistoryList = React.lazy(
  () => import('../../components/SearchHistoryList'),
);
const LazyFavoriteList = React.lazy(
  () => import('../../components/FavoriteList'),
);
const LazyCard = React.lazy(() => import('../../components/Card'));
const LazyReposList = React.lazy(() => import('../../components/ReposList'));
const LazyUsersList = React.lazy(() => import('../../components/UsersList'));

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const favorite = useSelector(selectFavorite);

  const [user, setUser] = useState<string>('');

  // app height
  const [appHeight, setAppHeight] = useState<number>(0);
  useEffect(() => {
    setAppHeight(window.innerHeight);
  }, []);

  const isCardOpen =
    (!search.isMobile && search.cardOpened) ||
    (search.isMobile &&
      search.cardOpened &&
      !search.searchHistoryListFlag &&
      !favorite.favoriteListFlag);

  const isErrorOpen =
    (!search.isMobile && search.error) ||
    (search.isMobile &&
      search.error &&
      !search.searchHistoryListFlag &&
      !favorite.favoriteListFlag);

  useEffect(() => {
    dispatch(searhInitFetchSaga());
  }, [dispatch]);

  // close favorite list if there are no any items
  useEffect(() => {
    if (!favorite.favoriteList.length) {
      dispatch(favoriteListFlag(false));
    }
  }, [dispatch, favorite.favoriteList]);

  const searchFunc = (searchLogin: string) => {
    setUser(searchLogin);
  };

  const backBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOPenedFlag(true));
  };

  return (
    <div className={styles.rootWrapper} style={{ minHeight: appHeight }}>
      <header className={styles.rootHeader}>
        <h1>Find github&apos;s user</h1>

        <div className={styles.buttonsWrapper}>
          {search.searchHistory.length ? (
            <SearchHistoryHeader
              historyLength={search.searchHistory.length}
              searchHistoryListStatus={search.searchHistoryListFlag}
              historyBtnStatus={search.searchHistoryListFlag}
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

      <main className={styles.root}>
        <section className={styles.rootSectionLeft}>
          <div className={clsx(styles.root, styles.rootSectionSearch)}>
            <SearchForm
              search={searchFunc}
              searchState={search}
              history={search.searchHistory}
              favoritesList={favorite.favoriteList}
              currentUser={search.user.login}
              isMobile={search.isMobile}
            />

            {!search.isMobile &&
              (search.usersListOpened || search.reposListOpened) && (
                <button
                  type="button"
                  onClick={backBtnHandler}
                  className={styles.rootBtn}
                >
                  Back
                </button>
                // eslint-disable-next-line indent
              )}
          </div>

          {search.loading && <Loader />}
          {isCardOpen && (
            <>
              <Suspense fallback={<Loader />}>
                <LazyCard
                  user={search.user}
                  favorites={favorite.favoriteList}
                  favoriteUserStatus={favorite.favoriteUser}
                  noteUserStatus={favorite.noteBtnFlag}
                  note={favorite.note}
                  noteStoreFlag={favorite.noteFlag}
                />
              </Suspense>

              {favorite.noteFlag && (
                <Note
                  note={favorite.note}
                  login={search.user.login}
                  favorites={favorite.favoriteList}
                />
              )}
            </>
          )}
          {search.usersListOpened && (
            <Suspense fallback={<Loader />}>
              <LazyUsersList
                users={search.usersList}
                login={search.user.login}
                requestType={search.lastRequestType}
                history={search.searchHistory}
                isMobile={search.isMobile}
              />
            </Suspense>
          )}
          {search.reposListOpened && (
            <Suspense fallback={<Loader />}>
              <LazyReposList reposList={search.reposList} />
            </Suspense>
          )}
          {isErrorOpen && <Error userName={user} />}
        </section>

        {search.searchHistoryListFlag && (
          <section className={styles.rootSectionRight}>
            <Suspense fallback={<Loader />}>
              <LazySearchHistoryList
                searchList={search.searchHistory}
                favoritesList={favorite.favoriteList}
                currentUserLogin={search.user.login}
                userListOpened={search.usersListOpened}
                reposListOpened={search.reposListOpened}
                isMobile={search.isMobile}
              />
            </Suspense>
          </section>
        )}

        {favorite.favoriteListFlag && (
          <section className={styles.rootSectionRight}>
            <Suspense fallback={<Loader />}>
              <LazyFavoriteList
                favoriteList={favorite.favoriteList}
                searchList={search.searchHistory}
                currentUserLogin={search.user.login}
                userListOpened={search.usersListOpened}
                reposListOpened={search.reposListOpened}
                isMobile={search.isMobile}
              />
            </Suspense>
          </section>
        )}
      </main>

      {search.modalFlag && (
        <Modal textModal={search.modalText} type={search.modalType} />
      )}
    </div>
  );
};

export default memo(Root);
