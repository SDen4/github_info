import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import UserItem from '../UserItem';

import {
  cardOpenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import {
  currentUserLoginSelect,
  lastRequestTypeSelect,
  loadingSelect,
  usersListSelect,
} from '../../store/SearchReducer/selectors';
import { UserInnerType } from '$store/SearchReducer/types';

import styles from './styles.module.css';

const UsersList: React.FC = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersListSelect);
  const login = useSelector(currentUserLoginSelect);
  const requestType = useSelector(lastRequestTypeSelect);
  const loading = useSelector(loadingSelect);

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
