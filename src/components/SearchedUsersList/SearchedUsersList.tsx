import React from 'react';
import { useSelector } from 'react-redux';

import { UserItem } from '../UserItem';

import { Ul } from 'ui/Ul';

import { searchedUsersListSelect } from 'store/SearchReducer/selectors';

import styles from './styles.module.css';

export const SearchedUsersList: React.FC = () => {
  const searchedUsersList = useSelector(searchedUsersListSelect);

  return (
    <Ul className={styles.listWrapperUl}>
      {searchedUsersList.items.map((el) => (
        <li key={el.login}>
          <UserItem user={el} />
        </li>
      ))}
    </Ul>
  );
};
