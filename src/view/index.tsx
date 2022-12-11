/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Flex } from 'ui/Flex';
import { Loader } from 'ui/Loader';
import { Header } from 'components/Header';
import { SearchedUsersList } from 'components/SearchedUsersList';
import { SearchForm } from 'components/SearchForm';
import { StartMobile } from 'components/StartMobile';

import { setFavoriteList } from 'store/FavoriteReduser/favoriteReducer';
import {
  favoriteListSelect,
  isFavoriteListSelect,
  isNoteSelect,
} from 'store/FavoriteReduser/selectors';
import {
  setCard,
  setMobileStart,
  setReposList,
  setUsersList,
} from 'store/SearchReducer/actions/actions';
import { searhInitFetchSaga } from 'store/SearchReducer/actions/actionsSagas';
import {
  isAndroidSelect,
  isCardSelect,
  isErrorSelect,
  isLoadingSelect,
  isMobileSelect,
  isMobileStartSelect,
  isModalSelect,
  isReposListSelect,
  isSearchListSelect,
  isUsersListSelect,
  searchedUsersListSelect,
} from 'store/SearchReducer/selectors';

import styles from './styles.module.css';

const LazyCard = React.lazy(() => import('components/Card'));
const LazyReposList = React.lazy(() => import('components/ReposList'));
const LazyUsersList = React.lazy(() => import('components/UsersList'));
const LazyModal = React.lazy(() => import('components/Modal'));
const LazyNote = React.lazy(() => import('components/Note'));
const LazyError = React.lazy(() => import('components/Error'));
const LazySearchList = React.lazy(() => import('components/SearchList'));
const LazyFavoriteList = React.lazy(() => import('components/FavoriteList'));

export const Root: React.FC = () => {
  const dispatch = useDispatch();

  const favoriteList = useSelector(favoriteListSelect);
  const isFavoriteList = useSelector(isFavoriteListSelect);
  const isNote = useSelector(isNoteSelect);
  const isSearchList = useSelector(isSearchListSelect);
  const isError = useSelector(isErrorSelect);
  const isMobile = useSelector(isMobileSelect);
  const isMobileStart = useSelector(isMobileStartSelect);
  const isAndroid = useSelector(isAndroidSelect);
  const isCard = useSelector(isCardSelect);
  const isUsersList = useSelector(isUsersListSelect);
  const isReposList = useSelector(isReposListSelect);
  const isLoading = useSelector(isLoadingSelect);
  const isModal = useSelector(isModalSelect);
  const searchedUsersList = useSelector(searchedUsersListSelect);

  // app height
  const [appHeight, setAppHeight] = useState(0);
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
      () => dispatch(setMobileStart(true)),
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appHeight]);

  const isCardOpenLocal =
    (!isMobile && isCard) ||
    (isMobile && isCard && !isSearchList && !isFavoriteList);

  const isErrorOpen =
    (!isMobile && isError) ||
    (isMobile && isError && !isSearchList && !isFavoriteList);

  useEffect(() => {
    dispatch(searhInitFetchSaga());
  }, [dispatch]);

  // close favorite list if there are no any items
  useEffect(() => {
    if (!favoriteList.length) {
      dispatch(setFavoriteList(false));
    }
  }, [dispatch, favoriteList]);

  const backBtnHandler = () => {
    dispatch(setUsersList(false));
    dispatch(setReposList(false));
    dispatch(setCard(true));
  };

  return (
    <Flex className={styles.appContainer}>
      {isMobile && isAndroid && isMobileStart ? (
        <StartMobile appHeight={appHeight} />
      ) : (
        <Flex
          className={styles.rootWrapper}
          style={isMobile && isMobileStart ? { minHeight: appHeight } : {}}
        >
          <Header />

          <main className={styles.root}>
            <section className={styles.rootSectionLeft}>
              <div className={clsx(styles.root, styles.rootSectionSearch)}>
                <SearchForm />

                {!isMobile && (isUsersList || isReposList) && (
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

              {isLoading && <Loader />}

              {searchedUsersList.items.length ||
              (searchedUsersList.total_count &&
                searchedUsersList.total_count > 0) ? (
                <SearchedUsersList />
              ) : null}

              {isCardOpenLocal && (
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

                  {isNote && (
                    <Suspense fallback={<Loader />}>
                      <LazyNote />
                    </Suspense>
                  )}
                </div>
              )}
              {isUsersList && (
                <div
                  className={clsx(isMobile && styles.rootSectionRight_Mobile)}
                  style={{ maxHeight: appHeight - 239 }}
                >
                  <Suspense fallback={<Loader />}>
                    <LazyUsersList />
                  </Suspense>
                </div>
              )}
              {isReposList && (
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
                  <LazyError />
                </Suspense>
              )}
            </section>

            {isSearchList && (
              <section
                className={clsx(
                  styles.rootSectionRight,
                  isMobile && styles.rootSectionRight_Mobile,
                )}
                style={{ maxHeight: isMobile ? appHeight - 239 : 'unset' }}
              >
                <Suspense fallback={<Loader />}>
                  <LazySearchList />
                </Suspense>
              </section>
            )}

            {isFavoriteList && (
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

          {isModal && (
            <Suspense fallback={<Loader />}>
              <LazyModal />
            </Suspense>
          )}
        </Flex>
      )}
    </Flex>
  );
};
