/* eslint-disable camelcase */
import { SEARCH_LOGIN_SAGA, FETCH_LOGIN } from './constants';

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

type searchSagaType = ReturnType<typeof searchSaga>;
type fetchLoginType = ReturnType<typeof fetchLogin>;

export type ActionsType = searchSagaType | fetchLoginType;
