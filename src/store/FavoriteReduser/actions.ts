/* eslint-disable camelcase */
import * as CONST from './constants';
import { FavoriteUser } from './types';

export const setFavoriteBtnFlag = (favoriteBtnFlag: boolean) => {
  return {
    type: CONST.FAVORITE_BTN_FLAG,
    favoriteBtnFlag,
  } as const;
};

export const fetchFavoriteList = (favoriteList: FavoriteUser[]) => {
  return {
    type: CONST.FAVORITE_LIST,
    favoriteList,
  } as const;
};

export const fetchFavoriteListAdd = (favoriteList: FavoriteUser) => {
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

export const favoriteListFlag = (favoriteListFlag: boolean) => {
  return {
    type: CONST.FAVORITE_LIST_FLAG,
    favoriteListFlag,
  } as const;
};

export const favoriteUserFlag = (favoriteUserFlag: boolean) => {
  return {
    type: CONST.FAVORITE_USER_FLAG,
    favoriteUserFlag,
  } as const;
};

export const noteFlag = (noteFlag: boolean) => {
  return {
    type: CONST.NOTE_FLAG,
    noteFlag,
  } as const;
};

export const noteSave = (note: string) => {
  return {
    type: CONST.NOTE_SAVE,
    note,
  } as const;
};

export const noteBtnFlag = (noteBtnFlag: boolean) => {
  return {
    type: CONST.NOTE_BTN_FLAG,
    noteBtnFlag,
  } as const;
};

type setFavoriteBtnFlagType = ReturnType<typeof setFavoriteBtnFlag>;
type fetchFavoriteListType = ReturnType<typeof fetchFavoriteList>;
type fetchFavoriteListAddType = ReturnType<typeof fetchFavoriteListAdd>;
type getFavoriteListSagaType = ReturnType<typeof getFavoriteListSaga>;
type favoriteListFlagType = ReturnType<typeof favoriteListFlag>;
type favoriteUserFlagType = ReturnType<typeof favoriteUserFlag>;
type noteFlagType = ReturnType<typeof noteFlag>;
type noteSaveType = ReturnType<typeof noteSave>;
type noteBtnFlagType = ReturnType<typeof noteBtnFlag>;

export type ActionsType =
  | setFavoriteBtnFlagType
  | fetchFavoriteListAddType
  | fetchFavoriteListType
  | getFavoriteListSagaType
  | favoriteListFlagType
  | favoriteUserFlagType
  | noteFlagType
  | noteSaveType
  | noteBtnFlagType;
