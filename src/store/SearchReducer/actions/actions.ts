/* eslint-disable camelcase */
import {
  IRepoItem,
  ISearhHistoryItem,
  IUserInner,
  searchedUsersListType,
} from 'model/search/types';

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

export const setCard = (isCard: boolean) => {
  return {
    type: CONST.CARD_OPEN_FLAG,
    isCard,
  } as const;
};

export const setLoading = (isLoading: boolean) => {
  return {
    type: CONST.LOADING,
    isLoading,
  } as const;
};

export const setError = (isError: boolean) => {
  return {
    type: CONST.ERROR,
    isError,
  } as const;
};

export const setUsersList = (isUsersList: boolean) => {
  return {
    type: CONST.USERS_LIST_OPENED_FLAG,
    isUsersList,
  } as const;
};

export const fetchUsersList = (
  usersList: IUserInner[],
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

export const setSearchList = (isSearchList: boolean) => {
  return {
    type: CONST.SEARCH_HISTORY_LIST_FLAG,
    isSearchList,
  } as const;
};

export const fetchSearchList = (searchList: ISearhHistoryItem[]) => {
  return {
    type: CONST.FETCH_ALL_HISTORY,
    searchList,
  } as const;
};

export const fetchReposList = (reposList: IRepoItem[]) => {
  return {
    type: CONST.FETCH_REPOS_LIST,
    reposList,
  } as const;
};

export const setReposList = (isReposList: boolean) => {
  return {
    type: CONST.REPOS_OPENED_LIST_FLAG,
    isReposList,
  } as const;
};

export const setModal = (
  isModal: boolean,
  modalText: string,
  modalType: 'search' | 'favorite',
) => {
  return {
    type: CONST.SEARCH_HISTORY_MODAL_FLAG,
    isModal,
    modalText,
    modalType,
  } as const;
};

export const getStart = () => {
  return {
    type: CONST.SEARCH_START,
  } as const;
};

export const setMobile = (isMobile: boolean) => {
  return {
    type: CONST.SEARCH_IS_MOBILE,
    isMobile,
  } as const;
};

export const setAndroid = (isAndroid: boolean) => {
  return {
    type: CONST.SEARCH_IS_ANDROID,
    isAndroid,
  } as const;
};

export const setMobileStart = (isMobileStart: boolean) => {
  return {
    type: CONST.SEARCH_IS_MOBILE_START,
    isMobileStart,
  } as const;
};

export const getSearchedUsers = (searchStr: searchedUsersListType) => {
  return {
    type: CONST.GET_SEARCHED_USERS,
    searchStr,
  } as const;
};

type fetchLoginType = ReturnType<typeof fetchLogin>;
type setCardType = ReturnType<typeof setCard>;
type setLoadingType = ReturnType<typeof setLoading>;
type setErrorType = ReturnType<typeof setError>;
type setUsersListType = ReturnType<typeof setUsersList>;
type fetchUsersListType = ReturnType<typeof fetchUsersList>;
type fetchSearhHistoryType = ReturnType<typeof fetchSearhHistory>;
type setSearchListType = ReturnType<typeof setSearchList>;
type fetchSearchListType = ReturnType<typeof fetchSearchList>;
type fetchReposListType = ReturnType<typeof fetchReposList>;
type setReposListType = ReturnType<typeof setReposList>;
type setModalType = ReturnType<typeof setModal>;
type getStartType = ReturnType<typeof getStart>;
type setMobileType = ReturnType<typeof setMobile>;
type setAndroidType = ReturnType<typeof setAndroid>;
type setMobileStartType = ReturnType<typeof setMobileStart>;
type getSearchedUsersType = ReturnType<typeof getSearchedUsers>;

export type ActionsType =
  | fetchLoginType
  | setCardType
  | setLoadingType
  | setErrorType
  | setUsersListType
  | fetchUsersListType
  | fetchSearhHistoryType
  | setSearchListType
  | fetchSearchListType
  | fetchReposListType
  | setReposListType
  | setModalType
  | getStartType
  | setMobileType
  | setAndroidType
  | setMobileStartType
  | getSearchedUsersType;
