/* eslint-disable camelcase */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type {
  IInitialState,
  IRepoItem,
  ISearchedUsersList,
  ISearhHistoryItem,
  IUserInner,
} from 'model/search/types';

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
  pageRepos: 1,
};

const searchSlice = createSlice({
  name: 'SEARCH',
  initialState,
  reducers: {
    fetchLogin(
      state,
      action: PayloadAction<{
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
      }>,
    ) {
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
    },
    setCard(state, action: PayloadAction<boolean>) {
      return { ...state, isCard: action.payload };
    },
    setLoading(state, action: PayloadAction<boolean>) {
      return { ...state, isLoading: action.payload };
    },
    setError(state, action: PayloadAction<boolean>) {
      return { ...state, isError: action.payload };
    },
    setUsersList(state, action: PayloadAction<boolean>) {
      return { ...state, isUsersList: action.payload };
    },
    fetchUsersList(
      state,
      action: PayloadAction<{
        usersList: IUserInner[];
        lastRequestType: string;
      }>,
    ) {
      return {
        ...state,
        usersList: action.payload.usersList,
        lastRequestType: action.payload.lastRequestType,
      };
    },
    fetchSearhHistory(state, action: PayloadAction<ISearhHistoryItem>) {
      return { ...state, searchList: [...state.searchList, action.payload] };
    },
    setSearchList(state, action: PayloadAction<boolean>) {
      return { ...state, isSearchList: action.payload };
    },
    fetchSearchList(state, action: PayloadAction<ISearhHistoryItem[]>) {
      return { ...state, searchList: action.payload };
    },
    fetchReposList(state, action: PayloadAction<IRepoItem[]>) {
      return { ...state, reposList: action.payload };
    },
    setReposList(state, action: PayloadAction<boolean>) {
      return { ...state, isReposList: action.payload };
    },
    setModal(
      state,
      action: PayloadAction<{
        isModal: boolean;
        modalText: string;
        modalType: 'search' | 'favorite';
      }>,
    ) {
      return {
        ...state,
        isModal: action.payload.isModal,
        modalText: action.payload.modalText,
        modalType: action.payload.modalType,
      };
    },
    getStart(state) {
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
    },
    setMobile(state, action: PayloadAction<boolean>) {
      return { ...state, isMobile: action.payload };
    },
    setAndroid(state, action: PayloadAction<boolean>) {
      return { ...state, isAndroid: action.payload };
    },
    setMobileStart(state, action: PayloadAction<boolean>) {
      return { ...state, isMobileStart: action.payload };
    },
    getSearchedUsersList(state, action: PayloadAction<ISearchedUsersList>) {
      return {
        ...state,
        searchedUsersList: action.payload,
        isLoading: false,
      };
    },
    setPage(state, action: PayloadAction<number>) {
      return { ...state, page: action.payload };
    },
    setPageRepos(state, action: PayloadAction<number>) {
      return { ...state, pageRepos: action.payload };
    },
    getSearchedUser(state, action: PayloadAction<string>) {
      return { ...state, searchedUser: action.payload };
    },
  },
});

export const {
  setCard,
  setLoading,
  setError,
  setUsersList,
  fetchUsersList,
  fetchSearhHistory,
  fetchReposList,
  setSearchList,
  fetchSearchList,
  setReposList,
  setModal,
  getStart,
  setMobile,
  setAndroid,
  setMobileStart,
  getSearchedUsersList,
  setPage,
  setPageRepos,
  getSearchedUser,
  fetchLogin,
} = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export { searchReducer };
