import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import UserItem from '../UserItem';

import { AppStateType } from '../../store/RootReducer';
import {
  cardOpenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { UserInnerType } from '$store/SearchReducer/types';

import styles from './styles.module.css';

const UsersList: React.FC = () => {
  const dispatch = useDispatch();

  const users = useSelector<AppStateType, UserInnerType[]>(
    (store) => store.search.usersList,
  );
  const login = useSelector<AppStateType, string>(
    (store) => store.search.user.login,
  );
  const requestType = useSelector<AppStateType, string>(
    (store) => store.search.lastRequestType,
  );
  const loading = useSelector<AppStateType, boolean>(
    (store) => store.search.loading,
  );

  const loginBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOpenedFlag(true));
  };

  return (
    <div className={clsx(styles.listWrapper, loading && styles.hide)}>
      {users.length ? (
        <ul className={styles.listWrapperUl}>
          {users.map((el: UserInnerType) => (
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
                {login}
              </button>{' '}
            </span>
            hasn&#39;t any {requestType}
          </h2>
        </div>
      )}
    </div>
  );
};

export default memo(UsersList);
