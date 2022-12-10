import React from 'react';
import { useSelector } from 'react-redux';

import {
  pageSelect,
  searchedUsersListSelect,
} from 'store/SearchReducer/selectors';

import { usersPerPage } from 'constants/searchConstants';

export const PaginationInfo = () => {
  const page = Number(useSelector(pageSelect));
  const totalElements = useSelector(searchedUsersListSelect).total_count;

  const start = 1 + usersPerPage * (page - 1);
  const preEnd = start + usersPerPage - 1;
  const end = preEnd > totalElements! ? totalElements : preEnd;

  return (
    <div>
      {start} - {end} from {totalElements}
    </div>
  );
};
