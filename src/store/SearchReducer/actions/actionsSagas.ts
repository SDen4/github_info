import type { IFavoriteUser } from 'model/favorite/types';
import type { ISearhHistoryItem } from 'model/search/types';

import * as CONST from '../constants';

export const searchUsersSaga = (searchStr: string) => {
  return {
    type: CONST.SEARCH_USERS_SAGA,
    searchStr,
  } as const;
};

export const getGithubUserSaga = (
  login: string,
  history: ISearhHistoryItem[],
  favoritesList?: IFavoriteUser[],
) => {
  return {
    type: CONST.GET_GITHUB_USER_SAGA,
    login,
    history,
    favoritesList,
  } as const;
};

export const fetchUsersListSaga = (requestType: string) => {
  return {
    type: CONST.FETCH_USERS_LIST_SAGA,
    requestType,
  } as const;
};

export const getLocalHistorySaga = () => {
  return {
    type: CONST.GET_LOCAL_HISTORY_SAGA,
  } as const;
};

export const reposListSaga = () => {
  return {
    type: CONST.REPOS_LIST_SAGA,
  } as const;
};

export const searhInitFetchSaga = () => {
  return {
    type: CONST.SEARCH_INIT_SAGA,
  } as const;
};

export const paginationSaga = (payload: number | string) => {
  return {
    type: CONST.PAGINATION_SAGA,
    payload,
  } as const;
};

export const paginationReposSaga = (payload: number | string) => {
  return {
    type: CONST.PAGINATION_REPOS_SAGA,
    payload,
  } as const;
};
