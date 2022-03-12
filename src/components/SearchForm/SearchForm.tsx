import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actions';

import SubmitButton from '../../ui/SubmitButton';

import { ISearch } from './types';

import styles from './SearchForm.module.css';

const SearchForm: React.FC<ISearch> = ({
  search,
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

    dispatch(searchSaga(searchLogin, history, isMobile, favoritesList));
    search(searchLogin);
    setsearchLogin('');
    setDisabledBtn(true);
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
      <SubmitButton disabled={disabledBtn}>Search</SubmitButton>
    </form>
  );
};

export default SearchForm;
