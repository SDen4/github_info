import { IFavoriteUser } from 'model/favorite/types';
import { ISearhHistoryItem } from 'model/search/types';

import * as CONST from '../constants';

export const searchSaga = (
  login: string,
  history: ISearhHistoryItem[],
  favoritesList?: IFavoriteUser[],
) => {
  return {
    type: CONST.SEARCH_LOGIN_SAGA,
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
