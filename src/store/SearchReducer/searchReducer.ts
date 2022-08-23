import { ActionsType } from './actions/actions';

import { IInitialState } from '../../model/search/types';

import { searchUserDefault } from '../../constants/searchConstants';
import * as CONST from './constants';

const initialState: IInitialState = {
  user: searchUserDefault,
  usersList: [],
  reposList: [],
  lastRequestType: '',
  usersListOpened: false,
  reposListOpened: false,
  cardOpened: false,
  loading: false,
  error: false,
  searchList: [],
  searchHistoryListFlag: false,
  modalFlag: false,
  modalText: '',
  modalType: 'search',
  isMobile: false,
  isAndroid: false,
  isMobileStart: true,
};

export const searchReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case CONST.FETCH_LOGIN:
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
          location: action.location,
          lastActivityDate: action.lastActivityDate,
        },
      };

    case CONST.CARD_OPEN_FLAG:
      return { ...state, cardOpened: action.cardOpenedFlag };

    case CONST.LOADING:
      return { ...state, loading: action.loadingFlag };

    case CONST.ERROR:
      return { ...state, error: action.errorFlag };

    case CONST.USERS_LIST_OPENED_FLAG:
      return { ...state, usersListOpened: action.userListFlag };

    case CONST.FETCH_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList,
        lastRequestType: action.lastRequestType,
      };

    case CONST.FETCH_SEARCH_HISTORY:
      return {
        ...state,
        searchList: [...state.searchList, action.searchList],
      };

    case CONST.FETCH_ALL_HISTORY:
      return { ...state, searchList: action.allSearchHistory };

    case CONST.SEARCH_HISTORY_LIST_FLAG:
      return { ...state, searchHistoryListFlag: action.searchHistoryListFlag };

    case CONST.FETCH_REPOS_LIST:
      return { ...state, reposList: action.reposList };

    case CONST.REPOS_OPENED_LIST_FLAG:
      return { ...state, reposListOpened: action.reposListFlag };

    case CONST.SEARCH_HISTORY_MODAL_FLAG:
      return {
        ...state,
        modalFlag: action.modalFlag,
        modalText: action.text,
        modalType: action.modalType,
      };

    case CONST.SEARCH_START:
      return {
        ...state,
        error: false,
        cardOpened: false,
        reposListOpened: false,
        usersListOpened: false,
        reposList: [],
        usersList: [],
        loading: true,
      };

    case CONST.SEARCH_IS_MOBILE:
      return { ...state, isMobile: action.isMobile };

    case CONST.SEARCH_IS_ANDROID:
      return { ...state, isAndroid: action.isAndroid };

    case CONST.SEARCH_IS_MOBILE_START:
      return { ...state, isMobileStart: action.isMobileStart };

    default:
      return state;
  }
};
