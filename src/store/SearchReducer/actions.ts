/* eslint-disable camelcase */
import { SEARCH_LOGIN_SAGA, FETCH_LOGIN, CARD_OPEN_FLAG } from './constants';

export const searchSaga = (login: string) => {
  return {
    type: SEARCH_LOGIN_SAGA,
    login,
  } as const;
};

export const fetchLogin = (
  name: string,
  login: string,
  followers_url: string,
  following_url: string,
  followers: number,
  following: number,
  avatar_url?: string,
) => {
  return {
    type: FETCH_LOGIN,
    name,
    login,
    followers_url,
    following_url,
    followers,
    following,
    avatar_url,
  } as const;
};

export const cardOPenedFlag = (cardOPenedFlag: boolean) => {
  return {
    type: CARD_OPEN_FLAG,
    cardOPenedFlag,
  } as const;
};

type searchSagaType = ReturnType<typeof searchSaga>;
type fetchLoginType = ReturnType<typeof fetchLogin>;
type cardOPenedFlagType = ReturnType<typeof cardOPenedFlag>;

export type ActionsType = searchSagaType | fetchLoginType | cardOPenedFlagType;
