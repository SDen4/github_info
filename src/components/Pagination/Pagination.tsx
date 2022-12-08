import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'ui/Flex';
import { PaginationButton } from 'components/PaginationButton';

import {
  pageSelect,
  searchedUsersListSelect,
} from 'store/SearchReducer/selectors';

import { usersPerPage } from 'constants/searchConstants';

import styles from './styles.module.css';

export const Pagination = () => {
  const totalElements = useSelector(searchedUsersListSelect).total_count;
  const page = useSelector(pageSelect);

  const totalPages = totalElements
    ? Math.ceil(totalElements / usersPerPage)
    : 0;

  let bigArrPages = [];
  if (totalPages > 8) {
    for (let i = 4; i > 0; i--) {
      bigArrPages.push(totalPages - i);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      bigArrPages.push(i);
    }
  }

  let startArr = [1, 2, 3, 4];
  if (page >= startArr[2] && totalPages > 8) {
    const begin = page - 2;
    const newStartArr = [];
    newStartArr[0] = begin;
    for (let i = 1; i < startArr.length; i++) {
      newStartArr[i] = begin + i;
    }
    startArr = newStartArr.concat();
  }

  const pagesArr =
    totalPages <= 8 ? bigArrPages : [...startArr, '...', ...bigArrPages];

  const start = 1 + usersPerPage * (page - 1);
  const preEnd = start + usersPerPage - 1;
  const end = preEnd > totalElements! ? totalElements : preEnd;

  return (
    <Flex className={styles.paginationWrapper}>
      <div>
        {start} - {end} from {totalElements}
      </div>

      <Flex>
        {pagesArr.map((el) => (
          <PaginationButton num={el} active={el === page} key={el} />
        ))}
      </Flex>
    </Flex>
  );
};
