import type { FC } from 'react';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Flex } from 'ui/Flex';

import { favoriteListSelect, noteSelect } from 'selectors/favorite';
import { userSelect } from 'selectors/search';

import {
  fetchFavoriteList,
  fetchNote,
  setFavoriteBtnFlag,
  setFavoriteUser,
  setNote,
  setNoteBtn,
} from 'store/FavoriteReduser/favoriteReducer';

import styles from './styles.module.css';

const Note: FC = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();

  const user = useSelector(userSelect);
  const note = useSelector(noteSelect);
  const favoriteList = useSelector(favoriteListSelect);

  useEffect(() => {
    ref.current.focus();

    ref.current.setSelectionRange(
      ref.current.value.length,
      ref.current.value.length,
    );
  }, []);

  const [value, setValue] = useState(note);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    if (event.target.value === ' ' && value.length === 0) {
      return;
    }

    setValue(event.target.value);
  };

  const onCancelHandler = () => {
    dispatch(setNote(false));
    setValue('');
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (favoriteList.find((el) => el.name === user.login)) {
      // user is in favoriteList yet

      dispatch(fetchNote(value.trim()));
      dispatch(setNote(false));
      dispatch(setNoteBtn(true));
      setValue('');

      const newfavoriteUser = { name: user.login, note: value };
      const findUser: any = favoriteList.find((el) => el.name === user.login);
      const index = favoriteList.indexOf(findUser);
      const newFavorites = [...favoriteList];
      newFavorites[index] = newfavoriteUser;

      dispatch(fetchFavoriteList(newFavorites));
      localStorage.setItem('favorite', JSON.stringify(newFavorites));
    } else {
      // user isn't in favoriteList yet

      dispatch(fetchNote(value.trim()));
      dispatch(setNote(false));
      dispatch(setNoteBtn(true));
      setValue('');

      const newfavoriteUser = { name: user.login, note: value };
      dispatch(fetchFavoriteList([...favoriteList, newfavoriteUser]));
      localStorage.setItem(
        'favorite',
        JSON.stringify([...favoriteList, newfavoriteUser]),
      );

      dispatch(setFavoriteUser(true));
      dispatch(setFavoriteBtnFlag(true));
    }
  };

  const onBtnModalHandler = (action: boolean) => {
    if (action) {
      setValue('');

      const newfavoriteUserList = favoriteList.map((el) => {
        if (el.name === user.login) {
          return { name: user.login };
        }
        return el;
      });

      localStorage.setItem('favorite', JSON.stringify(newfavoriteUserList));

      dispatch(fetchNote(''));
      dispatch(fetchFavoriteList(newfavoriteUserList));
      dispatch(setNote(false));
      dispatch(setNoteBtn(false));
    } else {
      setIsModalOpened(false);
    }
  };

  return (
    <Flex className={styles.component}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <textarea onChange={onChangeHandler} value={value} ref={ref} />

        <footer className={styles.formFooter}>
          <div className={styles.lettersQuantity}>
            {value.length ? `Characters: ${value.length}` : ''}
          </div>
          <div className={styles.btnsWrapper}>
            <button type="button" onClick={onCancelHandler}>
              Cancel
            </button>

            {value && (
              <button
                type="button"
                className={styles.buttonDel}
                onClick={() => setIsModalOpened(true)}
              >
                Delete
              </button>
            )}

            <button
              type="submit"
              className={clsx(!value && styles.buttonUnactive)}
              disabled={!value}
            >
              Save and add to favorite list
            </button>
          </div>
        </footer>
      </form>

      {isModalOpened && (
        <div className={styles.noteModal}>
          <span>
            Are you sure to delete the note of{' '}
            <span className={styles.colorText}>{user.login}</span>?
          </span>
          <div className={styles.btnsModalWrapper}>
            <button type="button" onClick={() => onBtnModalHandler(true)}>
              Delete
            </button>
            <button type="button" onClick={() => onBtnModalHandler(false)}>
              Cansel
            </button>
          </div>
        </div>
      )}
    </Flex>
  );
};

export default memo(Note);
