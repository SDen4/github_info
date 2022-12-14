import { ActionsType } from './actions/actions';

import { IInitialState } from 'model/search/types';

import * as CONST from './constants';
import {
  defaultSearchUsersList,
  searchUserDefault,
} from 'constants/searchConstants';

const initialState: IInitialState = {
  searchedUsersList: defaultSearchUsersList,
  searchedUser: '',
  user: searchUserDefault,
  usersList: [],
  reposList: [],
  lastRequestType: '',
  searchList: [],
  modalText: '',
  modalType: 'search',
  isLoading: false,
  isError: false,
  isSearchList: false,
  isModal: false,
  isMobile: false,
  isMobileStart: true,
  isAndroid: false,
  isUsersList: false,
  isReposList: false,
  isCard: false,
  page: 1,
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
          name: action.payload.name,
          login: action.payload.login,
          followersUrl: action.payload.followers_url,
          followingUrl: action.payload.following_url,
          avatarUrl: action.payload.avatar_url,
          followersNum: action.payload.followers,
          followingNum: action.payload.following,
          dataCreated: action.payload.created_at,
          company: action.payload.company,
          email: action.payload.email,
          reposNum: action.payload.public_repos,
          reposUrl: action.payload.repos_url,
          location: action.payload.location,
          lastActivityDate: action.payload.lastActivityDate,
        },
      };

    case CONST.CARD_OPEN_FLAG:
      return { ...state, isCard: action.isCard };

    case CONST.LOADING:
      return { ...state, isLoading: action.isLoading };

    case CONST.ERROR:
      return { ...state, isError: action.isError };

    case CONST.USERS_LIST_OPENED_FLAG:
      return { ...state, isUsersList: action.isUsersList };

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
      return { ...state, searchList: action.searchList };

    case CONST.SEARCH_HISTORY_LIST_FLAG:
      return { ...state, isSearchList: action.isSearchList };

    case CONST.FETCH_REPOS_LIST:
      return { ...state, reposList: action.reposList };

    case CONST.REPOS_OPENED_LIST_FLAG:
      return { ...state, isReposList: action.isReposList };

    case CONST.SEARCH_HISTORY_MODAL_FLAG:
      return {
        ...state,
        isModal: action.isModal,
        modalText: action.modalText,
        modalType: action.modalType,
      };

    case CONST.SEARCH_START:
      return {
        ...state,
        isError: false,
        isCard: false,
        isReposList: false,
        isUsersList: false,
        reposList: [],
        usersList: [],
        isLoading: true,
      };

    case CONST.SEARCH_IS_MOBILE:
      return { ...state, isMobile: action.isMobile };

    case CONST.SEARCH_IS_ANDROID:
      return { ...state, isAndroid: action.isAndroid };

    case CONST.SEARCH_IS_MOBILE_START:
      return { ...state, isMobileStart: action.isMobileStart };

    case CONST.GET_SEARCHED_USERS_LIST:
      return {
        ...state,
        searchedUsersList: action.searchedUsersList,
        isLoading: false,
      };

    case CONST.GET_SEARCHED_USER:
      return { ...state, searchedUser: action.searchedUser };

    case CONST.PAGE:
      return { ...state, page: action.page };

    default:
      return state;
  }
};
