import { SEARCH_LOGIN_SAGA, FETCH_LOGIN } from './constants';

export const searchSaga = (login: string) => {
  return {
    type: SEARCH_LOGIN_SAGA,
    login,
  } as const;
};

export const fetchLogin = (login: string) => {
  return {
    type: FETCH_LOGIN,
    login,
  } as const;
};

type searchSagaType = ReturnType<typeof searchSaga>;
type fetchLoginType = ReturnType<typeof fetchLogin>;

export type ActionsType = searchSagaType | fetchLoginType;
