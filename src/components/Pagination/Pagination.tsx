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
  const page = Number(useSelector(pageSelect));

  let paginationLength = 7;
  let leftArr = [];
  let rightArr = [];
  const allArr = [];

  const totalPages = totalElements
    ? Math.ceil(totalElements / usersPerPage)
    : 0;

  for (let i = 1; i <= totalPages; i++) {
    allArr.push(i);
  }

  let left = paginationLength / 2;
  if (totalPages - page < paginationLength / 2) {
    left = paginationLength - (totalPages - page);
  }

  for (let i = 0; i < left; i++) {
    if (page - i > 0) leftArr.unshift(page - i);
  }

  const right = paginationLength - leftArr.length;

  for (let i = 1; i <= right; i++) {
    if (page + i <= totalPages) {
      rightArr.push(Number(page) + i);
    }
  }

  if (rightArr[rightArr.length - 1] !== totalPages) {
    rightArr[rightArr.length - 2] = '...';
    rightArr[rightArr.length - 1] = totalPages;
  }

  if (leftArr[0] !== 1) {
    leftArr[0] = '1';
    leftArr[1] = '...';
  } else {
    leftArr[0] = 1;
  }

  const totalArr = [...leftArr, ...rightArr];

  const start = 1 + usersPerPage * (page - 1);
  const preEnd = start + usersPerPage - 1;
  const end = preEnd > totalElements! ? totalElements : preEnd;

  return (
    <Flex className={styles.paginationWrapper}>
      <div>
        {start} - {end} from {totalElements}
      </div>

      <Flex>
        {totalArr.map((el) => (
          <PaginationButton
            num={el}
            active={el === page}
            key={new Date().getTime()}
          />
        ))}
      </Flex>
    </Flex>
  );
};
