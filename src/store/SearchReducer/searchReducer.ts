import { ActionsType } from './actions/actions';

import { IInitialState } from 'model/search/types';

import * as CONST from './constants';
import { searchUserDefault } from 'constants/searchConstants';

const initialState: IInitialState = {
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

    default:
      return state;
  }
};
