import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex } from 'ui/Flex';
import { SearchTitle } from 'components/SearchTitle';

import { isFavoriteListSelect } from 'selectors/favorite';
import {
  isCardSelect,
  isMobileSelect,
  isReposListSelect,
  isSearchListSelect,
  isUsersListSelect,
} from 'selectors/search';

import { searchUsersSaga } from 'store/SearchReducer/actions';
import {
  setCard,
  setReposList,
  setUsersList,
} from 'store/SearchReducer/searchReducer';

import styles from './styles.module.css';

let timeout: string | number | NodeJS.Timeout | undefined;

export const SearchForm = () => {
  const dispatch = useDispatch();

  const isFavoriteList = useSelector(isFavoriteListSelect);
  const isMobile = useSelector(isMobileSelect);
  const isSearchList = useSelector(isSearchListSelect);
  const isCard = useSelector(isCardSelect);
  const isReposList = useSelector(isReposListSelect);
  const isUsersList = useSelector(isUsersListSelect);

  const [focusInMobiles, setFocusInMobiles] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setFocusInMobiles(
        !(
          isSearchList ||
          isFavoriteList ||
          isCard ||
          isReposList ||
          isUsersList
        ),
      );
    } else {
      setFocusInMobiles(true);
    }
  }, [
    isCard,
    isFavoriteList,
    isMobile,
    isSearchList,
    isReposList,
    isUsersList,
  ]);

  // auto focus on input
  const ref: any = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref?.current) {
        if (focusInMobiles) {
          ref.current.focus();
        } else {
          ref.current.blur();
        }
      }
      clearTimeout(timer);
    }, 700);
  }, [focusInMobiles]);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      let textValue = event?.target.value;

      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        dispatch(searchUsersSaga(textValue));
      }, 1000);
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    (event: any) => {
      event.preventDefault();

      let textValue = event?.target[0].value;

      if (!textValue) return;

      dispatch(searchUsersSaga(textValue));
    },
    [dispatch],
  );

  const backBtnHandler = () => {
    dispatch(setUsersList(false));
    dispatch(setReposList(false));
    dispatch(setCard(true));
  };

  return (
    <Flex className={styles.searchWrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          ref={ref}
          className={styles.input}
          type="text"
          placeholder="Enter the github login"
          onChange={onChange}
        />

        <div className={styles.btnsWrapper}>
          {isMobile && (isUsersList || isReposList) && (
            <button
              type="button"
              onClick={backBtnHandler}
              className={styles.rootBtn}
            >
              Back
            </button>
          )}
        </div>
      </form>

      <SearchTitle />
    </Flex>
  );
};
