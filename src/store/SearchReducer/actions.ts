/* eslint-disable camelcase */
import { FavoriteUser } from '../FavoriteReduser/types';
import * as CONST from './constants';

import { IRepoItem, ISearhHistoryItem, UserInnerType } from './types';

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
  location?: string,
  lastActivityDate?: string,
) => {
  return {
    type: CONST.FETCH_LOGIN,
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
    location,
    lastActivityDate,
  } as const;
};

export const cardOPenedFlag = (cardOPenedFlag: boolean) => {
  return {
    type: CONST.CARD_OPEN_FLAG,
    cardOPenedFlag,
  } as const;
};

export const loadingFlag = (loadingFlag: boolean) => {
  return {
    type: CONST.LOADING,
    loadingFlag,
  } as const;
};

export const errorFlag = (errorFlag: boolean) => {
  return {
    type: CONST.ERROR,
    errorFlag,
  } as const;
};

export const userListOpenedFlag = (userListFlag: boolean) => {
  return {
    type: CONST.USERS_LIST_OPENED_FLAG,
    userListFlag,
  } as const;
};

export const fetchUsersListSaga = (login: string, requestType: string) => {
  return {
    type: CONST.FETCH_USERS_LIST_SAGA,
    login,
    requestType,
  } as const;
};

export const fetchUsersList = (
  usersList: UserInnerType[],
  lastRequestType: string,
) => {
  return {
    type: CONST.FETCH_USERS_LIST,
    usersList,
    lastRequestType,
  } as const;
};

export const fetchSearhHistory = (searchHistory: ISearhHistoryItem) => {
  return {
    type: CONST.FETCH_SEARCH_HISTORY,
    searchHistory,
  } as const;
};

export const searchHistoryLIstFlag = (searchHistoryListFlag: boolean) => {
  return {
    type: CONST.SEARCH_HISTORY_LIST_FLAG,
    searchHistoryListFlag,
  } as const;
};

export const fetchAllHistory = (allSearchHistory: ISearhHistoryItem[]) => {
  return {
    type: CONST.FETCH_ALL_HISTORY,
    allSearchHistory,
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

export const fetchReposList = (reposList: IRepoItem[]) => {
  return {
    type: CONST.FETCH_REPOS_LIST,
    reposList,
  } as const;
};

export const reposOpenedListFlag = (reposListFlag: boolean) => {
  return {
    type: CONST.REPOS_OPENED_LIST_FLAG,
    reposListFlag,
  } as const;
};

export const modalFlag = (
  modalFlag: boolean,
  text: string,
  modalType: 'search' | 'favorite',
) => {
  return {
    type: CONST.SEARCH_HISTORY_MODAL_FLAG,
    modalFlag,
    text,
    modalType,
  } as const;
};

export const searhStart = () => {
  return {
    type: CONST.SEARCH_START,
  } as const;
};

export const searhInitFetch = () => {
  return {
    type: CONST.SEARCH_INIT_SAGA,
  } as const;
};

export const searchIsMobile = (isMobile: boolean) => {
  return {
    type: CONST.SEARCH_IS_MOBILE,
    isMobile,
  } as const;
};

type searchSagaType = ReturnType<typeof searchSaga>;
type fetchLoginType = ReturnType<typeof fetchLogin>;
type cardOPenedFlagType = ReturnType<typeof cardOPenedFlag>;
type loadingFlagType = ReturnType<typeof loadingFlag>;
type errorFlagType = ReturnType<typeof errorFlag>;
type userListOpenedFlagType = ReturnType<typeof userListOpenedFlag>;
type fetchUsersListType = ReturnType<typeof fetchUsersList>;
type fetchSearhHistoryType = ReturnType<typeof fetchSearhHistory>;
type searchHistoryLIstFlagType = ReturnType<typeof searchHistoryLIstFlag>;
type fetchAllHistoryType = ReturnType<typeof fetchAllHistory>;
type fetchReposListType = ReturnType<typeof fetchReposList>;
type reposOpenedListFlagType = ReturnType<typeof reposOpenedListFlag>;
type modalFlagType = ReturnType<typeof modalFlag>;
type searhStartType = ReturnType<typeof searhStart>;
type searchIsMobileType = ReturnType<typeof searchIsMobile>;

export type ActionsType =
  | searchSagaType
  | fetchLoginType
  | cardOPenedFlagType
  | loadingFlagType
  | errorFlagType
  | userListOpenedFlagType
  | fetchUsersListType
  | fetchSearhHistoryType
  | searchHistoryLIstFlagType
  | fetchAllHistoryType
  | fetchReposListType
  | reposOpenedListFlagType
  | modalFlagType
  | searhStartType
  | searchIsMobileType;
