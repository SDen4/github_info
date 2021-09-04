/* eslint-disable camelcase */
import {
  FAVORITE_BTN_FLAG,
  FAVORITE_LIST,
  FAVORITE_LIST_ADD,
  FAVORITE_LIST_SAGA,
} from './constants';

export const setFavoriteBtnFlag = (favoriteBtnFlag: boolean) => {
  return {
    type: FAVORITE_BTN_FLAG,
    favoriteBtnFlag,
  } as const;
};

export const fetchFavoriteList = (favoriteList: string[]) => {
  return {
    type: FAVORITE_LIST,
    favoriteList,
  } as const;
};

export const fetchFavoriteListAdd = (favoriteList: string) => {
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

type setFavoriteBtnFlagType = ReturnType<typeof setFavoriteBtnFlag>;
type fetchFavoriteListType = ReturnType<typeof fetchFavoriteList>;
type fetchFavoriteListAddType = ReturnType<typeof fetchFavoriteListAdd>;
type getFavoriteListSagaType = ReturnType<typeof getFavoriteListSaga>;

export type ActionsType =
  | setFavoriteBtnFlagType
  | fetchFavoriteListAddType
  | fetchFavoriteListType
  | getFavoriteListSagaType;
