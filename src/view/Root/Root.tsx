import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Note from '../../components/Note';
import Error from '../../components/Error';
import Modal from '../../components/Modal';
import SearchForm from '../../components/SearchForm';
import StartMobile from '../../components/StartMobile';
import FavoriteButton from '../../components/FavoriteButton';
import SearchHistoryHeader from '../../components/SearchHistoryHeader';

import Loader from '../../ui/Loader';

import {
  cardOpenedFlag,
  reposOpenedListFlag,
  searchIsMobileStart,
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
  useEffect(() => setAppHeight(window.outerHeight), []);

  // resize & height
  useEffect(() => {
    if (appHeight !== window.outerHeight) {
      window.addEventListener(
        'resize',
        () => setAppHeight(window.outerHeight),
        true,
      );
    }
  }, [appHeight]);

  // set fullscreen in case of fullscreenchange
  useEffect(() => {
    if (search.isMobileStart) {
      return;
    }
    window.addEventListener(
      'fullscreenchange',
      () => dispatch(searchIsMobileStart(true)),
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appHeight]);

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
    dispatch(cardOpenedFlag(true));
  };

  return (
    <div className={styles.appContainer}>
      {search.isMobile && search.isAndroid && search.isMobileStart ? (
        <StartMobile appHeight={appHeight} />
      ) : (
        <div
          className={styles.rootWrapper}
          style={
            search.isMobile && search.isMobileStart
              ? { minHeight: appHeight }
              : {}
          }
        >
          <header className={styles.rootHeader}>
            <h1>Find github&apos;s user</h1>

            <div className={styles.buttonsWrapper}>
              {search.searchHistory.length ? (
                <SearchHistoryHeader
                  historyLength={search.searchHistory.length}
                  searchHistoryListStatus={search.searchHistoryListFlag}
                />
              ) : (
                ''
              )}
              {favorite.favoriteList.length ? <FavoriteButton /> : ''}
            </div>
          </header>

          <main className={styles.root}>
            <section className={styles.rootSectionLeft}>
              <div className={clsx(styles.root, styles.rootSectionSearch)}>
                <SearchForm
                  searchFunc={searchFunc}
                  search={search}
                  favoritesList={favorite.favoriteList}
                  favoriteListFlag={favorite.favoriteListFlag}
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
                <div
                  className={clsx(
                    search.isMobile && styles.rootSectionRight_Mobile,
                  )}
                  style={{ maxHeight: appHeight - 239 }}
                >
                  <Suspense fallback={<Loader />}>
                    <LazyCard />
                  </Suspense>

                  {favorite.noteFlag && (
                    <Note
                      note={favorite.note}
                      login={search.user.login}
                      favorites={favorite.favoriteList}
                    />
                  )}
                </div>
              )}
              {search.usersListOpened && (
                <div
                  className={clsx(
                    search.isMobile && styles.rootSectionRight_Mobile,
                  )}
                  style={{ maxHeight: appHeight - 239 }}
                >
                  <Suspense fallback={<Loader />}>
                    <LazyUsersList
                      users={search.usersList}
                      login={search.user.login}
                      requestType={search.lastRequestType}
                      history={search.searchHistory}
                      isMobile={search.isMobile}
                      loading={search.loading}
                    />
                  </Suspense>
                </div>
              )}
              {search.reposListOpened && (
                <div
                  className={clsx(
                    search.isMobile && styles.rootSectionRight_Mobile,
                  )}
                  style={{ maxHeight: appHeight - 239 }}
                >
                  <Suspense fallback={<Loader />}>
                    <LazyReposList reposList={search.reposList} />
                  </Suspense>
                </div>
              )}
              {isErrorOpen && <Error userName={user} />}
            </section>

            {search.searchHistoryListFlag && (
              <section
                className={clsx(
                  styles.rootSectionRight,
                  search.isMobile && styles.rootSectionRight_Mobile,
                )}
                style={{ maxHeight: appHeight - 239 }}
              >
                <Suspense fallback={<Loader />}>
                  <LazySearchHistoryList
                    searchList={search.searchHistory}
                    favoritesList={favorite.favoriteList}
                    currentUserLogin={search.user.login}
                    userListOpened={search.usersListOpened}
                    reposListOpened={search.reposListOpened}
                    isMobile={search.isMobile}
                    loading={search.loading}
                  />
                </Suspense>
              </section>
            )}

            {favorite.favoriteListFlag && (
              <section
                className={clsx(
                  styles.rootSectionRight,
                  search.isMobile && styles.rootSectionRight_Mobile,
                )}
                style={{ maxHeight: appHeight - 239 }}
              >
                <Suspense fallback={<Loader />}>
                  <LazyFavoriteList
                    favoriteList={favorite.favoriteList}
                    searchList={search.searchHistory}
                    currentUserLogin={search.user.login}
                    userListOpened={search.usersListOpened}
                    reposListOpened={search.reposListOpened}
                    isMobile={search.isMobile}
                    loading={search.loading}
                  />
                </Suspense>
              </section>
            )}
          </main>

          {search.modalFlag && (
            <Modal textModal={search.modalText} type={search.modalType} />
          )}
        </div>
      )}
    </div>
  );
};

export default Root;
