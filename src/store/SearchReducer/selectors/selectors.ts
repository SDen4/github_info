import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '$store/rootReducer';

export const isMobileStartSelect = createSelector(
  (store: AppStateType) => store.search.isMobileStart,
  (isMobileStart) => isMobileStart,
);
export const isMobileSelect = createSelector(
  (store: AppStateType) => store.search.isMobile,
  (isMobile) => isMobile,
);
export const cardOpenedSelect = createSelector(
  (store: AppStateType) => store.search.cardOpened,
  (cardOpened) => cardOpened,
);
export const searchHistoryListFlagSelect = createSelector(
  (store: AppStateType) => store.search.searchHistoryListFlag,
  (searchHistoryListFlag) => searchHistoryListFlag,
);
export const errorSelect = createSelector(
  (store: AppStateType) => store.search.error,
  (error) => error,
);
export const isAndroidSelect = createSelector(
  (store: AppStateType) => store.search.isAndroid,
  (isAndroid) => isAndroid,
);
export const usersListOpenedSelect = createSelector(
  (store: AppStateType) => store.search.usersListOpened,
  (usersListOpened) => usersListOpened,
);
export const reposListOpenedSelect = createSelector(
  (store: AppStateType) => store.search.reposListOpened,
  (reposListOpened) => reposListOpened,
);
export const reposListSelect = createSelector(
  (store: AppStateType) => store.search.reposList,
  (reposList) => reposList,
);
export const loadingSelect = createSelector(
  (store: AppStateType) => store.search.loading,
  (loading) => loading,
);
export const modalFlagSelect = createSelector(
  (store: AppStateType) => store.search.modalFlag,
  (modalFlag) => modalFlag,
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
