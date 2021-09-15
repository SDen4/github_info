import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import {
  favoriteUserFlag,
  fetchFavoriteList,
  fetchFavoriteListAdd,
  noteBtnFlag,
  noteFlag,
  noteSave,
  setFavoriteBtnFlag,
} from '../../store/FavoriteReduser/actions';

import { INote } from './types';

import styles from './Note.module.css';

const Note: React.FC<INote> = ({ login, favorites, note }) => {
  const dispatch = useDispatch();
  const ref: any = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const [value, setValue] = useState<string>(note);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    if (!event.target.value.trim()) {
      return;
    }
    setValue(event.target.value);
  };

  const onCancelHandler = () => {
    dispatch(noteFlag(false));
    setValue('');
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (favorites.find((el) => el.name === login)) {
      // user is in favorites yet

      dispatch(noteSave(value));
      dispatch(noteFlag(false));
      dispatch(noteBtnFlag(true));
      setValue('');

      const newfavoriteUser = { name: login, note: value };
      const findUser: any = favorites.find((el) => el.name === login);
      const index = favorites.indexOf(findUser);
      const newFavorites = [...favorites];
      newFavorites[index] = newfavoriteUser;

      dispatch(fetchFavoriteList(newFavorites));
      localStorage.setItem('favorite', JSON.stringify(newFavorites));
    } else {
      // user isn't in favorites yet

      dispatch(noteSave(value));
      dispatch(noteFlag(false));
      dispatch(noteBtnFlag(true));
      setValue('');

      const newfavoriteUser = { name: login, note: value };
      dispatch(fetchFavoriteListAdd(newfavoriteUser));
      localStorage.setItem(
        'favorite',
        JSON.stringify([...favorites, newfavoriteUser]),
      );

      dispatch(favoriteUserFlag(true));
      dispatch(setFavoriteBtnFlag(true));
    }
  };

  const onBtnModalHandler = (action: boolean) => {
    if (action) {
      setValue('');

      const newfavoriteUserList = favorites.map((el) => {
        if (el.name === login) {
          return { name: login };
        }
        return el;
      });

      localStorage.setItem('favorite', JSON.stringify(newfavoriteUserList));

      dispatch(noteSave(''));
      dispatch(fetchFavoriteList(newfavoriteUserList));
      dispatch(noteFlag(false));
      dispatch(noteBtnFlag(false));
    } else {
      setIsModalOpened(false);
    }
  };

  return (
    <div className={styles.component}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <textarea onChange={onChangeHandler} value={value} ref={ref} />

        <div className={styles.formBottom}>
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
                className={styles.button_delete}
                onClick={() => setIsModalOpened(true)}
              >
                Delete
              </button>
            )}

            <button
              type="submit"
              className={clsx(!value && styles.button_unactive)}
              disabled={!value}
            >
              Save and add to favorites
            </button>
          </div>
        </div>
      </form>

      {isModalOpened && (
        <div className={styles.noteModal}>
          <span>
            Are you sure to delete the note of{' '}
            <span className={styles.colorText}>{login}</span>?
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
    </div>
  );
};

export default Note;
