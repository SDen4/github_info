/* eslint-disable camelcase */
import { FAVORITE_BTN_FLAG } from './constants';

export const setFavoriteBtnFlag = (favoriteBtnFlag: boolean) => {
  return {
    type: FAVORITE_BTN_FLAG,
    favoriteBtnFlag,
  } as const;
};

type setFavoriteBtnFlagType = ReturnType<typeof setFavoriteBtnFlag>;

export type ActionsType = setFavoriteBtnFlagType;
