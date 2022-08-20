import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Flex } from '../../ui/Flex';
import Loader from '../../ui/Loader';
import { Header } from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import StartMobile from '../../components/StartMobile';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { AppStateType } from '../../store/RootReducer';
import {
  cardOpenedFlag,
  reposOpenedListFlag,
  searchIsMobileStart,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { searhInitFetchSaga } from '../../store/SearchReducer/actionsSagas';
import {
  cardOpenedSelect,
  errorSelect,
  isAndroidSelect,
  isMobileSelect,
  isMobileStartSelect,
  loadingSelect,
  modalFlagSelect,
  reposListOpenedSelect,
  searchHistoryListFlagSelect,
  usersListOpenedSelect,
} from '../../store/SearchReducer/selectors';
import { FavoriteUser } from '$store/FavoriteReduser/types';

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
const LazyModal = React.lazy(() => import('../../components/Modal'));
const LazyNote = React.lazy(() => import('../../components/Note'));
const LazyError = React.lazy(() => import('../../components/Error'));

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const flFlag = useSelector<AppStateType, boolean>(
    (store) => store.favorite.favoriteListFlag,
  );
  const favoriteList = useSelector<AppStateType, FavoriteUser[]>(
    (store) => store.favorite.favoriteList,
  );
  const noteFlag = useSelector<AppStateType, boolean>(
    (store) => store.favorite.noteFlag,
  );
  const isMobileStart = useSelector(isMobileStartSelect);
  const isMobile = useSelector(isMobileSelect);
  const cardOpened = useSelector(cardOpenedSelect);
  const searchHistoryListFlag = useSelector(searchHistoryListFlagSelect);
  const error = useSelector(errorSelect);
  const isAndroid = useSelector(isAndroidSelect);
  const usersListOpened = useSelector(usersListOpenedSelect);
  const reposListOpened = useSelector(reposListOpenedSelect);
  const loading = useSelector(loadingSelect);
  const modalFlag = useSelector(modalFlagSelect);

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
    if (isMobileStart) {
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
    (!isMobile && cardOpened) ||
    (isMobile && cardOpened && !searchHistoryListFlag && !flFlag);

  const isErrorOpen =
    (!isMobile && error) ||
    (isMobile && error && !searchHistoryListFlag && !flFlag);

  useEffect(() => {
    dispatch(searhInitFetchSaga());
  }, [dispatch]);

  // close favorite list if there are no any items
  useEffect(() => {
    if (!favoriteList.length) {
      dispatch(favoriteListFlag(false));
    }
  }, [dispatch, favoriteList]);

  const searchFunc = (searchLogin: string) => {
    setUser(searchLogin);
  };

  const backBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOpenedFlag(true));
  };

  return (
    <Flex className={styles.appContainer}>
      {isMobile && isAndroid && isMobileStart ? (
        <StartMobile appHeight={appHeight} />
      ) : (
        <div
          className={styles.rootWrapper}
          style={isMobile && isMobileStart ? { minHeight: appHeight } : {}}
        >
          <Header />

          <main className={styles.root}>
            <section className={styles.rootSectionLeft}>
              <div className={clsx(styles.root, styles.rootSectionSearch)}>
                <SearchForm searchFunc={searchFunc} />

                {!isMobile && (usersListOpened || reposListOpened) && (
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

              {loading && <Loader />}
              {isCardOpen && (
                <div
                  className={clsx(
                    !isMobile && styles.sticky,
                    isMobile && styles.rootSectionRight_Mobile,
                  )}
                  style={{ maxHeight: appHeight - 239 }}
                >
                  <Suspense fallback={<Loader />}>
                    <LazyCard />
                  </Suspense>

                  {noteFlag && (
                    <Suspense fallback={<Loader />}>
                      <LazyNote />
                    </Suspense>
                  )}
                </div>
              )}
              {usersListOpened && (
                <div
                  className={clsx(isMobile && styles.rootSectionRight_Mobile)}
                  style={{ maxHeight: appHeight - 239 }}
                >
                  <Suspense fallback={<Loader />}>
                    <LazyUsersList />
                  </Suspense>
                </div>
              )}
              {reposListOpened && (
                <div
                  className={clsx(isMobile && styles.rootSectionRight_Mobile)}
                  style={{ maxHeight: isMobile ? appHeight - 239 : 'unset' }}
                >
                  <Suspense fallback={<Loader />}>
                    <LazyReposList />
                  </Suspense>
                </div>
              )}
              {isErrorOpen && (
                <Suspense fallback={<Loader />}>
                  <LazyError userName={user} />
                </Suspense>
              )}
            </section>

            {searchHistoryListFlag && (
              <section
                className={clsx(
                  styles.rootSectionRight,
                  isMobile && styles.rootSectionRight_Mobile,
                )}
                style={{ maxHeight: isMobile ? appHeight - 239 : 'unset' }}
              >
                <Suspense fallback={<Loader />}>
                  <LazySearchHistoryList />
                </Suspense>
              </section>
            )}

            {flFlag && (
              <section
                className={clsx(
                  styles.rootSectionRight,
                  isMobile && styles.rootSectionRight_Mobile,
                )}
                style={{ maxHeight: appHeight - 239 }}
              >
                <Suspense fallback={<Loader />}>
                  <LazyFavoriteList />
                </Suspense>
              </section>
            )}
          </main>

          {modalFlag && (
            <Suspense fallback={<Loader />}>
              <LazyModal />
            </Suspense>
          )}
        </div>
      )}
    </Flex>
  );
};

export default Root;
