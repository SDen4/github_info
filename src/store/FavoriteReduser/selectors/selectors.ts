import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '$store/rootReducer';

export const favoriteListSelect = createSelector(
  (store: AppStateType) => store.favorite.favoriteList,
  (favoriteList) => favoriteList,
);
export const isFavoriteUserSelect = createSelector(
  (store: AppStateType) => store.favorite.isFavoriteUser,
  (isFavoriteUser) => isFavoriteUser,
);
export const isNoteBtnSelect = createSelector(
  (store: AppStateType) => store.favorite.isNoteBtn,
  (isNoteBtn) => isNoteBtn,
);
export const noteSelect = createSelector(
  (store: AppStateType) => store.favorite.note,
  (note) => note,
);
export const isNoteSelect = createSelector(
  (store: AppStateType) => store.favorite.isNote,
  (isNote) => isNote,
);
export const isFavoriteListSelect = createSelector(
  (store: AppStateType) => store.favorite.isFavoriteList,
  (isFavoriteList) => isFavoriteList,
);
