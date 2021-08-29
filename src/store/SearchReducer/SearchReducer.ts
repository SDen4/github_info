import {
  FETCH_LOGIN,
  CARD_OPEN_FLAG,
  LOADING,
  ERROR,
  USERS_LIST_OPENED_FLAG,
  FETCH_USERS_LIST,
  FETCH_SEARCH_HISTORY,
  SEARCH_HISTORY_LIST_FLAG,
  FETCH_ALL_HISTORY,
} from './constants';

import { InitialStateType } from './types';

import { ActionsType } from './actions';

const initialState: InitialStateType = {
  user: {
    name: '',
    login: '',
    followersUrl: '',
    followingUrl: '',
    avatarUrl: '',
    followersNum: 0,
    followingNum: 0,
    dataCreated: new Date(),
    company: '',
    email: '',
    reposNum: 0,
    reposUrl: '',
  },
  usersList: [],
  lastRequestType: '',
  usersListOpened: false,
  cardOpened: false,
  loading: false,
  error: false,
  searchHistory: [],
  searchHistoryListFlag: false,
};

export const SearchReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        user: {
          name: action.name,
          login: action.login,
          followersUrl: action.followers_url,
          followingUrl: action.following_url,
          avatarUrl: action.avatar_url,
          followersNum: action.followers,
          followingNum: action.following,
          dataCreated: action.created_at,
          company: action.company,
          email: action.email,
          reposNum: action.public_repos,
          reposUrl: action.repos_url,
        },
      };

    case CARD_OPEN_FLAG:
      return {
        ...state,
        cardOpened: action.cardOPenedFlag,
      };

    case LOADING:
      return {
        ...state,
        loading: action.loadingFlag,
      };

    case ERROR:
      return {
        ...state,
        error: action.errorFlag,
      };

    case USERS_LIST_OPENED_FLAG:
      return {
        ...state,
        usersListOpened: action.userListFlag,
      };

    case FETCH_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList,
        lastRequestType: action.lastRequestType,
      };

    case FETCH_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.searchHistory],
      };

    case FETCH_ALL_HISTORY:
      return {
        ...state,
        searchHistory: action.allSearchHistory,
      };

    case SEARCH_HISTORY_LIST_FLAG:
      return {
        ...state,
        searchHistoryListFlag: !state.searchHistoryListFlag,
      };

    default:
      return state;
  }
};
