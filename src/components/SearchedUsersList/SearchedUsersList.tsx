import React from 'react';
import { useSelector } from 'react-redux';

import { UserItem } from '../UserItem';

import { Ul } from 'ui/Ul';
import { Pagination } from 'components/Pagination';

import { pageSelect, searchedUsersListSelect } from 'selectors/search';

import { paginationSaga } from 'store/SearchReducer/actions';

import { usersPerPage } from 'constants/searchConstants';

import styles from './styles.module.css';

export const SearchedUsersList = () => {
  const searchedUsersList = useSelector(searchedUsersListSelect);
  const page = Number(useSelector(pageSelect));

  return (
    <>
      <Ul className={styles.listWrapperUl}>
        {searchedUsersList.items.map((el) => (
          <li key={el.login}>
            <UserItem user={el} />
          </li>
        ))}
      </Ul>

      <Pagination
        itemsPerPage={usersPerPage}
        totalElements={searchedUsersList.total_count}
        page={page}
        func={paginationSaga}
      />
    </>
  );
};
