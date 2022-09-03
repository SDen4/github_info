/* eslint-disable camelcase */
import { IFavoriteUser } from 'model/favorite/types';

import * as CONST from '../constants';

export const setFavoriteBtnFlag = (isFavoriteBtn: boolean) => {
  return {
    type: CONST.FAVORITE_BTN_FLAG,
    isFavoriteBtn,
  } as const;
};

export const fetchFavoriteList = (favoriteList: IFavoriteUser[]) => {
  return {
    type: CONST.FAVORITE_LIST,
    favoriteList,
  } as const;
};

export const fetchFavoriteListAdd = (favoriteList: IFavoriteUser) => {
  return {
    type: CONST.FAVORITE_LIST_ADD,
    favoriteList,
  } as const;
};

export const getFavoriteListSaga = () => {
  return {
    type: CONST.FAVORITE_LIST_SAGA,
  } as const;
};

export const setFavoriteList = (isFavoriteList: boolean) => {
  return {
    type: CONST.FAVORITE_LIST_FLAG,
    isFavoriteList,
  } as const;
};

export const setFavoriteUser = (isFavoriteUser: boolean) => {
  return {
    type: CONST.FAVORITE_USER_FLAG,
    isFavoriteUser,
  } as const;
};

export const setNote = (isNote: boolean) => {
  return {
    type: CONST.NOTE_FLAG,
    isNote,
  } as const;
};

export const fetchNote = (note: string) => {
  return {
    type: CONST.NOTE_SAVE,
    note,
  } as const;
};

export const setNoteBtn = (isNoteBtn: boolean) => {
  return {
    type: CONST.NOTE_BTN_FLAG,
    isNoteBtn,
  } as const;
};

type setFavoriteBtnFlagType = ReturnType<typeof setFavoriteBtnFlag>;
type fetchFavoriteListType = ReturnType<typeof fetchFavoriteList>;
type fetchFavoriteListAddType = ReturnType<typeof fetchFavoriteListAdd>;
type getFavoriteListSagaType = ReturnType<typeof getFavoriteListSaga>;
type setFavoriteListType = ReturnType<typeof setFavoriteList>;
type setFavoriteUserType = ReturnType<typeof setFavoriteUser>;
type setNoteType = ReturnType<typeof setNote>;
type fetchNoteType = ReturnType<typeof fetchNote>;
type setNoteBtnType = ReturnType<typeof setNoteBtn>;

export type ActionsType =
  | setFavoriteBtnFlagType
  | fetchFavoriteListAddType
  | fetchFavoriteListType
  | getFavoriteListSagaType
  | setFavoriteListType
  | setFavoriteUserType
  | setNoteType
  | fetchNoteType
  | setNoteBtnType;
