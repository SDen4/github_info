import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'ui/Flex';

import { searchedUserSelect } from 'store/SearchReducer/selectors';

import styles from './styles.module.css';

export const SearchTitle = () => {
  const searchedUser = useSelector(searchedUserSelect);

  return (
    <Flex className={styles.searchedTitle}>
      <p>You&apos;re searching: </p>
      <i>{searchedUser}</i>
    </Flex>
  );
};
