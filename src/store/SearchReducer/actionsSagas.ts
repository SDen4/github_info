import { FavoriteUser } from '../FavoriteReduser/types';
import { ISearhHistoryItem } from './types';

import * as CONST from './constants';

export const searchSaga = (
  login: string,
  history: ISearhHistoryItem[],
  isMobile: boolean,
  favoritesList?: FavoriteUser[],
) => {
  return {
    type: CONST.SEARCH_LOGIN_SAGA,
    login,
    history,
    isMobile,
    favoritesList,
  } as const;
};

export const fetchUsersListSaga = (login: string, requestType: string) => {
  return {
    type: CONST.FETCH_USERS_LIST_SAGA,
    login,
    requestType,
  } as const;
};

export const getLocalHistorySaga = () => {
  return {
    type: CONST.GET_LOCAL_HISTORY_SAGA,
  } as const;
};

export const reposListSaga = (login: string) => {
  return {
    type: CONST.REPOS_LIST_SAGA,
    login,
  } as const;
};

export const searhInitFetchSaga = () => {
  return {
    type: CONST.SEARCH_INIT_SAGA,
  } as const;
};
