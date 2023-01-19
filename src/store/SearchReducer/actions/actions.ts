/* eslint-disable camelcase */
import {
  IRepoItem,
  ISearchedUsersList,
  ISearhHistoryItem,
  IUserInner,
} from 'model/search/types';

import * as CONST from '../constants';

export const fetchLogin = (payload: {
  name: string;
  login: string;
  followers_url: string;
  following_url: string;
  followers: number;
  following: number;
  created_at: Date;
  avatar_url?: string;
  company?: string;
  email?: string;
  public_repos?: number;
  repos_url?: string;
  location?: string;
  lastActivityDate?: string;
}) => {
  return {
    type: CONST.FETCH_LOGIN,
    payload,
  } as const;
};

export const setCard = (payload: boolean) => {
  return {
    type: CONST.CARD_OPEN_FLAG,
    payload,
  } as const;
};

export const setLoading = (payload: boolean) => {
  return {
    type: CONST.LOADING,
    payload,
  } as const;
};

export const setError = (payload: boolean) => {
  return {
    type: CONST.ERROR,
    payload,
  } as const;
};

export const setUsersList = (payload: boolean) => {
  return {
    type: CONST.USERS_LIST_OPENED_FLAG,
    payload,
  } as const;
};

export const fetchUsersList = (payload: {
  usersList: IUserInner[];
  lastRequestType: string;
}) => {
  return {
    type: CONST.FETCH_USERS_LIST,
    payload,
  } as const;
};

export const fetchSearhHistory = (payload: ISearhHistoryItem) => {
  return {
    type: CONST.FETCH_SEARCH_HISTORY,
    payload,
  } as const;
};

export const setSearchList = (payload: boolean) => {
  return {
    type: CONST.SEARCH_HISTORY_LIST_FLAG,
    payload,
  } as const;
};

export const fetchSearchList = (payload: ISearhHistoryItem[]) => {
  return {
    type: CONST.FETCH_ALL_HISTORY,
    payload,
  } as const;
};

export const fetchReposList = (payload: IRepoItem[]) => {
  return {
    type: CONST.FETCH_REPOS_LIST,
    payload,
  } as const;
};

export const setReposList = (payload: boolean) => {
  return {
    type: CONST.REPOS_OPENED_LIST_FLAG,
    payload,
  } as const;
};

export const setModal = (payload: {
  isModal: boolean;
  modalText: string;
  modalType: 'search' | 'favorite';
}) => {
  return {
    type: CONST.SEARCH_HISTORY_MODAL_FLAG,
    payload,
  } as const;
};

export const getStart = () => {
  return {
    type: CONST.SEARCH_START,
  } as const;
};

export const setMobile = (payload: boolean) => {
  return {
    type: CONST.SEARCH_IS_MOBILE,
    payload,
  } as const;
};

export const setAndroid = (payload: boolean) => {
  return {
    type: CONST.SEARCH_IS_ANDROID,
    payload,
  } as const;
};

export const setMobileStart = (payload: boolean) => {
  return {
    type: CONST.SEARCH_IS_MOBILE_START,
    payload,
  } as const;
};

export const getSearchedUsersList = (payload: ISearchedUsersList) => {
  return {
    type: CONST.GET_SEARCHED_USERS_LIST,
    payload,
  } as const;
};

export const setPage = (payload: number) => {
  return {
    type: CONST.PAGE,
    payload,
  } as const;
};

export const setPageRepos = (payload: number) => {
  return {
    type: CONST.PAGE_REPOS,
    payload,
  } as const;
};

export const getSearchedUser = (payload: string) => {
  return {
    type: CONST.GET_SEARCHED_USER,
    payload,
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
type getSearchedUsersType = ReturnType<typeof getSearchedUsersList>;
type setPageType = ReturnType<typeof setPage>;
type setPageReposType = ReturnType<typeof setPageRepos>;
type getSearchedUserType = ReturnType<typeof getSearchedUser>;

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
  | getSearchedUsersType
  | setPageType
  | setPageReposType
  | getSearchedUserType;
