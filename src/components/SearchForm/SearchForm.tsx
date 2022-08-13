import React, { useState, useRef, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actionsSagas';

import { SubmitButton } from '../../ui/SubmitButton';

import { AppStateType } from '../../store/RootReducer';
import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { ISearhHistoryItem } from '../../store/SearchReducer/types';

import styles from './SearchForm.module.css';
import {
  cardOpenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';

export interface IProps {
  searchFunc: any;
}

const SearchForm: React.FC<IProps> = ({ searchFunc }) => {
  const dispatch = useDispatch();

  const favoritesList = useSelector<AppStateType, FavoriteUser[]>(
    (store) => store.favorite.favoriteList,
  );
  const favoriteListFlag = useSelector<AppStateType, boolean>(
    (store) => store.favorite.favoriteListFlag,
  );
  const isMobile = useSelector<AppStateType, boolean>(
    (store) => store.search.isMobile,
  );
  const searchHistoryListFlag = useSelector<AppStateType, boolean>(
    (store) => store.search.searchHistoryListFlag,
  );
  const cardOpened = useSelector<AppStateType, boolean>(
    (store) => store.search.cardOpened,
  );
  const reposListOpened = useSelector<AppStateType, boolean>(
    (store) => store.search.reposListOpened,
  );
  const usersListOpened = useSelector<AppStateType, boolean>(
    (store) => store.search.usersListOpened,
  );
  const searchHistory = useSelector<AppStateType, ISearhHistoryItem[]>(
    (store) => store.search.searchHistory,
  );
  const login = useSelector<AppStateType, string>(
    (store) => store.search.user.login,
  );

  const [searchLogin, setsearchLogin] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
  const [focusInMobiles, setFocusInMobiles] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setFocusInMobiles(
        !(
          searchHistoryListFlag ||
          favoriteListFlag ||
          cardOpened ||
          reposListOpened ||
          usersListOpened
        ),
      );
    } else {
      setFocusInMobiles(true);
    }
  }, [
    cardOpened,
    favoriteListFlag,
    isMobile,
    searchHistoryListFlag,
    reposListOpened,
    usersListOpened,
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

    if (searchLogin.toLocaleLowerCase() === login.toLocaleLowerCase()) {
      setsearchLogin('');
      setDisabledBtn(true);
      return;
    }

    dispatch(searchSaga(searchLogin, searchHistory, isMobile, favoritesList));
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

        {isMobile && (usersListOpened || reposListOpened) && (
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
  );
};

export default memo(SearchForm);
