import React, { FC } from 'react';

import { PaginationButton } from './PaginationButton';
import { PaginationInfo } from './PaginationInfo';

import { Flex } from 'ui/Flex';

import styles from './styles.module.css';

interface IProps {
  itemsPerPage: number;
  totalElements: number | null;
  page: number;
  func: (page: number | string) => {
    readonly type: string;
    readonly payload: string | number;
  };
}

export const Pagination: FC<IProps> = (props) => {
  const { itemsPerPage, totalElements, page, func } = props;

  const paginationLength = 7;
  const paginationLengthHalf = paginationLength / 2;
  let leftArr = [];
  let rightArr = [];

  const totalPages = totalElements
    ? Math.ceil(totalElements / itemsPerPage)
    : 0;

  let left = paginationLengthHalf;
  if (totalPages - page < paginationLengthHalf) {
    left = paginationLength - (totalPages - page);
  }
  for (let i = 0; i < left; i++) {
    if (page - i > 0) leftArr.unshift(page - i);
  }

  const right = paginationLength - leftArr.length;
  for (let i = 1; i <= right; i++) {
    if (page + i <= totalPages) {
      rightArr.push(page + i);
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

  return (
    <Flex className={styles.paginationWrapper}>
      <PaginationInfo
        totalElements={totalElements}
        page={page}
        itemsPerPage={itemsPerPage}
      />

      <Flex>
        {totalArr.map((el) => (
          <PaginationButton
            num={el}
            active={el === page}
            key={Math.random()}
            func={func}
          />
        ))}
      </Flex>
    </Flex>
  );
};
