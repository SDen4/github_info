import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'ui/Flex';

import { searchedUserSelect } from 'selectors/search';

import styles from './styles.module.css';

export const SearchTitle = () => {
  const searchedUser = useSelector(searchedUserSelect);

  if (!searchedUser) return null;

  return (
    <Flex className={styles.searchedTitle}>
      <p>You&apos;re searching: </p>
      <i>{searchedUser}</i>
    </Flex>
  );
};
