import React, { memo, useEffect, useState } from 'react';
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

import {
  cardOPenedFlag,
  reposOpenedListFlag,
  searhInitFetch,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { favoriteListFlag } from '../../store/FavoriteReduser/actions';

import { selectFavorite } from '../../store/SearchReducer/selectors/selectors';
import { selectSearch } from '../../store/FavoriteReduser/selectors/selectors';

import styles from './Root.module.css';

const Root: React.FC = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const favorite = useSelector(selectFavorite);

  const [user, setUser] = useState<string>('');

  const isCardOpen =
    (!search.isMobile && search.cardOpened) ||
    (search.isMobile &&
      search.cardOpened &&
      !search.searchHistoryListFlag &&
      !favorite.favoriteListFlag);

  useEffect(() => {
    dispatch(searhInitFetch());
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
    <div className={styles.root_wrapper}>
      <header className={styles.root_header}>
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
              search={searchFunc}
              history={search.searchHistory}
              favoritesList={favorite.favoriteList}
              currentUser={search.user.login}
              isMobile={search.isMobile}
            />

            {(search.usersListOpened || search.reposListOpened) && (
              <button
                type="button"
                onClick={backBtnHandler}
                className={styles.root_btn}
              >
                Back
              </button>
            )}
          </section>

          {search.loading && <Loader />}
          {isCardOpen && (
            <>
              <Card
                user={search.user}
                favorites={favorite.favoriteList}
                favoriteUserStatus={favorite.favoriteUser}
                noteUserStatus={favorite.noteBtnFlag}
                note={favorite.note}
              />

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
            <UsersList
              users={search.usersList}
              login={search.user.login}
              requestType={search.lastRequestType}
              history={search.searchHistory}
              isMobile={search.isMobile}
            />
          )}
          {search.reposListOpened && <ReposList reposList={search.reposList} />}
          {search.error && <Error userName={user} />}
        </div>

        {search.searchHistoryListFlag && (
          <div
            className={clsx(
              styles.root_sub_section,
              styles.root_sub_section_right,
            )}
          >
            <SearchHistoryList
              searchList={search.searchHistory}
              favoritesList={favorite.favoriteList}
              currentUserLogin={search.user.login}
              userListOpened={search.usersListOpened}
              reposListOpened={search.reposListOpened}
              isMobile={search.isMobile}
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
              searchList={search.searchHistory}
              currentUserLogin={search.user.login}
              userListOpened={search.usersListOpened}
              reposListOpened={search.reposListOpened}
              isMobile={search.isMobile}
            />
          </div>
        )}
      </section>

      {search.modalFlag && (
        <Modal textModal={search.modalText} type={search.modalType} />
      )}
    </div>
  );
};

export default memo(Root);
