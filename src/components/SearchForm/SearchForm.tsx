import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from '../../ui/SubmitButton';

import {
  favoriteListSelect,
  isFavoriteListSelect,
} from '../../store/FavoriteReduser/selectors';
import {
  setCard,
  setReposList,
  setUsersList,
} from '../../store/SearchReducer/actions/actions';
import { searchSaga } from '../../store/SearchReducer/actions/actionsSagas';
import {
  isCardSelect,
  isMobileSelect,
  isReposListSelect,
  isSearchListSelect,
  isUsersListSelect,
  searchListSelect,
  userSelect,
} from '../../store/SearchReducer/selectors';

import styles from './styles.module.css';

export const SearchForm: React.FC<{ searchFunc: any }> = memo(
  ({ searchFunc }) => {
    const dispatch = useDispatch();

    const favoritesList = useSelector(favoriteListSelect);
    const isFavoriteList = useSelector(isFavoriteListSelect);
    const isMobile = useSelector(isMobileSelect);
    const isSearchList = useSelector(isSearchListSelect);
    const isCard = useSelector(isCardSelect);
    const isReposList = useSelector(isReposListSelect);
    const isUsersList = useSelector(isUsersListSelect);
    const searchList = useSelector(searchListSelect);
    const user = useSelector(userSelect);

    const [searchLogin, setsearchLogin] = useState<string>('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
    const [focusInMobiles, setFocusInMobiles] = useState<boolean>(false);

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

      if (searchLogin.toLocaleLowerCase() === user.login.toLocaleLowerCase()) {
        setsearchLogin('');
        setDisabledBtn(true);
        return;
      }

      dispatch(searchSaga(searchLogin, searchList, favoritesList));
      searchFunc(searchLogin);
      setsearchLogin('');
      setDisabledBtn(true);
    };

    const backBtnHandler = () => {
      dispatch(setUsersList(false));
      dispatch(setReposList(false));
      dispatch(setCard(true));
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
    );
  },
);
