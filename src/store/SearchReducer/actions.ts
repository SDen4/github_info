/* eslint-disable camelcase */
import {
  SEARCH_LOGIN_SAGA,
  FETCH_LOGIN,
  CARD_OPEN_FLAG,
  LOADING,
  ERROR,
  USERS_LIST_OPENED_FLAG,
  FETCH_USERS_LIST_SAGA,
  FETCH_USERS_LIST,
  FETCH_SEARCH_HISTORY,
  SEARCH_HISTORY_LIST_FLAG,
  FETCH_ALL_HISTORY,
  GET_LOCAL_HISTORY_SAGA,
  REPOS_LIST_SAGA,
  FETCH_REPOS_LIST,
  REPOS_OPENED_LIST_FLAG,
  SEARCH_HISTORY_MODAL_FLAG,
} from './constants';

import { IRepoItem, ISearhHistoryItem, UserInnerType } from './types';

export const searchSaga = (
  login: string,
  history: ISearhHistoryItem[],
  favoritesList?: string[],
) => {
  return {
    type: SEARCH_LOGIN_SAGA,
    login,
    history,
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
    location,
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

export const userListOpenedFlag = (userListFlag: boolean) => {
  return {
    type: USERS_LIST_OPENED_FLAG,
    userListFlag,
  } as const;
};

export const fetchUsersListSaga = (login: string, requestType: string) => {
  return {
    type: FETCH_USERS_LIST_SAGA,
    login,
    requestType,
  } as const;
};

export const fetchUsersList = (
  usersList: UserInnerType[],
  lastRequestType: string,
) => {
  return {
    type: FETCH_USERS_LIST,
    usersList,
    lastRequestType,
  } as const;
};

export const fetchSearhHistory = (searchHistory: ISearhHistoryItem) => {
  return {
    type: FETCH_SEARCH_HISTORY,
    searchHistory,
  } as const;
};

export const searchHistoryLIstFlag = (searchHistoryListFlag: boolean) => {
  return {
    type: SEARCH_HISTORY_LIST_FLAG,
    searchHistoryListFlag,
  } as const;
};

export const fetchAllHistory = (allSearchHistory: ISearhHistoryItem[]) => {
  return {
    type: FETCH_ALL_HISTORY,
    allSearchHistory,
  } as const;
};

export const getLocalHistorySaga = () => {
  return {
    type: GET_LOCAL_HISTORY_SAGA,
  } as const;
};

export const reposListSaga = (login: string) => {
  return {
    type: REPOS_LIST_SAGA,
    login,
  } as const;
};

export const fetchReposList = (reposList: IRepoItem[]) => {
  return {
    type: FETCH_REPOS_LIST,
    reposList,
  } as const;
};

export const reposOpenedListFlag = (reposListFlag: boolean) => {
  return {
    type: REPOS_OPENED_LIST_FLAG,
    reposListFlag,
  } as const;
};

export const modalFlag = (
  modalFlag: boolean,
  text: string,
  modalType: 'search' | 'favorite',
) => {
  return {
    type: SEARCH_HISTORY_MODAL_FLAG,
    modalFlag,
    text,
    modalType,
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
  | modalFlagType;
