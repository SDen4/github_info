import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'ui/Flex';
import { PaginationButton } from 'components/PaginationButton';

import { searchedUsersListSelect } from 'store/SearchReducer/selectors';

import styles from './styles.module.css';

export const Pagination = () => {
  const totalElements = useSelector(searchedUsersListSelect).total_count;

  return (
    <Flex className={styles.paginationWrapper}>
      <div>1 from {totalElements}</div>

      <Flex>
        <PaginationButton num={1} active />
      </Flex>
    </Flex>
  );
};
