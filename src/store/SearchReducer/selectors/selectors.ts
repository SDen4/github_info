import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '$store/RootReducer';

export const selectFavorite = createSelector(
  (store: AppStateType) => store.favorite,
  (favorite) => favorite,
);
