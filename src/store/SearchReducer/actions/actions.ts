/* eslint-disable camelcase */
import {
  IRepoItem,
  ISearhHistoryItem,
  UserInnerType,
} from '../../../model/search/types';

import * as CONST from '../constants';

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

export const cardOpenedFlag = (cardOpenedFlag: boolean) => {
  return {
    type: CONST.CARD_OPEN_FLAG,
    cardOpenedFlag,
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

export const fetchSearhHistory = (searchList: ISearhHistoryItem) => {
  return {
    type: CONST.FETCH_SEARCH_HISTORY,
    searchList,
  } as const;
};

export const searchHistoryListFlag = (searchHistoryListFlag: boolean) => {
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

export const searchIsMobile = (isMobile: boolean) => {
  return {
    type: CONST.SEARCH_IS_MOBILE,
    isMobile,
  } as const;
};

export const searchIsAndroid = (isAndroid: boolean) => {
  return {
    type: CONST.SEARCH_IS_ANDROID,
    isAndroid,
  } as const;
};

export const searchIsMobileStart = (isMobileStart: boolean) => {
  return {
    type: CONST.SEARCH_IS_MOBILE_START,
    isMobileStart,
  } as const;
};

type fetchLoginType = ReturnType<typeof fetchLogin>;
type cardOPenedFlagType = ReturnType<typeof cardOpenedFlag>;
type loadingFlagType = ReturnType<typeof loadingFlag>;
type errorFlagType = ReturnType<typeof errorFlag>;
type userListOpenedFlagType = ReturnType<typeof userListOpenedFlag>;
type fetchUsersListType = ReturnType<typeof fetchUsersList>;
type fetchSearhHistoryType = ReturnType<typeof fetchSearhHistory>;
type searchHistoryListFlagType = ReturnType<typeof searchHistoryListFlag>;
type fetchAllHistoryType = ReturnType<typeof fetchAllHistory>;
type fetchReposListType = ReturnType<typeof fetchReposList>;
type reposOpenedListFlagType = ReturnType<typeof reposOpenedListFlag>;
type modalFlagType = ReturnType<typeof modalFlag>;
type searhStartType = ReturnType<typeof searhStart>;
type searchIsMobileType = ReturnType<typeof searchIsMobile>;
type searchIsAndroidType = ReturnType<typeof searchIsAndroid>;
type searchIsMobileStartType = ReturnType<typeof searchIsMobileStart>;

export type ActionsType =
  | fetchLoginType
  | cardOPenedFlagType
  | loadingFlagType
  | errorFlagType
  | userListOpenedFlagType
  | fetchUsersListType
  | fetchSearhHistoryType
  | searchHistoryListFlagType
  | fetchAllHistoryType
  | fetchReposListType
  | reposOpenedListFlagType
  | modalFlagType
  | searhStartType
  | searchIsMobileType
  | searchIsAndroidType
  | searchIsMobileStartType;
