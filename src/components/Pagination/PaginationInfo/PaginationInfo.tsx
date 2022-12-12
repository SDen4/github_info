import React from 'react';
import { useSelector } from 'react-redux';

import { pageSelect, searchedUsersListSelect } from 'selectors/search';

import { usersPerPage } from 'constants/searchConstants';

import styles from './styles.module.css';

export const PaginationInfo = () => {
  const page = Number(useSelector(pageSelect));
  const totalElements = useSelector(searchedUsersListSelect).total_count;

  const start = 1 + usersPerPage * (page - 1);
  const preEnd = start + usersPerPage - 1;
  const end = preEnd > totalElements! ? totalElements : preEnd;

  return (
    <div className={styles.paginationInfo}>
      {start} - {end} from {totalElements}
    </div>
  );
};
