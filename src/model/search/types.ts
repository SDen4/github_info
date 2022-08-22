/* eslint-disable camelcase */

import { FavoriteUser } from '../favorite/types';

import {
  FETCH_USERS_LIST_SAGA,
  REPOS_LIST_SAGA,
  SEARCH_LOGIN_SAGA,
} from '../../store/SearchReducer/constants';

export interface UserInnerType {
  name: string;
  login: string;
  followers_url: string;
  following_url: string;
  followers: number;
  following: number;
  created_at: Date;
  avatar_url: string;
  company?: string;
  email?: string;
  public_repos?: number;
  repos_url?: string;
  location?: string;
}

export interface UserType {
  name: string;
  login: string;
  followersUrl: string;
  followingUrl: string;
  avatarUrl?: string;
  followersNum: number;
  followingNum: number;
  dataCreated: Date;
  company?: string;
  email?: string;
  reposNum?: number;
  reposUrl?: string;
  location?: string;
  lastActivityDate?: string;
}

export interface ISearhHistoryItem {
  login: string;
  dateOfSearch: Date;
}

export interface IRepoItem {
  name: string;
  html_url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  language: string;
  forks: number;
  watchers: number;
}

export interface InitialStateType {
  user: UserType;
  usersList: UserInnerType[];
  reposList: IRepoItem[];
  lastRequestType: string;
  usersListOpened: boolean;
  reposListOpened: boolean;
  cardOpened: boolean;
  loading: boolean;
  error: boolean;
  searchHistory: ISearhHistoryItem[];
  searchHistoryListFlag: boolean;
  modalFlag: boolean;
  modalText: string;
  modalType: 'search' | 'favorite';
  isMobile: boolean;
  isAndroid: boolean;
  isMobileStart: boolean;
}

export interface SearchSagaWorkerType {
  type: typeof SEARCH_LOGIN_SAGA;
  login: string;
  history: ISearhHistoryItem[];
  favoritesList?: FavoriteUser[];
}

export interface IFetchUsersListSagaWorker {
  type: typeof FETCH_USERS_LIST_SAGA;
  login: string;
  requestType: string;
}

export interface IReposListSagaWorker {
  type: typeof REPOS_LIST_SAGA;
}
