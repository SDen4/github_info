import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { UserItem } from '../UserItem';

import { Ul } from 'ui/Ul';

import {
  isLoadingSelect,
  lastRequestTypeSelect,
  userSelect,
  usersListSelect,
} from 'selectors/search';

import {
  setCard,
  setReposList,
  setUsersList,
} from 'store/SearchReducer/actions/actions';

import { IUserInner } from 'model/search/types';

import styles from './styles.module.css';

const UsersList: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelect);
  const usersList = useSelector(usersListSelect);
  const lastRequestType = useSelector(lastRequestTypeSelect);
  const isLoading = useSelector(isLoadingSelect);

  const loginBtnHandler = () => {
    dispatch(setUsersList(false));
    dispatch(setReposList(false));
    dispatch(setCard(true));
  };

  return (
    <div className={clsx(styles.listWrapper, isLoading && styles.hide)}>
      {usersList.length ? (
        <Ul className={styles.listWrapperUl}>
          {usersList.map((el: IUserInner) => (
            <li key={el.login}>
              <UserItem user={el} />
            </li>
          ))}
        </Ul>
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
