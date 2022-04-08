import React, { useState, useRef, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actionsSagas';

import SubmitButton from '../../ui/SubmitButton';

import { ISearch } from './types';

import styles from './SearchForm.module.css';
import {
  cardOPenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';

const SearchForm: React.FC<ISearch> = ({
  search,
  searchState,
  history,
  favoritesList,
  currentUser,
  isMobile,
}) => {
  const [searchLogin, setsearchLogin] = useState<string>('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const dispatch = useDispatch();

  // auto focus on input
  const ref: any = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

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

    if (searchLogin.toLocaleLowerCase() === currentUser.toLocaleLowerCase()) {
      setsearchLogin('');
      setDisabledBtn(true);
      return;
    }

    if (isMobile) {
      document.body.requestFullscreen();
    }

    dispatch(searchSaga(searchLogin, history, isMobile, favoritesList));
    search(searchLogin);
    setsearchLogin('');
    setDisabledBtn(true);
  };

  const backBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOPenedFlag(true));
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

        {isMobile &&
          (searchState.usersListOpened || searchState.reposListOpened) && (
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
