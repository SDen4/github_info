/* eslint-disable camelcase */
import { SEARCH_LOGIN_SAGA } from './constants';

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
}

export interface InitialStateType {
  user: UserType;
  cardOpened: boolean;
  loading: boolean;
}

export interface SearchSagaWorkerType {
  type: typeof SEARCH_LOGIN_SAGA;
  login: string;
}
