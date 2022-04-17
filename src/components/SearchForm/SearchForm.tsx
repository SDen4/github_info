import React, { useState, useRef, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actionsSagas';

import SubmitButton from '../../ui/SubmitButton';

import { ISearch } from './types';

import styles from './SearchForm.module.css';
import {
  cardOpenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';

const SearchForm: React.FC<ISearch> = ({
  searchFunc,
  search,
  favoritesList,
  favoriteListFlag,
}) => {
  const dispatch = useDispatch();

  const [searchLogin, setsearchLogin] = useState<string>('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [focusInMobiles, setFocusInMobiles] = useState(false);

  useEffect(() => {
    if (search.isMobile) {
      setFocusInMobiles(
        !(
          search.searchHistoryListFlag ||
          favoriteListFlag ||
          search.cardOpened ||
          search.reposListOpened ||
          search.usersListOpened
        ),
      );
    } else {
      setFocusInMobiles(true);
    }
  }, [
    search.cardOpened,
    favoriteListFlag,
    search.isMobile,
    search.searchHistoryListFlag,
    search.reposListOpened,
    search.usersListOpened,
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

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let textValue = event?.target.value;
    setsearchLogin(textValue);

    if (textValue.trim()) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (
      searchLogin.toLocaleLowerCase() === search.user.login.toLocaleLowerCase()
    ) {
      setsearchLogin('');
      setDisabledBtn(true);
      return;
    }

    dispatch(
      searchSaga(
        searchLogin,
        search.searchHistory,
        search.isMobile,
        favoritesList,
      ),
    );
    searchFunc(searchLogin);
    setsearchLogin('');
    setDisabledBtn(true);
  };

  const backBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOpenedFlag(true));
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        ref={ref}
        className={styles.input}
        type="text"
        placeholder="Enter the github login"
        value={searchLogin}
        onChange={changeTextHandler}
      />

      <div className={styles.btnsWrapper}>
        <SubmitButton disabled={disabledBtn}>Search</SubmitButton>

        {search.isMobile && (search.usersListOpened || search.reposListOpened) && (
          <button
            type="button"
            onClick={backBtnHandler}
            className={styles.rootBtn}
          >
            Back
          </button>
          // eslint-disable-next-line indent
        )}
      </div>
    </form>
  );
};

export default memo(SearchForm);
