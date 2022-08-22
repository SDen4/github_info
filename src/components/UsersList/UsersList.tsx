import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import UserItem from '../UserItem';

import {
  cardOpenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions/actions';
import {
  lastRequestTypeSelect,
  loadingSelect,
  userSelect,
  usersListSelect,
} from '../../store/SearchReducer/selectors';

import { UserInnerType } from '../../model/search/types';

import styles from './styles.module.css';

const UsersList: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelect);
  const usersList = useSelector(usersListSelect);
  const lastRequestType = useSelector(lastRequestTypeSelect);
  const loading = useSelector(loadingSelect);

  const loginBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOpenedFlag(true));
  };

  return (
    <div className={clsx(styles.listWrapper, loading && styles.hide)}>
      {usersList.length ? (
        <ul className={styles.listWrapperUl}>
          {usersList.map((el: UserInnerType) => (
            <li key={el.login}>
              <UserItem user={el} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.listError}>
          <h2>
            It seems the user
            <span className={styles.listErrorLogin}>
              {' '}
              <button
                type="button"
                onClick={loginBtnHandler}
                className={styles.cardLogin}
              >
                {user.login}
              </button>{' '}
            </span>
            hasn&#39;t any {lastRequestType}
          </h2>
        </div>
      )}
    </div>
  );
};

export default memo(UsersList);
