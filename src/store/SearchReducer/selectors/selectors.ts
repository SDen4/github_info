import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from 'store/rootReducer';

export const isMobileStartSelect = createSelector(
  (store: AppStateType) => store.search.isMobileStart,
  (isMobileStart) => isMobileStart,
);
export const isMobileSelect = createSelector(
  (store: AppStateType) => store.search.isMobile,
  (isMobile) => isMobile,
);
export const isCardSelect = createSelector(
  (store: AppStateType) => store.search.isCard,
  (isCard) => isCard,
);
export const isSearchListSelect = createSelector(
  (store: AppStateType) => store.search.isSearchList,
  (isSearchList) => isSearchList,
);
export const isErrorSelect = createSelector(
  (store: AppStateType) => store.search.isError,
  (isError) => isError,
);
export const isAndroidSelect = createSelector(
  (store: AppStateType) => store.search.isAndroid,
  (isAndroid) => isAndroid,
);
export const isUsersListSelect = createSelector(
  (store: AppStateType) => store.search.isUsersList,
  (isUsersList) => isUsersList,
);
export const isReposListSelect = createSelector(
  (store: AppStateType) => store.search.isReposList,
  (isReposList) => isReposList,
);
export const reposListSelect = createSelector(
  (store: AppStateType) => store.search.reposList,
  (reposList) => reposList,
);
export const isLoadingSelect = createSelector(
  (store: AppStateType) => store.search.isLoading,
  (isLoading) => isLoading,
);
export const isModalSelect = createSelector(
  (store: AppStateType) => store.search.isModal,
  (isModal) => isModal,
);
export const userSelect = createSelector(
  (store: AppStateType) => store.search.user,
  (user) => user,
);
export const searchListSelect = createSelector(
  (store: AppStateType) => store.search.searchList,
  (searchList) => searchList,
);
export const modalTextSelect = createSelector(
  (store: AppStateType) => store.search.modalText,
  (modalText) => modalText,
);
export const modalTypeSelect = createSelector(
  (store: AppStateType) => store.search.modalType,
  (modalType) => modalType,
);
export const lastRequestTypeSelect = createSelector(
  (store: AppStateType) => store.search.lastRequestType,
  (lastRequestType) => lastRequestType,
);
export const usersListSelect = createSelector(
  (store: AppStateType) => store.search.usersList,
  (usersList) => usersList,
);
export const searchedUsersListSelect = createSelector(
  (store: AppStateType) => store.search.searchedUsersList,
  (searchedUsersList) => searchedUsersList,
);
