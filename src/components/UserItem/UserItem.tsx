import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex } from '../../ui/Flex';

import { searchSaga } from '../../store/SearchReducer/actions/actionsSagas';
import { searchListSelect } from '../../store/SearchReducer/selectors';
import { UserInnerType } from '$store/SearchReducer/types';

import styles from './styles.module.css';

export interface IProps {
  user: UserInnerType;
}

const UserItem: React.FC<IProps> = ({ user }) => {
  const dispatch = useDispatch();

  const history = useSelector(searchListSelect);

  const itemBthHandler = () => {
    dispatch(searchSaga(user.login, history));
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
