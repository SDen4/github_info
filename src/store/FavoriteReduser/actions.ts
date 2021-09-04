/* eslint-disable camelcase */
import {
  FAVORITE_BTN_FLAG,
  FAVORITE_LIST,
  FAVORITE_LIST_ADD,
  FAVORITE_LIST_SAGA,
} from './constants';

export const setFavoriteBtnFlag = () => {
  return {
    type: FAVORITE_BTN_FLAG,
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

export const fetchFavoriteListSaga = () => {
  return {
    type: FAVORITE_LIST_SAGA,
  } as const;
};

type setFavoriteBtnFlagType = ReturnType<typeof setFavoriteBtnFlag>;
type fetchFavoriteListType = ReturnType<typeof fetchFavoriteList>;
type fetchFavoriteListAddType = ReturnType<typeof fetchFavoriteListAdd>;
type fetchFavoriteListSagaType = ReturnType<typeof fetchFavoriteListSaga>;

export type ActionsType =
  | setFavoriteBtnFlagType
  | fetchFavoriteListAddType
  | fetchFavoriteListType
  | fetchFavoriteListSagaType;
