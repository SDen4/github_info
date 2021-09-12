/* eslint-disable camelcase */
import {
  FAVORITE_BTN_FLAG,
  FAVORITE_LIST,
  FAVORITE_LIST_ADD,
  FAVORITE_LIST_SAGA,
  FAVORITE_LIST_FLAG,
  FAVORITE_USER_FLAG,
  NOTE_FLAG,
} from './constants';
import { FavoriteUser } from './types';

export const setFavoriteBtnFlag = (favoriteBtnFlag: boolean) => {
  return {
    type: FAVORITE_BTN_FLAG,
    favoriteBtnFlag,
  } as const;
};

export const fetchFavoriteList = (favoriteList: FavoriteUser[]) => {
  return {
    type: FAVORITE_LIST,
    favoriteList,
  } as const;
};

export const fetchFavoriteListAdd = (favoriteList: FavoriteUser) => {
  return {
    type: FAVORITE_LIST_ADD,
    favoriteList,
  } as const;
};

export const getFavoriteListSaga = () => {
  return {
    type: FAVORITE_LIST_SAGA,
  } as const;
};

export const favoriteListFlag = (favoriteListFlag: boolean) => {
  return {
    type: FAVORITE_LIST_FLAG,
    favoriteListFlag,
  } as const;
};

export const favoriteUserFlag = (favoriteUserFlag: boolean) => {
  return {
    type: FAVORITE_USER_FLAG,
    favoriteUserFlag,
  } as const;
};

export const noteFlag = (noteFlag: boolean) => {
  return {
    type: NOTE_FLAG,
    noteFlag,
  } as const;
};

type setFavoriteBtnFlagType = ReturnType<typeof setFavoriteBtnFlag>;
type fetchFavoriteListType = ReturnType<typeof fetchFavoriteList>;
type fetchFavoriteListAddType = ReturnType<typeof fetchFavoriteListAdd>;
type getFavoriteListSagaType = ReturnType<typeof getFavoriteListSaga>;
type favoriteListFlagType = ReturnType<typeof favoriteListFlag>;
type favoriteUserFlagType = ReturnType<typeof favoriteUserFlag>;
type noteFlagType = ReturnType<typeof noteFlag>;

export type ActionsType =
  | setFavoriteBtnFlagType
  | fetchFavoriteListAddType
  | fetchFavoriteListType
  | getFavoriteListSagaType
  | favoriteListFlagType
  | favoriteUserFlagType
  | noteFlagType;
