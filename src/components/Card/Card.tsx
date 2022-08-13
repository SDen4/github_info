import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import CloseButton from '../../ui/CloseButton';

import { dateFormatter } from '../../utils/dateFormatter';
import { periodCounter } from '../../utils/periodCounter';

import { cardOpenedFlag, fetchLogin } from '../../store/SearchReducer/actions';
import {
  fetchUsersListSaga,
  reposListSaga,
} from '../../store/SearchReducer/actionsSagas';

import {
  favoriteUserFlag,
  fetchFavoriteList,
  fetchFavoriteListAdd,
  noteFlag,
  setFavoriteBtnFlag,
} from '../../store/FavoriteReduser/actions';

import { Flex } from '../../ui/Flex';
import { fileText } from './fileText';

import { AppStateType } from '../../store/RootReducer';
import { UserType } from '../../store/SearchReducer/types';
import { FavoriteUser } from '../../store/FavoriteReduser/types';

import styles from './Card.module.css';

const Card: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const user = useSelector<AppStateType, UserType>(
    (store) => store.search.user,
  );
  const favoriteList = useSelector<AppStateType, FavoriteUser[]>(
    (store) => store.favorite.favoriteList,
  );
  const favoriteUser = useSelector<AppStateType, boolean>(
    (store) => store.favorite.favoriteUser,
  );
  const noteBtnFlag = useSelector<AppStateType, boolean>(
    (store) => store.favorite.noteBtnFlag,
  );
  const note = useSelector<AppStateType, string>(
    (store) => store.favorite.note,
  );
  const noteStoreFlag = useSelector<AppStateType, boolean>(
    (store) => store.favorite.noteFlag,
  );
  const loading = useSelector<AppStateType, boolean>(
    (store) => store.search.loading,
  );

  const onClickCloseBtnHandler = () => {
    dispatch(cardOpenedFlag(false));
    dispatch(
      fetchLogin('', '', '', '', 0, 0, new Date(), '', '', '', 0, '', ''),
    );

    if (noteStoreFlag) {
      dispatch(noteFlag(false));
    }
  };

  const onBtnClickHandler = (requestType: string) => {
    dispatch(fetchUsersListSaga(user.login, requestType));
  };

  const onReposClickHandler = () => {
    dispatch(reposListSaga(user.login));
  };

  const onClickAddBtnHandler = () => {
    if (favoriteUser) {
      const newFavoriteUsersList = favoriteList.filter(
        (el) => el.name !== user.login,
      );
      dispatch(favoriteUserFlag(false));
      dispatch(fetchFavoriteList(newFavoriteUsersList));
      localStorage.setItem('favorite', JSON.stringify(newFavoriteUsersList));
    } else {
      dispatch(favoriteUserFlag(true));
      const newfavoriteUser = { name: user.login };
      dispatch(fetchFavoriteListAdd(newfavoriteUser));
      localStorage.setItem(
        'favorite',
        JSON.stringify([...favoriteList, newfavoriteUser]),
      );
      dispatch(setFavoriteBtnFlag(true));
    }
  };

  const onDownloadHandler = () => {
    let element = document.createElement('a');

    const text = fileText(user, note);

    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
    );
    element.setAttribute('download', `${user.login}.doc`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const addNoteHandler = () => {
    if (!noteStoreFlag) {
      dispatch(noteFlag(true));
    }
  };

  return (
    <div className={clsx(styles.card, loading && styles.hide)}>
      <aside className={styles.cardElement}>
        <div className={styles.cardPhotoWrapper}>
          <img src={user.avatarUrl} alt="User's avatar" />
        </div>
      </aside>

      <Flex className={styles.cardElement}>
        <header className={styles.cardSubElem}>
          {user.name ? (
            <a
              href={`https://github.com/${user.login}`}
              className={styles.cardLogin}
            >
              {user.name} &#40;{user.login}&#41;
            </a>
          ) : (
            <a
              href={`https://github.com/${user.login}`}
              className={styles.cardLogin}
            >
              {user.login}
            </a>
          )}
        </header>

        {user.company && (
          <div className={styles.cardSubElem}>
            <span>Company:&nbsp;</span>
            <div className={styles.cardUserInfo}>{user.company}</div>
          </div>
        )}

        {user.location && (
          <div className={styles.cardSubElem}>
            <span>Location:&nbsp;</span>
            <div className={styles.cardUserInfo}>{user.location}</div>
          </div>
        )}

        {user.email && (
          <div className={styles.cardSubElem}>
            <span>Email:&nbsp;</span>
            <a href={`mailto:${user.email}`} className={styles.cardUserInfo}>
              {user.email}
            </a>
          </div>
        )}

        {user.reposNum ? (
          <div className={styles.cardSubElem}>
            <span>Public repositories:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.cardUserInfo, styles.cardUserInfoBtn)}
              onClick={onReposClickHandler}
            >
              {user.reposNum}
            </button>
          </div>
        ) : (
          ''
        )}

        <div className={styles.cardFollowersWrapper}>
          <div className={styles.cardFollowersUnit}>
            <span>Followers:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.cardUserInfo, styles.cardUserInfoBtn)}
              onClick={() => onBtnClickHandler('followers')}
            >
              {user.followersNum}
            </button>
          </div>

          <div className={styles.cardFollowersUnit}>
            <span>Following:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.cardUserInfo, styles.cardUserInfoBtn)}
              onClick={() => onBtnClickHandler('following')}
            >
              {user.followingNum}
            </button>
          </div>
        </div>

        <div className={clsx(styles.cardSubElem, styles.cardSubElemCreate)}>
          <span>Created&nbsp;at:&nbsp;</span>
          <div className={styles.cardUserInfoWrapper}>
            <div className={styles.cardUserInfo}>
              {dateFormatter(user.dataCreated)}
            </div>
            <div className={styles.cardUserInfo}>
              ({periodCounter(user.dataCreated)})
            </div>
          </div>
        </div>

        {user.lastActivityDate && (
          <div className={styles.cardSubElem}>
            <span>Last&nbsp;activity&nbsp;at:&nbsp;</span>
            <div className={styles.cardUserInfo}>
              {dateFormatter(new Date(user.lastActivityDate))}
            </div>
          </div>
        )}
      </Flex>
      <div className={styles.closeBtnWrapper}>
        <button
          type="button"
          className={clsx(
            noteBtnFlag && styles.buttonActive,
            styles.button,
            styles.addNoteBtn,
            styles.tooltip,
          )}
          onClick={addNoteHandler}
        >
          <span>&#9998;</span>
          <div className={styles.tooltipText}>
            {noteBtnFlag ? 'Show note' : 'Add note'}
          </div>
        </button>

        <button
          type="button"
          className={clsx(styles.button, styles.downloadBtn, styles.tooltip)}
          onClick={onDownloadHandler}
        >
          <span className={styles.arrow}>&#8595;</span>
          <div className={styles.line} />
          <div className={styles.tooltipText}>Download .doc file</div>
        </button>

        <button
          type="button"
          className={clsx(styles.button, styles.tooltip)}
          onClick={onClickAddBtnHandler}
        >
          <span
            className={clsx(favoriteUser && styles.starActive, styles.star)}
          >
            &#9733;
          </span>
          <div className={styles.tooltipText}>
            {favoriteUser ? 'Remove from favorites' : 'Add to favorites'}
          </div>
        </button>

        <CloseButton onClick={onClickCloseBtnHandler} />
      </div>
    </div>
  );
};

export default memo(Card);
