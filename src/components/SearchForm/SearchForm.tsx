import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from '../../ui/SubmitButton';

import {
  favoriteListFlagSelect,
  favoriteListSelect,
} from '../../store/FavoriteReduser/selectors';
import {
  cardOpenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { searchSaga } from '../../store/SearchReducer/actionsSagas';
import {
  cardOpenedSelect,
  currentUserLoginSelect,
  isMobileSelect,
  reposListOpenedSelect,
  searchHistoryListFlagSelect,
  searchListSelect,
  usersListOpenedSelect,
} from '../../store/SearchReducer/selectors';

import styles from './styles.module.css';

export interface IProps {
  searchFunc: any;
}

const SearchForm: React.FC<IProps> = ({ searchFunc }) => {
  const dispatch = useDispatch();

  const favoritesList = useSelector(favoriteListSelect);
  const favoriteListFlag = useSelector(favoriteListFlagSelect);
  const isMobile = useSelector(isMobileSelect);
  const searchHistoryListFlag = useSelector(searchHistoryListFlagSelect);
  const cardOpened = useSelector(cardOpenedSelect);
  const reposListOpened = useSelector(reposListOpenedSelect);
  const usersListOpened = useSelector(usersListOpenedSelect);
  const searchHistory = useSelector(searchListSelect);
  const login = useSelector(currentUserLoginSelect);

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
