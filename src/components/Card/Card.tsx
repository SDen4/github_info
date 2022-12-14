import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { fileText } from './fileText';

import { CloseButton } from 'ui/CloseButton';
import { Flex } from 'ui/Flex';

import { dateFormatter } from 'utils/dateFormatter';
import { periodCounter } from 'utils/periodCounter';

import {
  favoriteListSelect,
  isFavoriteUserSelect,
  isNoteBtnSelect,
  isNoteSelect,
  noteSelect,
} from 'selectors/favorite';
import { isLoadingSelect, userSelect } from 'selectors/search';

import {
  fetchFavoriteList,
  setFavoriteBtnFlag,
  setFavoriteUser,
  setNote,
} from 'store/FavoriteReduser/favoriteReducer';
import { fetchLogin, setCard } from 'store/SearchReducer/actions/actions';
import {
  fetchUsersListSaga,
  reposListSaga,
} from 'store/SearchReducer/actions/actionsSagas';

import styles from './styles.module.css';

const Card: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const favoriteList = useSelector(favoriteListSelect);
  const note = useSelector(noteSelect);
  const user = useSelector(userSelect);
  const isNote = useSelector(isNoteSelect);
  const isLoading = useSelector(isLoadingSelect);
  const isNoteBtn = useSelector(isNoteBtnSelect);
  const isFavoriteUser = useSelector(isFavoriteUserSelect);

  const onClickCloseBtnHandler = () => {
    dispatch(setCard(false));
    dispatch(
      fetchLogin({
        name: '',
        login: '',
        followers_url: '',
        following_url: '',
        followers: 0,
        following: 0,
        created_at: new Date(),
        avatar_url: '',
        company: '',
        email: '',
        public_repos: 0,
        repos_url: '',
        location: '',
        lastActivityDate: '',
      }),
    );

    if (isNote) {
      dispatch(setNote(false));
    }
  };

  const onBtnClickHandler = (requestType: string) => {
    dispatch(fetchUsersListSaga(requestType));
  };

  const onReposClickHandler = () => {
    dispatch(reposListSaga());
  };

  const onClickAddBtnHandler = () => {
    if (isFavoriteUser) {
      const newFavoriteUsersList = favoriteList.filter(
        (el) => el.name !== user.login,
      );
      dispatch(setFavoriteUser(false));
      dispatch(fetchFavoriteList(newFavoriteUsersList));
      localStorage.setItem('favorite', JSON.stringify(newFavoriteUsersList));
    } else {
      dispatch(setFavoriteUser(true));
      const newfavoriteUser = { name: user.login };
      dispatch(fetchFavoriteList([...favoriteList, newfavoriteUser]));
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
    if (!isNote) {
      dispatch(setNote(true));
    }
  };

  return (
    <div className={clsx(styles.card, isLoading && styles.hide)}>
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
          <Flex className={styles.cardUserInfoWrapper}>
            <div className={styles.cardUserInfo}>
              {dateFormatter(user.dataCreated)}
            </div>
            <div className={styles.cardUserInfo}>
              ({periodCounter(user.dataCreated)})
            </div>
          </Flex>
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
            isNoteBtn && styles.buttonActive,
            styles.button,
            styles.addNoteBtn,
            styles.tooltip,
          )}
          onClick={addNoteHandler}
        >
          <span>&#9998;</span>
          <div className={styles.tooltipText}>
            {isNoteBtn ? 'Show note' : 'Add note'}
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
            className={clsx(isFavoriteUser && styles.starActive, styles.star)}
          >
            &#9733;
          </span>
          <div className={styles.tooltipText}>
            {isFavoriteUser ? 'Remove from favorites' : 'Add to favorites'}
          </div>
        </button>

        <CloseButton onClick={onClickCloseBtnHandler} />
      </div>
    </div>
  );
};

export default memo(Card);
