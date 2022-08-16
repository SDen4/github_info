import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Flex } from '../../ui/Flex';

import {
  favoriteUserFlag,
  fetchFavoriteList,
  fetchFavoriteListAdd,
  noteBtnFlag,
  noteFlag,
  noteSave,
  setFavoriteBtnFlag,
} from '../../store/FavoriteReduser/actions';
import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { AppStateType } from '../../store/RootReducer';

import styles from './styles.module.css';

const Note: React.FC = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();

  const note = useSelector<AppStateType, string>(
    (store) => store.favorite.note,
  );
  const login = useSelector<AppStateType, string>(
    (store) => store.search.user.login,
  );
  const favorites = useSelector<AppStateType, FavoriteUser[]>(
    (store) => store.favorite.favoriteList,
  );

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
              Save and add to favorites
            </button>
          </div>
        </footer>
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
    </Flex>
  );
};

export default memo(Note);
