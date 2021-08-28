/* eslint-disable camelcase */
import { SEARCH_LOGIN_SAGA, FETCH_USERS_LIST_SAGA } from './constants';

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
}

export interface InitialStateType {
  user: UserType;
  usersList: UserType[];
  usersListOpened: boolean;
  cardOpened: boolean;
  loading: boolean;
  error: boolean;
}

export interface SearchSagaWorkerType {
  type: typeof SEARCH_LOGIN_SAGA;
  login: string;
}

export interface IFetchUsersListSagaWorker {
  type: typeof FETCH_USERS_LIST_SAGA;
  login: string;
  requestType: string;
}
