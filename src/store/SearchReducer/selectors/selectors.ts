import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '$store/RootReducer';

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
export const loadingSelect = createSelector(
  (store: AppStateType) => store.search.loading,
  (loading) => loading,
);
export const modalFlagSelect = createSelector(
  (store: AppStateType) => store.search.modalFlag,
  (modalFlag) => modalFlag,
);
