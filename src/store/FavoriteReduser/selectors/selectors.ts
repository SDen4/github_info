import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '$store/rootReducer';

export const favoriteListSelect = createSelector(
  (store: AppStateType) => store.favorite.favoriteList,
  (favoriteList) => favoriteList,
);
export const favoriteUserSelect = createSelector(
  (store: AppStateType) => store.favorite.favoriteUser,
  (favoriteUser) => favoriteUser,
);
export const noteBtnFlagSelect = createSelector(
  (store: AppStateType) => store.favorite.noteBtnFlag,
  (noteBtnFlag) => noteBtnFlag,
);
export const noteSelect = createSelector(
  (store: AppStateType) => store.favorite.note,
  (note) => note,
);
export const noteFlagSelect = createSelector(
  (store: AppStateType) => store.favorite.noteFlag,
  (noteFlag) => noteFlag,
);
export const favoriteListFlagSelect = createSelector(
  (store: AppStateType) => store.favorite.favoriteListFlag,
  (favoriteListFlag) => favoriteListFlag,
);
