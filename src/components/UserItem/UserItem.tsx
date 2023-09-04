import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex } from 'ui/Flex';

import { searchListSelect } from 'selectors/search';

import { getGithubUserSaga } from 'store/SearchReducer/actions';

import type { ISearchedUser, IUserInner } from 'model/search/types';

import styles from './styles.module.css';

export const UserItem = ({ user }: { user: IUserInner | ISearchedUser }) => {
  const dispatch = useDispatch();

  const searchList = useSelector(searchListSelect);

  const itemBthHandler = () => {
    dispatch(getGithubUserSaga(user.login, searchList));
  };

  return (
    <Flex className={styles.userItemWrapper}>
      <div className={styles.userItemPhotoWrapper}>
        <img src={user.avatar_url} alt="User's avatar" loading="lazy" />
      </div>

      <Flex className={styles.userInfoUnit}>
        <button type="button" onClick={itemBthHandler}>
          <h2>{user.login}</h2>
        </button>
      </Flex>
    </Flex>
  );
};
