import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex } from '../../ui/Flex';

import { searchSaga } from '../../store/SearchReducer/actions/actionsSagas';
import { searchListSelect } from '../../store/SearchReducer/selectors';

import { IUserInner } from '../../model/search/types';

import styles from './styles.module.css';

export interface IProps {
  user: IUserInner;
}

const UserItem: React.FC<IProps> = ({ user }) => {
  const dispatch = useDispatch();

  const searchList = useSelector(searchListSelect);

  const itemBthHandler = () => {
    dispatch(searchSaga(user.login, searchList));
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

export default memo(UserItem);
