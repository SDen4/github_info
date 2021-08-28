/* eslint-disable camelcase */
import {
  SEARCH_LOGIN_SAGA,
  FETCH_LOGIN,
  CARD_OPEN_FLAG,
  LOADING,
  ERROR,
} from './constants';

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
  created_at: Date,
  avatar_url?: string,
  company?: string,
  email?: string,
  public_repos?: number,
  repos_url?: string,
) => {
  return {
    type: FETCH_LOGIN,
    name,
    login,
    followers_url,
    following_url,
    followers,
    following,
    created_at,
    avatar_url,
    company,
    email,
    public_repos,
    repos_url,
  } as const;
};

export const cardOPenedFlag = (cardOPenedFlag: boolean) => {
  return {
    type: CARD_OPEN_FLAG,
    cardOPenedFlag,
  } as const;
};

export const loadingFlag = (loadingFlag: boolean) => {
  return {
    type: LOADING,
    loadingFlag,
  } as const;
};

export const errorFlag = (errorFlag: boolean) => {
  return {
    type: ERROR,
    errorFlag,
  } as const;
};

type searchSagaType = ReturnType<typeof searchSaga>;
type fetchLoginType = ReturnType<typeof fetchLogin>;
type cardOPenedFlagType = ReturnType<typeof cardOPenedFlag>;
type loadingFlagType = ReturnType<typeof loadingFlag>;
type errorFlagType = ReturnType<typeof errorFlag>;

export type ActionsType =
  | searchSagaType
  | fetchLoginType
  | cardOPenedFlagType
  | loadingFlagType
  | errorFlagType;
